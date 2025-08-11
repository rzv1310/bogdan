export type ContactPayload = {
  name: string;
  email?: string;
  phone?: string;
  subject: string;
  message: string;
  files: File[];
  gdpr: boolean;
  honeypot?: string;
};

function delay(ms: number) {
  return new Promise((res) => setTimeout(res, ms));
}

export async function submitContact(payload: ContactPayload): Promise<{ ok: true }> {
  // Simulate network latency
  await delay(800);

  // Simple preflight validations (mirrors frontend)
  if (payload.honeypot && payload.honeypot.trim().length > 0) {
    throw new Error("Spam detectat.");
  }
  if (!payload.name?.trim()) throw new Error("Numele este obligatoriu.");
  if (!payload.email && !payload.phone) throw new Error("Email sau telefon este obligatoriu.");
  if (!payload.subject?.trim()) throw new Error("Subiect obligatoriu.");
  if (!payload.message?.trim() || payload.message.trim().length < 30) {
    throw new Error("Mesaj prea scurt.");
  }

  // Optional: randomly simulate server errors (very low probability)
  if (Math.random() < 0.02) {
    throw new Error("Eroare temporară de server. Încearcă din nou.");
  }

  // Here we'd normally upload files and persist the message to Supabase
  return { ok: true };
}
