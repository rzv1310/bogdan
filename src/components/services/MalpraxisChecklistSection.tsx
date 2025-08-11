import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { generateMalpraxisChecklistDocx } from "@/lib/docx/malpraxisChecklist";

export default function MalpraxisChecklistSection() {
  const handleDownload = async () => {
    const t = toast({ title: "Se generează documentul...", description: "Pregătim fișierul DOCX completabil." });
    try {
      const blob = await generateMalpraxisChecklistDocx();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "Checklist-Malpraxis-Lamatic.docx";
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
      t.update({ title: "Descărcare inițiată", description: "Checklist DOCX creat cu succes." } as any);
    } catch (err) {
      console.error(err);
      toast({ title: "Eroare la generare", description: "Încercați din nou sau contactați-ne telefonic." });
    }
  };

  return (
    <section className="mt-12 md:mt-16">
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
        Checklist documente – Malpraxis Medical & Neglijență în serviciu
      </h2>
      <p className="text-muted-foreground mt-1">(autor: Av. Bogdan Lamatic, București)</p>

      {/* A. Pentru pacienți / aparținători */}
      <Card className="mt-6 border-accent">
        <CardHeader>
          <h3 className="text-xl font-semibold">A. Pentru pacienți / aparținători (partea vătămată)</h3>
        </CardHeader>
        <CardContent className="text-base leading-relaxed space-y-4">
          <div>
            <h4 className="font-semibold">1) Identitate & calitate</h4>
            <ul className="mt-2 list-disc pl-6 space-y-2">
              <li>CI/pașaport (copie).</li>
              <li>Dovada calității (soț/soție, părinte, moștenitor): certificat de căsătorie/naștere/succesiune (dacă e cazul).</li>
              <li>Procura specială/împuternicire avocațială (dacă depune altcineva în numele tău).</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">2) Dosar medical complet (cronologic)</h4>
            <ul className="mt-2 list-disc pl-6 space-y-2">
              <li>Bilet de internare/trimitere, foaia de observație clinică, foi ATI, foi de anestezie.</li>
              <li>Consimțământ informat (toate formularele semnate), foaia de anestezie, check-listuri perioperatorii.</li>
              <li>Raport operator, registrul intervențiilor, epicriza/bilet de externare.</li>
              <li>Rezultate analize, imagistică (CD/film + buletine), recomandări postoperatorii.</li>
              <li>Scheme de tratament, medicație administrată (ore/dose), prescripții.</li>
              <li>Trasabilitatea dispozitivelor/materialelor (etichete, serii/loturi, UDI), fișe incident.</li>
              <li>Corespondență cu spitalul/medicul (email/SMS), programări, bilete consultație.</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">3) Prejudicii & probe</h4>
            <ul className="mt-2 list-disc pl-6 space-y-2">
              <li>Facturi/bonuri: consultații, tratamente ulterioare, medicamente, transport, îngrijire la domiciliu.</li>
              <li>Dovezi privind veniturile pierdute: contract de muncă/adeverință venit, concedii medicale, indemnizații.</li>
              <li>Fotografii/înregistrări ale leziunilor, jurnale de simptome.</li>
              <li>Martori (nume, date contact, ce au văzut/auzit).</li>
              <li>Dacă a survenit decesul: certificat de deces, raport medico-legal.</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">4) Pentru sesizarea Comisiei de malpraxis (administrativ)</h4>
            <ul className="mt-2 list-disc pl-6 space-y-2">
              <li>Cerere către Comisie (o redactez eu).</li>
              <li>Dosarul medical ordonat cronologic (PDF-uri lizibile).</li>
              <li>Cronologie evenimente (vezi șablonul de mai jos).</li>
              <li>Lista cheltuielilor (cu sume și dovezi).</li>
              <li>Datele asigurătorului de malpraxis al medicului/clinicii (dacă le deții).</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">5) Pentru plângerea penală / acțiunea civilă</h4>
            <ul className="mt-2 list-disc pl-6 space-y-2">
              <li>Plângere penală (o redactez eu) + împuternicire avocațială.</li>
              <li>Calculul despăgubirilor (materiale/morale).</li>
              <li>Orice sesizări anterioare (Colegiul Medicilor, conducerea spitalului).</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* B. Pentru medici / clinici */}
      <Card className="mt-6 border-accent">
        <CardHeader>
          <h3 className="text-xl font-semibold">B. Pentru medici / clinici (apărare)</h3>
        </CardHeader>
        <CardContent className="text-base leading-relaxed space-y-4">
          <div>
            <h4 className="font-semibold">1) Identitate profesională & conformitate</h4>
            <ul className="mt-2 list-disc pl-6 space-y-2">
              <li>Aviz de liberă practică, asigurare de răspundere civilă (poliță + anexă), certificări/EMC.</li>
              <li>Fișa postului, fișa atribuțiilor, programul/gărzile din perioada incidentului.</li>
              <li>Contracte de muncă/colaborare, regulament intern/proceduri aplicabile.</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">2) Documente medicale & standard de îngrijire</h4>
            <ul className="mt-2 list-disc pl-6 space-y-2">
              <li>Dosarul medical integral al pacientului (inclusiv log-uri acces EHR, dacă există).</li>
              <li>Consimțăminte, foi de anestezie/ATI, check-listuri, raport operator, traseu pacient.</li>
              <li>Ghiduri/protocoale clinice aplicabile la data faptelor (naționale/ale unității).</li>
              <li>Dovada informării pacientului (materiale scrise, notițe, confirmări).</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">3) Infrastructură, dispozitive, igienă</h4>
            <ul className="mt-2 list-disc pl-6 space-y-2">
              <li>Trasabilitatea dispozitivelor/materialelor (serii/loturi, UDI), registre sterilizare.</li>
              <li>Autorizații/avize (DSP), acreditare ANMCS, proceduri pentru infecții asociate asistenței medicale.</li>
              <li>Rapoarte mentenanță aparatură, fișe intervenții tehnice.</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">4) Evenimentul și apărarea</h4>
            <ul className="mt-2 list-disc pl-6 space-y-2">
              <li>Raport intern eveniment advers, declarații personal, listă echipă medicală implicată.</li>
              <li>Dovezi privind resursele și contextul (grad ocupare, timpi de așteptare, lipsă resurse neimputabilă).</li>
              <li>Comunicare cu pacientul/familia (email/SMS), propuneri de remediere/monitorizare post-incident.</li>
              <li>Coordonate asigurător (notificare claim).</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* C. Formatare & bune practici */}
      <Card className="mt-6 border-accent">
        <CardHeader>
          <h3 className="text-xl font-semibold">C. Formatare & bune practici (ambele părți)</h3>
        </CardHeader>
        <CardContent className="text-base leading-relaxed">
          <ul className="list-disc pl-6 space-y-2">
            <li>Folosește PDF clare, scanate la min. 300 dpi; denumește fișierele cronologic („2025-08-10 – externare.pdf”).</li>
            <li>Nu trimiți originale; aduci originalele doar la solicitarea expresă.</li>
            <li>Pune un index al probelor și numerotează paginile.</li>
            <li>Respectă GDPR: acoperă CNP-urile altor pacienți; nu publica date sensibile pe email nesecurizat.</li>
            <li>Trimite documentele prin link securizat; eu îți pun la dispoziție o adresă de încărcare.</li>
          </ul>
        </CardContent>
      </Card>

      {/* D. Termene utile */}
      <Card className="mt-6 border-accent">
        <CardHeader>
          <h3 className="text-xl font-semibold">D. Termene utile (orientativ)</h3>
        </CardHeader>
        <CardContent className="text-base leading-relaxed">
          <ul className="list-disc pl-6 space-y-2">
            <li>Comisia de malpraxis: sesizare cât mai repede; acțiunile civile se prescriu, de regulă, în 3 ani de la prejudiciu.</li>
            <li>Contestație decizie Comisie: 15 zile de la comunicare.</li>
            <li>Penal (ucidere/vătămare din culpă, neglijență în serviciu): termenele de prescripție sunt cele din Codul penal (variază în funcție de încadrare).</li>
          </ul>
        </CardContent>
      </Card>

      {/* Șabloane rapide */}
      <Card className="mt-6 border-accent">
        <CardHeader>
          <h3 className="text-xl font-semibold">Șabloane rapide (copiază și completează)</h3>
        </CardHeader>
        <CardContent className="text-base leading-relaxed space-y-4">
          <div>
            <h4 className="font-semibold">1) Cronologie evenimente (pacient)</h4>
            <ul className="mt-2 list-disc pl-6 space-y-1">
              <li>Data/ora:</li>
              <li>Locație (secție/spital):</li>
              <li>Simptome/diagnostic inițial:</li>
              <li>Intervenții/medicație:</li>
              <li>Cine a participat (nume/funcție):</li>
              <li>Ce s-a întâmplat concret:</li>
              <li>Efect imediat (durere, complicații, transfer):</li>
              <li>Document(e) aferente (denumire fișier):</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">2) Lista cheltuieli & pierderi (pacient)</h4>
            <ul className="mt-2 list-disc pl-6 space-y-1">
              <li>Cheltuială (ex. „investigații CT”):</li>
              <li>Suma:</li>
              <li>Dată:</li>
              <li>Dovadă (factură/bon nr.):</li>
              <li>Observații (ex. „recomandat de medicul X”):</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">3) Punct de vedere preliminar (medic/clinică)</h4>
            <ul className="mt-2 list-disc pl-6 space-y-1">
              <li>Specialitatea/cadrul:</li>
              <li>Standardul/ghidul aplicabil:</li>
              <li>Faptele relevante (cronologic):</li>
              <li>Evaluarea riscurilor inerente vs. abatere:</li>
              <li>Măsuri imediate post-eveniment:</li>
              <li>Documente anexate:</li>
            </ul>
          </div>

          <div className="pt-2 flex flex-wrap items-center gap-3">
            <Button variant="premium" size="lg" onClick={handleDownload} aria-label="Descarcă DOCX completabil">
              Descarcă DOCX completabil
            </Button>
            <Button asChild variant="premium" size="lg" aria-label="Sună acum pentru consultanță malpraxis">
              <a href="tel:+40745506443"><Phone className="mr-2 h-4 w-4" /> Sună acum</a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
