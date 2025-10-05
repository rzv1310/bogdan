import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Send, Paperclip, AlertCircle, CheckCircle2, ArrowRight, Phone, Loader2 } from "lucide-react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { useSEO } from "@/hooks/useSEO";
import { toast } from "@/components/ui/use-toast";
import { submitContactToNetlify, type ContactPayload } from "@/lib/contact";
const MAX_FILE_MB = 10;
const MAX_FILE_BYTES = MAX_FILE_MB * 1024 * 1024;
const MAX_FILES = 5;
const MAX_MESSAGE = 2000;
const allowedTypes: string[] = [
  "application/pdf",
  "image/jpeg",
  "image/png",
  "image/jpg",
];

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

export default function Contact() {
  useSEO({
    title: "Contact - Cabinet Avocat Bogdan Lamatic",
    description: "Contactează Cabinet Avocat Bogdan Lamatic pentru consultanță juridică penală.",
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

  // Refs for focusing/scrolling to first error
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const subjectRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const gdprRef = useRef<HTMLButtonElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const selectedTotalSize = useMemo(() => files.reduce((s, f) => s + f.size, 0), [files]);

  // Draft persistence
  const DRAFT_KEY = "contact_draft_v1";
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
    if (!name.trim()) e.name = "Te rog completează numele.";
    if (!email.trim() && !phone.trim()) e.contact = "Completează email sau telefon.";
    if (email && !isEmail(email)) e.email = "Email invalid.";
    if (phone && !isPhone(phone)) e.phone = "Telefon invalid.";
    if (!subject.trim()) e.subject = "Te rog adaugă un subiect.";
    const len = message.trim().length;
    if (len < 30) e.message = "Descriere prea scurtă (min. 30 caractere).";
    if (len > MAX_MESSAGE) e.message = `Maxim ${MAX_MESSAGE} caractere.`;
    if (!gdpr) e.gdpr = "Bifează consimțământul GDPR.";
    if (files.length > MAX_FILES) e.files = `Poți atașa maximum ${MAX_FILES} fișiere.`;
    for (const f of files) {
      if (!allowedTypes.includes(f.type)) { e.files = `Doar PDF/JPG/PNG. Fișier respins: ${f.name}`; break; }
      if (f.size > MAX_FILE_BYTES) { e.files = `Fișierul ${f.name} depășește ${MAX_FILE_MB} MB.`; break; }
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
      if (!allowedTypes.includes(f.type)) { error = `Doar PDF/JPG/PNG. Fișier respins: ${f.name}`; break; }
      if (f.size > MAX_FILE_BYTES) { error = `Fișierul ${f.name} depășește ${MAX_FILE_MB} MB.`; break; }
      filtered.push(f);
      if (filtered.length >= MAX_FILES) break;
    }
    if (list.length > MAX_FILES) {
      error = `Poți atașa maximum ${MAX_FILES} fișiere.`;
    }
    setFiles(filtered);
    setErrors((old) => ({ ...old, files: error }));
    // reset input value so the same file selection can retrigger onChange
    if (fileInputRef.current) fileInputRef.current.value = "";
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
      setStatus({ type: "error", note: eMap.gdpr ? "Bifează consimțământul GDPR." : "Verifică câmpurile evidențiate." });
      focusFirstError(eMap);
      toast({ title: "Formular incomplet", description: "Verifică câmpurile evidențiate.", });
      return;
    }
    setStatus({ type: "sending", note: "Trimit solicitarea…" });
    try {
      const payload: ContactPayload = { name, email, phone, subject, message, files, gdpr, honeypot: website };
      await submitContactToNetlify(payload, "contact-ro");
      setStatus({ type: "success", note: "Mulțumesc! Revin în 24-48h lucrătoare." });
      toast({ title: "Trimis cu succes", description: "Solicitarea ta a fost trimisă.", });
      clearDraft();
    } catch (err: any) {
      const msg = err?.message || "A apărut o eroare. Încearcă din nou.";
      setStatus({ type: "error", note: msg });
      toast({ title: "Eroare la trimitere", description: msg, });
    }
  };
  return (
    <section className="mx-auto max-w-6xl px-4 md:px-6 py-8">
      {/* SEO JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Attorney",
            name: "Cabinet Avocat Bogdan Lamatic",
            url: "https://avocatpenalbucuresti.ro/contact",
            areaServed: "România",
            telephone: "+40 (31) 632 01 83",
            email: "contact@avocatpenalbucuresti.ro",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Strada Colonel Stefan Stoika 22",
              addressLocality: "București",
              addressRegion: "Bucuresti",
              postalCode: "012244",
              addressCountry: "RO",
              url: "https://www.google.com/maps?cid=17818591254142574295"
            },
            hasMap: "https://www.google.com/maps?cid=17818591254142574295",
            openingHours: ["Mo-Fr 06:00-22:00", "Sa-Su 09:00-20:00"],
            sameAs: ["https://avocatpenalbucuresti.ro"],
            contactPoint: [{ "@type": "ContactPoint", telephone: "+40 (31) 632 01 83", contactType: "customer service" }],
          }),
        }}
      />

      {/* Breadcrumb */}
      <Breadcrumb className="mb-4">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Acasă</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Contact</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      {/* Heading */}
      <motion.h1 initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="text-3xl md:text-4xl font-bold">
        Contact - Cabinet Avocat Bogdan Lamatic
      </motion.h1>
<p className="mt-3 text-muted-foreground max-w-3xl">
        Ai nevoie de asistență penală sau de o evaluare a despăgubirilor? Scrie-mi datele esențiale, atașează actele relevante și îți răspund rapid cu pașii concreți.
      </p>
<div className="mt-4">
        <span className="text-sm md:text-base font-medium">Sună-mă acum:</span>
        <div className="h-5"></div>
        <a href="tel:+40316320183" aria-label="Sună-mă acum">
          <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-white border border-white">
            <Phone /> +40 (31) 632 01 83
          </Button>
        </a>
        <div className="h-5"></div>
        <div className="text-left text-sm text-muted-foreground font-medium">SAU</div>
      </div>

      {/* Form Card */}
      <div className="mt-8 max-w-3xl">
        <Card>
          <CardHeader className="pb-0">
            <CardTitle className="flex items-center gap-2 text-xl">
              <Send className="h-5 w-5" aria-hidden="true" /> Trimite-mi o solicitare online
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <form onSubmit={onSubmit} noValidate aria-busy={status.type === "sending"} className="grid gap-4" name="contact-ro" method="POST" data-netlify="true">
              {/* Hidden field for Netlify Forms (required for React/SPA) */}
              <input type="hidden" name="form-name" value="contact-ro" />
              
              {/* Honeypot anti-spam */}
              <div className="hidden" aria-hidden="true">
                <label htmlFor="website">Website</label>
                <input id="website" name="website" autoComplete="off" tabIndex={-1} value={website} onChange={(e) => setWebsite(e.target.value)} />
              </div>

              <div>
                <label htmlFor="name" className="text-sm font-medium">Nume</label>
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
                  <label htmlFor="phone" className="text-sm font-medium">Telefon</label>
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
                <label htmlFor="subject" className="text-sm font-medium">Subiect</label>
                <Input
                  id="subject"
                  name="subject"
                  autoComplete="off"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder={'de ex. „Plângere penală – parte vătămată” sau de ex. „Urmărire penală – apărare”'}
                  ref={subjectRef}
                  aria-invalid={!!errors.subject}
                  aria-describedby={errors.subject ? "error-subject" : undefined}
                  className={errors.subject ? "mt-1 border-destructive" : "mt-1"}
                />
                {errors.subject && <p id="error-subject" className="text-xs text-destructive mt-1">{errors.subject}</p>}
              </div>

              <div>
                <label htmlFor="message" className="text-sm font-medium">Descriere pe scurt</label>
                <Textarea
                  id="message"
                  name="message"
                  rows={6}
                  maxLength={MAX_MESSAGE}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Data, locul, ce s-a întâmplat, ce dorești să obții; menționează actele pe care le ai."
                  ref={messageRef}
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? "error-message" : undefined}
                  className={errors.message ? "mt-1 border-destructive" : "mt-1"}
                />
                <div className="flex items-center justify-between text-xs text-muted-foreground mt-1">
                  <span>{message.trim().length} / {MAX_MESSAGE} caractere</span>
                  <span>Minim 30 caractere</span>
                </div>
                {errors.message && <p id="error-message" className="text-xs text-destructive mt-1">{errors.message}</p>}
              </div>

              <div>
                <div className="h-5"></div>
                <div className="h-[15px]"></div>
                <h3 className="text-base font-medium">Atașamente (PDF/JPG/PNG, max. {MAX_FILE_MB} MB/fișier)</h3>
                <div className="mt-1">
                  <label className={`relative w-full flex items-center justify-between rounded-md border p-2 cursor-pointer ${errors.files ? "border-destructive" : ""}`}>
                    <span className="flex items-center gap-2"><Paperclip className="w-4 h-4" aria-hidden="true" /><span className="text-sm">Alege fișiere</span></span>
                    <span className="text-xs text-muted-foreground">{files.length ? `${files.length} fișiere selectate · ${(selectedTotalSize/1024/1024).toFixed(1)} MB total` : "Niciun fișier selectat"}</span>
                    <input id="files" name="files" ref={fileInputRef} type="file" multiple accept={allowedTypes.join(",")} onChange={onFiles} className="absolute inset-0 opacity-0 cursor-pointer" aria-label="Alege fișiere" />
                  </label>
                </div>
                {files.length > 0 && (
                  <ul className="mt-2 space-y-1 text-sm">
                    {files.map((f, i) => (
                      <li key={i} className="flex items-center justify-between gap-2">
                        <span className="truncate">{f.name} · {(f.size/1024/1024).toFixed(2)} MB</span>
                        <Button type="button" variant="ghost" size="sm" onClick={() => removeFile(i)} aria-label={`Șterge ${f.name}`}>Șterge</Button>
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
                    Sunt de acord cu prelucrarea datelor conform informării GDPR. Trimiterea formularului nu creează o relație avocat-client; aceasta se formează doar după confirmarea expresă și semnarea împuternicirii.
                  </label>
                </div>
                {errors.gdpr && <p className="text-xs text-destructive">{errors.gdpr}</p>}
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Button type="submit" disabled={status.type === 'sending'} className="inline-flex items-center gap-2">
                  {status.type === 'sending' ? (<><Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" /> Se trimite…</>) : (<><Send className="w-4 h-4" aria-hidden="true" /> Trimite solicitarea</>)}
                </Button>
                <Button type="button" variant="secondary" onClick={clearDraft}>Șterge formularul</Button>
                <div className="text-xs text-muted-foreground">Răspuns în 24-48h lucrătoare (în funcție de urgență)</div>
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
                Notă: la primirea mesajului, îți pot solicita informații/documente suplimentare pentru o evaluare corectă. Pentru urgențe (audieri, percheziții, măsuri preventive), menționează „<span className="text-foreground font-semibold">URGENT</span>” în subiect.
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
