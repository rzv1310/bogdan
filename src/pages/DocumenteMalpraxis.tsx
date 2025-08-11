import { useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";

import { generateMalpraxisChecklistDocx } from "@/lib/docx/malpraxisChecklist";
import { useSEO } from "@/hooks/useSEO";

export default function DocumenteMalpraxis() {
  useSEO({
    title: "Checklist documente – Malpraxis | Descărcare DOCX",
    description: "Descarcă DOCX completabil cu lista documentelor necesare pentru malpraxis medical și neglijență profesională.",
    canonical: window.location.origin + "/documente-malpraxis",
  });

  const handleDownload = useCallback(async () => {
    try {
      const blob = await generateMalpraxisChecklistDocx();
      const url = URL.createObjectURL(blob);
      // Deschide în tab nou (fără a forța downloadul)
      window.open(url, "_blank", "noopener,noreferrer");
      // Revocă URL-ul după un timp scurt
      setTimeout(() => URL.revokeObjectURL(url), 10000);
    } catch (e) {
      console.error("Eroare la generarea DOCX:", e);
    }
  }, []);

  useEffect(() => {
    handleDownload();
  }, [handleDownload]);

  return (
    <main className="container mx-auto max-w-3xl py-10">
      <h1 className="sr-only">Checklist documente – Malpraxis: Descărcare DOCX</h1>
      <Card>
        <CardHeader>
          <CardTitle>Checklist documente – Malpraxis: Descărcare DOCX</CardTitle>
          <CardDescription>
            Fișierul DOCX completabil este generat automat. Dacă descărcarea nu a pornit, folosește butonul de mai jos.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">Document creat de Av. Bogdan Lamatic, București.</p>
        </CardContent>
        <CardFooter className="flex gap-3">
          <Button onClick={handleDownload} size="lg" aria-label="Descarcă din nou DOCX">
            Deschide din nou în tab nou
          </Button>
        </CardFooter>
      </Card>
    </main>
  );
}
