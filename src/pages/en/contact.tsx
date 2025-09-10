import React, { useEffect, useMemo, useRef, useState } from "react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Phone, Send, Paperclip, AlertCircle, CheckCircle2, ArrowRight, Loader2 } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "@/components/ui/use-toast";
import { submitContact, type ContactPayload } from "@/lib/contact";

const MAX_FILE_MB = 10;
const MAX_FILE_BYTES = MAX_FILE_MB * 1024 * 1024;
const MAX_FILES = 5;
const MAX_MESSAGE = 2000;
const allowedTypes: string[] = ["application/pdf", "image/jpeg", "image/png", "image/jpg"];

const isEmail = (v: string) => /^(?=.{3,255}$)[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());
const isPhone = (v: string) => /^(?:\+?\d[\d\s.-]{6,})$/.test(v.trim());

type StatusType = "idle" | "sending" | "success" | "error";

type Errors = {
  name?: string;
  email?: string;
  phone?: string;
  contact?: string;
  subject?: string;
  message?: string;
  files?: string;
  gdpr?: string;
};

export default function ContactEn() {
  useSEO({
    title: "Contact - Attorney Bogdan Lamatic",
    description: "Get in touch for criminal defense and compensation evaluation.",
    alternates: { en: "/en/contact", ro: "/contact", xDefault: "/" },
    locale: "en_US",
    canonical: "/en/contact",
  });

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [files, setFiles] = useState<File[]>([]);
  const [gdpr, setGdpr] = useState(false);
  const [website, setWebsite] = useState(""); // honeypot anti-spam

  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<{ type: StatusType; note: string }>({ type: "idle", note: "" });

  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const subjectRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const gdprRef = useRef<HTMLButtonElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const selectedTotalSize = useMemo(() => files.reduce((s, f) => s + f.size, 0), [files]);

  // Draft persistence
  const DRAFT_KEY = "contact_draft_en_v1";
  useEffect(() => {
    try {
      const raw = localStorage.getItem(DRAFT_KEY);
      if (raw) {
        const d = JSON.parse(raw);
        setName(d.name ?? "");
        setEmail(d.email ?? "");
        setPhone(d.phone ?? "");
        setSubject(d.subject ?? "");
        setMessage(d.message ?? "");
        setGdpr(!!d.gdpr);
      }
    } catch {}
  }, []);
  useEffect(() => {
    const payload = { name, email, phone, subject, message, gdpr };
    try { localStorage.setItem(DRAFT_KEY, JSON.stringify(payload)); } catch {}
  }, [name, email, phone, subject, message, gdpr]);

  const validate = () => {
    const e: Errors = {};
    if (!name.trim()) e.name = "Please enter your name.";
    if (!email.trim() && !phone.trim()) e.contact = "Provide email or phone.";
    if (email && !isEmail(email)) e.email = "Invalid email.";
    if (phone && !isPhone(phone)) e.phone = "Invalid phone.";
    if (!subject.trim()) e.subject = "Please add a subject.";
    const len = message.trim().length;
    if (len < 30) e.message = "Too short (min. 30 characters).";
    if (len > MAX_MESSAGE) e.message = `Max ${MAX_MESSAGE} characters.`;
    if (!gdpr) e.gdpr = "Please check GDPR consent.";
    if (files.length > MAX_FILES) e.files = `You can attach up to ${MAX_FILES} files.`;
    for (const f of files) {
      if (!allowedTypes.includes(f.type)) { e.files = `Only PDF/JPG/PNG. Rejected: ${f.name}`; break; }
      if (f.size > MAX_FILE_BYTES) { e.files = `File ${f.name} exceeds ${MAX_FILE_MB} MB.`; break; }
    }
    setErrors(e);
    return e;
  };

  const focusFirstError = (e: Errors) => {
    if (e.name) { nameRef.current?.focus(); nameRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' }); return; }
    if (e.email || e.contact) { emailRef.current?.focus(); emailRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' }); return; }
    if (e.phone || e.contact) { phoneRef.current?.focus(); phoneRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' }); return; }
    if (e.subject) { subjectRef.current?.focus(); subjectRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' }); return; }
    if (e.message) { messageRef.current?.focus(); messageRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' }); return; }
    if (e.files) { fileInputRef.current?.focus(); fileInputRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' }); return; }
    if (e.gdpr) { document.getElementById('gdpr')?.scrollIntoView({ behavior: 'smooth', block: 'center' }); (gdprRef.current as any)?.focus?.(); }
  };

  const onFiles = (ev: React.ChangeEvent<HTMLInputElement>) => {
    const list = Array.from(ev.target.files || []);
    const filtered: File[] = [];
    let error: string | undefined;

    for (const f of list) {
      if (!allowedTypes.includes(f.type)) { error = `Only PDF/JPG/PNG. Rejected: ${f.name}`; break; }
      if (f.size > MAX_FILE_BYTES) { error = `File ${f.name} exceeds ${MAX_FILE_MB} MB.`; break; }
      filtered.push(f);
      if (filtered.length >= MAX_FILES) break;
    }
    if (list.length > MAX_FILES) {
      error = `You can attach up to ${MAX_FILES} files.`;
    }
    setFiles(filtered);
    setErrors((old) => ({ ...old, files: error }));
    if (fileInputRef.current) fileInputRef.current.value = ""; // reset to allow re-select
  };

  const removeFile = (idx: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== idx));
    setErrors((old) => ({ ...old, files: undefined }));
  };

  const clearDraft = () => {
    setName(""); setEmail(""); setPhone(""); setSubject(""); setMessage(""); setFiles([]); setGdpr(false);
    try { localStorage.removeItem(DRAFT_KEY); } catch {}
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const eMap = validate();
    if (Object.keys(eMap).length > 0 || (website && website.trim().length > 0)) {
      setStatus({ type: "error", note: eMap.gdpr ? "Please check GDPR consent." : "Please review the highlighted fields." });
      focusFirstError(eMap);
      toast({ title: "Incomplete form", description: "Please review the highlighted fields." });
      return;
    }
    setStatus({ type: "sending", note: "Sending your request…" });
    try {
      const payload: ContactPayload = { name, email, phone, subject, message, files, gdpr, honeypot: website };
      await submitContact(payload);
      setStatus({ type: "success", note: "Thank you! I will reply within 24-48 business hours." });
      toast({ title: "Sent successfully", description: "Your request has been sent." });
      clearDraft();
    } catch (err: any) {
      const msg = err?.message || "An error occurred. Please try again.";
      setStatus({ type: "error", note: msg });
      toast({ title: "Submission error", description: msg });
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: typeof window !== "undefined" ? `${window.location.origin}/en` : "/en" },
              { "@type": "ListItem", position: 2, name: "Contact", item: typeof window !== "undefined" ? `${window.location.origin}/en/contact` : "/en/contact" },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "Contact - Attorney Bogdan Lamatic",
            url: typeof window !== "undefined" ? `${window.location.origin}/en/contact` : "/en/contact",
            inLanguage: "en-US",
          }),
        }}
      />

      <section className="mx-auto max-w-6xl px-4 md:px-6 py-8">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Contact - Attorney Bogdan Lamatic</h1>
        <Breadcrumb className="mb-4">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/en">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Contact</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <p className="text-muted-foreground max-w-3xl">Need urgent help or a case assessment? Call me directly.</p>
        <div className="mt-4">
          <a href="tel:+40316320183" aria-label="Call now">
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-white border border-white">
              <Phone /> Call now: +40 (31) 632 01 83
            </Button>
          </a>
        </div>

        <div className="h-6" />
        <div className="mt-8 max-w-3xl">
          <Card>
            <CardHeader className="pb-0">
              <CardTitle className="flex items-center gap-2 text-xl">
                <Send className="h-5 w-5" aria-hidden="true" /> Send me a request online
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <form onSubmit={onSubmit} noValidate aria-busy={status.type === "sending"} className="grid gap-4">
                {/* Honeypot anti-spam */}
                <div className="hidden" aria-hidden="true">
                  <label htmlFor="website">Website</label>
                  <input id="website" name="website" autoComplete="off" tabIndex={-1} value={website} onChange={(e) => setWebsite(e.target.value)} />
                </div>

                <div>
                  <label htmlFor="name" className="text-sm font-medium">Name</label>
                  <Input
                    id="name"
                    name="name"
                    autoComplete="name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    ref={nameRef}
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "error-name" : undefined}
                    className={errors.name ? "mt-1 border-destructive" : "mt-1"}
                  />
                  {errors.name && <p id="error-name" className="text-xs text-destructive mt-1">{errors.name}</p>}
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="text-sm font-medium">Email</label>
                    <Input
                      id="email"
                      type="email"
                      name="email"
                      autoComplete="email"
                      inputMode="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      ref={emailRef}
                      aria-invalid={!!(errors.email || errors.contact)}
                      aria-describedby={(errors.email || errors.contact) ? "error-email" : undefined}
                      className={(errors.email || errors.contact) ? "mt-1 border-destructive" : "mt-1"}
                    />
                    {(errors.email || errors.contact) && <p id="error-email" className="text-xs text-destructive mt-1">{errors.email || errors.contact}</p>}
                  </div>
                  <div>
                    <label htmlFor="phone" className="text-sm font-medium">Phone</label>
                    <Input
                      id="phone"
                      type="tel"
                      name="tel"
                      autoComplete="tel"
                      inputMode="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      ref={phoneRef}
                      aria-invalid={!!(errors.phone || errors.contact)}
                      aria-describedby={(errors.phone || errors.contact) ? "error-phone" : undefined}
                      className={(errors.phone || errors.contact) ? "mt-1 border-destructive" : "mt-1"}
                    />
                    {(errors.phone || errors.contact) && <p id="error-phone" className="text-xs text-destructive mt-1">{errors.phone || errors.contact}</p>}
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                  <Input
                    id="subject"
                    name="subject"
                    autoComplete="off"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder={'e.g. "Criminal complaint - injured party" or "Criminal investigation - defense"'}
                    ref={subjectRef}
                    aria-invalid={!!errors.subject}
                    aria-describedby={errors.subject ? "error-subject" : undefined}
                    className={errors.subject ? "mt-1 border-destructive" : "mt-1"}
                  />
                  {errors.subject && <p id="error-subject" className="text-xs text-destructive mt-1">{errors.subject}</p>}
                </div>

                <div>
                  <label htmlFor="message" className="text-sm font-medium">Brief description</label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={6}
                    maxLength={MAX_MESSAGE}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Date, place, what happened, what you want to achieve; mention the documents you have."
                    ref={messageRef}
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? "error-message" : undefined}
                    className={errors.message ? "mt-1 border-destructive" : "mt-1"}
                  />
                  <div className="flex items-center justify-between text-xs text-muted-foreground mt-1">
                    <span>{message.trim().length} / {MAX_MESSAGE} characters</span>
                    <span>Minimum 30 characters</span>
                  </div>
                  {errors.message && <p id="error-message" className="text-xs text-destructive mt-1">{errors.message}</p>}
                </div>

                <div>
                  <div className="h-5"></div>
                  <div className="h-[15px]"></div>
                  <h3 className="text-base font-medium">Attachments (PDF/JPG/PNG, max. {MAX_FILE_MB} MB/file)</h3>
                  <div className="mt-1">
                    <label className={`relative w-full flex items-center justify-between rounded-md border p-2 cursor-pointer ${errors.files ? "border-destructive" : ""}`}>
                      <span className="flex items-center gap-2"><Paperclip className="w-4 h-4" aria-hidden="true" /><span className="text-sm">Choose files</span></span>
                      <span className="text-xs text-muted-foreground">{files.length ? `${files.length} selected · ${(selectedTotalSize/1024/1024).toFixed(1)} MB total` : "No file selected"}</span>
                      <input id="files" name="files" ref={fileInputRef} type="file" multiple accept={allowedTypes.join(",")} onChange={onFiles} className="absolute inset-0 opacity-0 cursor-pointer" aria-label="Choose files" />
                    </label>
                  </div>
                  {files.length > 0 && (
                    <ul className="mt-2 space-y-1 text-sm">
                      {files.map((f, i) => (
                        <li key={i} className="flex items-center justify-between gap-2">
                          <span className="truncate">{f.name} · {(f.size/1024/1024).toFixed(2)} MB</span>
                          <Button type="button" variant="ghost" size="sm" onClick={() => removeFile(i)} aria-label={`Remove ${f.name}`}>Remove</Button>
                        </li>
                      ))}
                    </ul>
                  )}
                  {errors.files && <p className="text-xs text-destructive mt-1">{errors.files}</p>}
                </div>

                <div className="space-y-1">
                  <div className="flex items-start gap-2 text-sm">
                    <Checkbox id="gdpr" ref={gdprRef as any} checked={gdpr} onCheckedChange={(v) => setGdpr(!!v)} className="mt-1" />
                    <label htmlFor="gdpr" className="leading-relaxed">
                      I agree to the processing of my data according to the GDPR notice. Submitting this form does not create an attorney-client relationship; it is formed only after express confirmation and signing of the power of attorney.
                    </label>
                  </div>
                  {errors.gdpr && <p className="text-xs text-destructive">{errors.gdpr}</p>}
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <Button type="submit" disabled={status.type === 'sending'} className="inline-flex items-center gap-2">
                    {status.type === 'sending' ? (<><Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" /> Sending…</>) : (<><Send className="w-4 h-4" aria-hidden="true" /> Send request</>)}
                  </Button>
                  <Button type="button" variant="secondary" onClick={clearDraft}>Clear form</Button>
                  <div className="text-xs text-muted-foreground">Reply within 24-48 business hours (depending on urgency)</div>
                </div>

                {status.type !== "idle" && (
                  <div
                    role={status.type === 'error' ? 'alert' : 'status'}
                    aria-live={status.type === 'error' ? 'assertive' : 'polite'}
                    className={`mt-3 text-sm rounded-md p-3 border flex items-start gap-2 ${
                      status.type === "success" ? "border-primary/30 bg-primary/10" : ""
                    } ${status.type === "error" ? "border-destructive/30 bg-destructive/10" : ""} ${
                      status.type === "sending" ? "border-muted bg-muted" : ""
                    }`}
                  >
                    {status.type === "success" && <CheckCircle2 className="w-4 h-4 mt-0.5" aria-hidden="true" />}
                    {status.type === "error" && <AlertCircle className="w-4 h-4 mt-0.5" aria-hidden="true" />}
                    {status.type === "sending" && <ArrowRight className="w-4 h-4 mt-0.5" aria-hidden="true" />}
                    <div>{status.note}</div>
                  </div>
                )}

                <p className="mt-4 text-xs text-muted-foreground">
                  Note: upon receiving your message, I may request additional information/documents for an accurate assessment. For urgent matters (hearings, searches, preventive measures), add "<span className="text-foreground font-semibold">URGENT</span>" in the subject.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
}
