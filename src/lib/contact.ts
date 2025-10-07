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
  formName: string,
  formElement: HTMLFormElement
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

  // Use FormData from the form element to automatically capture all fields including reCAPTCHA token
  const formData = new FormData(formElement);
  
  // Ensure form-name is set
  formData.set("form-name", formName);
  
  // Update values from payload (in case they differ from form DOM state)
  formData.set("name", payload.name.trim());
  if (payload.email) formData.set("email", payload.email.trim());
  if (payload.phone) formData.set("phone", payload.phone.trim());
  formData.set("subject", payload.subject.trim());
  formData.set("message", payload.message.trim());
  formData.set("gdpr", payload.gdpr ? "true" : "false");
  formData.set("company_website", payload.honeypot ? payload.honeypot.trim() : "");
  
  // Clear existing file fields and add new ones
  formData.delete("file1");
  formData.delete("file2");
  formData.delete("file3");
  formData.delete("file4");
  formData.delete("file5");
  
  // Attach files (Netlify supports 1 file per field)
  payload.files.forEach((file, index) => {
    formData.append(`file${index + 1}` as string, file, file.name);
  });

  // Submit to Netlify Forms via AJAX - FormData handles Content-Type automatically
  const response = await fetch("/", {
    method: "POST",
    body: formData, // Send FormData directly with reCAPTCHA token included
  });

  if (!response.ok) {
    throw new Error("Eroare la trimitere. Încearcă din nou.");
  }

  return { ok: true };
}
