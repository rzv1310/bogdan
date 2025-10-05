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

  // Build FormData for FormSubmit.co
  const formData = new FormData();
  formData.append("name", payload.name.trim());
  if (payload.email) formData.append("email", payload.email.trim());
  if (payload.phone) formData.append("phone", payload.phone.trim());
  formData.append("_subject", `📩 ${payload.subject.trim()}`);
  formData.append("message", payload.message.trim());
  
  // FormSubmit configuration
  formData.append("_captcha", "false"); // reCAPTCHA invisible
  formData.append("_template", "table"); // Professional email format
  
  // Attach files
  payload.files.forEach((file, index) => {
    formData.append(`attachment${index + 1}`, file, file.name);
  });

  // Send to FormSubmit.co
  const response = await fetch("https://formsubmit.co/contact@avocatpenalbucuresti.ro", {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    throw new Error("Eroare la trimitere. Încearcă din nou.");
  }

  return { ok: true };
}
