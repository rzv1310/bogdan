import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Send, Paperclip, AlertCircle, CheckCircle2, ArrowRight, Phone } from "lucide-react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { useSEO } from "@/hooks/useSEO";

const MAX_FILE_MB = 10;
const MAX_FILE_BYTES = MAX_FILE_MB * 1024 * 1024;

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

  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<{ type: StatusType; note: string }>({ type: "idle", note: "" });

  const selectedTotalSize = useMemo(() => files.reduce((s, f) => s + f.size, 0), [files]);

  const validate = () => {
    const e: Errors = {};
    if (!name.trim()) e.name = "Te rog completează numele.";
    if (!email.trim() && !phone.trim()) e.contact = "Completează email sau telefon.";
    if (email && !isEmail(email)) e.email = "Email invalid.";
    if (phone && !isPhone(phone)) e.phone = "Telefon invalid.";
    if (!subject.trim()) e.subject = "Te rog adaugă un subiect.";
    if (!message.trim() || message.trim().length < 30) e.message = "Descriere prea scurtă (min. 30 caractere).";
    if (!gdpr) e.gdpr = "Bifează consimțământul GDPR.";

    for (const f of files) {
      if (!allowedTypes.includes(f.type)) {
        e.files = `Doar PDF/JPG/PNG. Fișier respins: ${f.name}`;
        break;
      }
      if (f.size > MAX_FILE_BYTES) {
        e.files = `Fișierul ${f.name} depășește ${MAX_FILE_MB} MB.`;
        break;
      }
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onFiles = (e: React.ChangeEvent<HTMLInputElement>) => {
    const list = Array.from(e.target.files || []);
    setFiles(list);
    setErrors((old) => ({ ...old, files: undefined }));
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) {
      setStatus({ type: "error", note: gdpr ? "Verifică câmpurile evidențiate." : "Bifează consimțământul GDPR." });
      return;
    }
    setStatus({ type: "sending", note: "Trimit solicitarea…" });
    setTimeout(() => {
      setStatus({ type: "success", note: "Mulțumesc! Revin în 24–48h lucrătoare." });
      setName(""); setEmail(""); setPhone(""); setSubject(""); setMessage(""); setFiles([]); setGdpr(false);
    }, 800);
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
            url: "https://avocat-drept-penal.ro/contact",
            areaServed: "România",
            telephone: "+40 745 506 443",
            email: "bogdan.lamatic@yahoo.com",
            address: {
              "@type": "PostalAddress",
              streetAddress: "22nd Stefan Stoika Street, bl. 17B, sc. 1, et. 1, ap. 5",
              addressLocality: "Bucharest",
              addressRegion: "1st District",
              addressCountry: "RO",
            },
            openingHours: ["Mo-Fr 08:00-18:00"],
            sameAs: ["https://avocat-drept-penal.ro"],
            contactPoint: [{ "@type": "ContactPoint", telephone: "+40 745 506 443", contactType: "customer service" }],
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
        Ai nevoie de asistență penală sau de o evaluare a despăgubirilor? Scrie-mi datele esențiale, atașează actele relevante (PDF/JPG/PNG, max. {MAX_FILE_MB} MB/fișier) și îți răspund rapid cu pașii concreți.
      </p>
<div className="mt-4">
        <span className="text-sm md:text-base font-medium">Sună-mă acum:</span>
        <div className="h-5"></div>
        <a href="tel:+40745506443" aria-label="Sună-mă acum">
          <Button variant="premium" size="lg" className="border border-hero-foreground">
            <Phone /> +40 745 506 443
          </Button>
        </a>
        <div className="h-5"></div>
      </div>

      {/* Form Card */}
      <div className="mt-8 max-w-3xl">
        <Card>
          <CardHeader className="pb-0">
            <CardTitle className="flex items-center gap-2 text-xl">
              <Send className="h-5 w-5" aria-hidden="true" /> Trimite o solicitare
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <form onSubmit={onSubmit} className="grid gap-4">
              <div>
                <label className="text-sm font-medium">Nume</label>
                <Input value={name} onChange={(e) => setName(e.target.value)} className={errors.name ? "mt-1 border-destructive" : "mt-1"} />
                {errors.name && <p className="text-xs text-destructive mt-1">{errors.name}</p>}
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium">Email</label>
                  <Input value={email} onChange={(e) => setEmail(e.target.value)} className={(errors.email || errors.contact) ? "mt-1 border-destructive" : "mt-1"} />
                  {(errors.email || errors.contact) && <p className="text-xs text-destructive mt-1">{errors.email || errors.contact}</p>}
                </div>
                <div>
                  <label className="text-sm font-medium">Telefon</label>
                  <Input value={phone} onChange={(e) => setPhone(e.target.value)} className={(errors.phone || errors.contact) ? "mt-1 border-destructive" : "mt-1"} />
                  {(errors.phone || errors.contact) && <p className="text-xs text-destructive mt-1">{errors.phone || errors.contact}</p>}
                </div>
              </div>

              <div>
                <label className="text-sm font-medium">Subiect</label>
                <Input value={subject} onChange={(e) => setSubject(e.target.value)} placeholder='de ex. „Plângere penală – parte vătămată” sau de ex. „Urmărire penală – apărare”' className={errors.subject ? "mt-1 border-destructive" : "mt-1"} />
                {errors.subject && <p className="text-xs text-destructive mt-1">{errors.subject}</p>}
              </div>

              <div>
                <label className="text-sm font-medium">Descriere pe scurt</label>
                <Textarea rows={6} value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Data, locul, ce s-a întâmplat, ce dorești să obții; menționează actele pe care le ai." className={errors.message ? "mt-1 border-destructive" : "mt-1"} />
                <div className="flex items-center justify-between text-xs text-muted-foreground mt-1">
                  <span>{message.trim().length} caractere</span>
                  <span>Minim 30 caractere</span>
                </div>
                {errors.message && <p className="text-xs text-destructive mt-1">{errors.message}</p>}
              </div>

              <div>
                <h3 className="text-base font-medium">Atașamente (PDF/JPG/PNG, max. {MAX_FILE_MB} MB/fișier)</h3>
                <div className="mt-1">
                  <label className={`relative w-full flex items-center justify-between rounded-md border p-2 cursor-pointer ${errors.files ? "border-destructive" : ""}`}>
                    <span className="flex items-center gap-2"><Paperclip className="w-4 h-4" aria-hidden="true" /><span className="text-sm">Alege fișiere</span></span>
                    <span className="text-xs text-muted-foreground">{files.length ? `${files.length} fișiere selectate · ${(selectedTotalSize/1024/1024).toFixed(1)} MB total` : "Niciun fișier selectat"}</span>
                    <input type="file" multiple accept={allowedTypes.join(",")} onChange={onFiles} className="absolute inset-0 opacity-0 cursor-pointer" aria-label="Alege fișiere" />
                  </label>
                </div>
                {errors.files && <p className="text-xs text-destructive mt-1">{errors.files}</p>}
              </div>

              <div className="space-y-1">
                <div className="flex items-start gap-2 text-sm">
                  <Checkbox id="gdpr" checked={gdpr} onCheckedChange={(v) => setGdpr(!!v)} className="mt-1" />
                  <label htmlFor="gdpr" className="leading-relaxed">
                    Sunt de acord cu prelucrarea datelor conform informării GDPR. Trimiterea formularului nu creează o relație avocat–client; aceasta se formează doar după confirmarea expresă și semnarea împuternicirii.
                  </label>
                </div>
                {errors.gdpr && <p className="text-xs text-destructive">{errors.gdpr}</p>}
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Button type="submit" className="inline-flex items-center gap-2">
                  <Send className="w-4 h-4" aria-hidden="true" /> Trimite solicitarea
                </Button>
                <div className="text-xs text-muted-foreground">Răspuns în 24–48h lucrătoare (în funcție de urgență)</div>
              </div>

              {status.type !== "idle" && (
                <div
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
