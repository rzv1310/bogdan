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

export async function submitContactToNetlify(
  payload: ContactPayload,
  formName: string
): Promise<{ ok: true }> {
  // Anti-spam: honeypot check
  if (payload.honeypot && payload.honeypot.trim().length > 0) {
    throw new Error("Spam detectat.");
  }

  // Validations
  if (!payload.name?.trim()) throw new Error("Numele este obligatoriu.");
  if (!payload.email && !payload.phone) throw new Error("Email sau telefon este obligatoriu.");
  if (!payload.subject?.trim()) throw new Error("Subiect obligatoriu.");
  if (!payload.message?.trim() || payload.message.trim().length < 30) {
    throw new Error("Mesaj prea scurt.");
  }

  // Build FormData for Netlify Forms
  const formData = new FormData();
  formData.append("form-name", formName); // Required for Netlify SPA forms
  formData.append("name", payload.name.trim());
  if (payload.email) formData.append("email", payload.email.trim());
  if (payload.phone) formData.append("phone", payload.phone.trim());
  formData.append("subject", payload.subject.trim());
  formData.append("message", payload.message.trim());
  // Honeypot must match the attribute name declared on the form
  formData.append("bot-field", payload.honeypot ? payload.honeypot.trim() : "");
  // Include GDPR consent explicitly so it appears in Netlify submissions
  formData.append("gdpr", payload.gdpr ? "true" : "false");
  
  // Attach files (Netlify supports 1 file per field)
  payload.files.forEach((file, index) => {
    formData.append(`file${index + 1}` as string, file, file.name);
  });

  // Submit to Netlify Forms via AJAX - FormData handles Content-Type automatically
  const response = await fetch("/", {
    method: "POST",
    body: formData, // Send FormData directly, don't convert to URLSearchParams
  });

  if (!response.ok) {
    throw new Error("Eroare la trimitere. Încearcă din nou.");
  }

  return { ok: true };
}
