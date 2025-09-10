import {
  AlignmentType,
  BorderStyle,
  Document,
  ExternalHyperlink,
  HeadingLevel,
  Header,
  Packer,
  Paragraph,
  Table,
  TableCell,
  TableRow,
  TextRun,
  WidthType,
} from "docx";

const ORANGE = "F97316"; // accent-like orange

function heading(text: string, level: any = HeadingLevel.HEADING_2) {
  return new Paragraph({ text, heading: level, spacing: { after: 120 } });
}

function smallNote(text: string) {
  return new Paragraph({
    children: [
      new TextRun({ text, italics: true, color: "6B7280" }),
    ],
    spacing: { after: 200 },
  });
}

function bullet(text: string) {
  return new Paragraph({ children: [new TextRun(text)], bullet: { level: 0 } });
}

function para(text: string) {
  return new Paragraph({ text });
}

function box(title: string, children: Paragraph[]) {
  const titlePara = new Paragraph({
    children: [new TextRun({ text: title, bold: true })],
    spacing: { after: 120 },
  });

  const table = new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    borders: {
      top: { style: BorderStyle.SINGLE, size: 8, color: ORANGE },
      bottom: { style: BorderStyle.SINGLE, size: 8, color: ORANGE },
      left: { style: BorderStyle.SINGLE, size: 8, color: ORANGE },
      right: { style: BorderStyle.SINGLE, size: 8, color: ORANGE },
      insideHorizontal: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
      insideVertical: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
    },
    rows: [
      new TableRow({
        children: [
          new TableCell({
            children: children,
            margins: { top: 300, bottom: 300, left: 300, right: 300 },
          }),
        ],
      }),
    ],
  });

  return [titlePara, table];
}

export async function generateMalpraxisChecklistDocx(): Promise<Blob> {
  const doc = new Document({
    creator: "Bogdan Lamatic | Avocat Malpraxis Medical, București",
    title: "Checklist documente - Malpraxis Medical & Neglijență în serviciu",
    description: "Checklist completabil pentru pacienți, aparținători, medici/clinici",
    styles: {
      paragraphStyles: [
        {
          id: "Normal",
          name: "Normal",
          basedOn: "Normal",
          next: "Normal",
        },
      ],
    },
    sections: [
      {
        headers: {
          default: new Header({
            children: [
              new Paragraph({
                alignment: AlignmentType.CENTER,
                children: [
                  new TextRun({
                    text: "Bogdan Lamatic | Avocat Malpraxis Medical, București",
                    bold: true,
                  }),
                ],
              }),
              new Paragraph({
                alignment: AlignmentType.CENTER,
                children: [
                  new TextRun({
                    text: "Semnătură: Bogdan Lamatic",
                    italics: true,
                  }),
                ],
              }),
            ],
          }),
        },
        children: [
          heading(
            "Checklist documente - Malpraxis Medical & Neglijență în serviciu",
            HeadingLevel.TITLE
          ),
          smallNote("(autor: Av. Bogdan Lamatic, București)"),

          // Cuprins (actualizabil în Word: F9)
          new Paragraph({ text: "Cuprins", heading: HeadingLevel.HEADING_2 }),
          // A simple manual TOC hint (docx automatic field requires update in Word)
          new Paragraph({
            children: [
              new TextRun({
                text:
                  "Notă: Actualizați cuprinsul din Word cu tasta F9 după deschidere pentru index automat.",
                italics: true,
                color: "6B7280",
              }),
            ],
            spacing: { after: 200 },
          }),

          // A. Pacienți
          ...box("A. Pentru pacienți / aparținători (partea vătămată)", [
            new Paragraph({
              children: [
                new TextRun({ text: "1) Identitate & calitate", bold: true }),
              ],
            }),
            bullet("CI/pașaport (copie)."),
            bullet(
              "Dovada calității (soț/soție, părinte, moștenitor): certificat de căsătorie/naștere/succesiune (dacă e cazul)."
            ),
            bullet(
              "Procura specială/împuternicire avocațială (dacă depune altcineva în numele tău)."
            ),

            new Paragraph({
              spacing: { before: 200 },
              children: [
                new TextRun({ text: "2) Dosar medical complet (cronologic)", bold: true }),
              ],
            }),
            bullet(
              "Bilet de internare/trimitere, foaia de observație clinică, foi ATI, foi de anestezie."
            ),
            bullet(
              "Consimțământ informat (toate formularele semnate), foaia de anestezie, check-listuri perioperatorii."
            ),
            bullet("Raport operator, registrul intervențiilor, epicriza/bilet de externare."),
            bullet(
              "Rezultate analize, imagistică (CD/film + buletine), recomandări postoperatorii."
            ),
            bullet(
              "Scheme de tratament, medicație administrată (ore/dose), prescripții."
            ),
            bullet(
              "Trasabilitatea dispozitivelor/materialelor (etichete, serii/loturi, UDI), fișe incident."
            ),
            bullet(
              "Corespondență cu spitalul/medicul (email/SMS), programări, bilete consultație."
            ),

            new Paragraph({
              spacing: { before: 200 },
              children: [
                new TextRun({ text: "3) Prejudicii & probe", bold: true }),
              ],
            }),
            bullet(
              "Facturi/bonuri: consultații, tratamente ulterioare, medicamente, transport, îngrijire la domiciliu."
            ),
            bullet(
              "Dovezi privind veniturile pierdute: contract de muncă/adeverință venit, concedii medicale, indemnizații."
            ),
            bullet("Fotografii/înregistrări ale leziunilor, jurnale de simptome."),
            bullet("Martori (nume, date contact, ce au văzut/auzit)."),
            bullet(
              "Dacă a survenit decesul: certificat de deces, raport medico-legal."
            ),

            new Paragraph({
              spacing: { before: 200 },
              children: [
                new TextRun({ text: "4) Pentru sesizarea Comisiei de malpraxis (administrativ)", bold: true }),
              ],
            }),
            bullet("Cerere către Comisie (o redactez eu)."),
            bullet("Dosarul medical ordonat cronologic (PDF-uri lizibile)."),
            bullet("Cronologie evenimente (vezi șablonul de mai jos)."),
            bullet("Lista cheltuielilor (cu sume și dovezi)."),
            bullet(
              "Datele asigurătorului de malpraxis al medicului/clinicii (dacă le deții)."
            ),

            new Paragraph({
              spacing: { before: 200 },
              children: [
                new TextRun({ text: "5) Pentru plângerea penală / acțiunea civilă", bold: true }),
              ],
            }),
            bullet("Plângere penală (o redactez eu) + împuternicire avocațială."),
            bullet("Calculul despăgubirilor (materiale/morale)."),
            bullet(
              "Orice sesizări anterioare (Colegiul Medicilor, conducerea spitalului)."
            ),
          ]),

          // B. Medici/clinici
          ...box("B. Pentru medici / clinici (apărare)", [
            new Paragraph({ children: [new TextRun({ text: "1) Identitate profesională & conformitate", bold: true })] }),
            bullet(
              "Aviz de liberă practică, asigurare de răspundere civilă (poliță + anexă), certificări/EMC."
            ),
            bullet(
              "Fișa postului, fișa atribuțiilor, programul/gărzile din perioada incidentului."
            ),
            bullet(
              "Contracte de muncă/colaborare, regulament intern/proceduri aplicabile."
            ),

            new Paragraph({ spacing: { before: 200 }, children: [new TextRun({ text: "2) Documente medicale & standard de îngrijire", bold: true })] }),
            bullet(
              "Dosarul medical integral al pacientului (inclusiv log-uri acces EHR, dacă există)."
            ),
            bullet(
              "Consimțăminte, foi de anestezie/ATI, check-listuri, raport operator, traseu pacient."
            ),
            bullet(
              "Ghiduri/protocoale clinice aplicabile la data faptelor (naționale/ale unității)."
            ),
            bullet(
              "Dovada informării pacientului (materiale scrise, notițe, confirmări)."
            ),

            new Paragraph({ spacing: { before: 200 }, children: [new TextRun({ text: "3) Infrastructură, dispozitive, igienă", bold: true })] }),
            bullet(
              "Trasabilitatea dispozitivelor/materialelor (serii/loturi, UDI), registre sterilizare."
            ),
            bullet(
              "Autorizații/avize (DSP), acreditare ANMCS, proceduri pentru infecții asociate asistenței medicale."
            ),
            bullet("Rapoarte mentenanță aparatură, fișe intervenții tehnice."),

            new Paragraph({ spacing: { before: 200 }, children: [new TextRun({ text: "4) Evenimentul și apărarea", bold: true })] }),
            bullet(
              "Raport intern eveniment advers, declarații personal, listă echipă medicală implicată."
            ),
            bullet(
              "Dovezi privind resursele și contextul (grad ocupare, timpi de așteptare, lipsă resurse neimputabilă)."
            ),
            bullet(
              "Comunicare cu pacientul/familia (email/SMS), propuneri de remediere/monitorizare post-incident."
            ),
            bullet("Coordonate asigurător (notificare claim)."),
          ]),

          // C. Bune practici
          ...box("C. Formatare & bune practici (ambele părți)", [
            bullet(
              "Folosește PDF clare, scanate la min. 300 dpi; denumește fișierele cronologic (\"2025-08-10 – externare.pdf\")."
            ),
            bullet("Nu trimiți originale; aduci originalele doar la solicitarea expresă."),
            bullet("Pune un index al probelor și numerotează paginile."),
            bullet(
              "Respectă GDPR: acoperă CNP-urile altor pacienți; nu publica date sensibile pe email nesecurizat."
            ),
            bullet(
              "Trimite documentele prin link securizat; eu îți pun la dispoziție o adresă de încărcare."
            ),
          ]),

          // D. Termene
          ...box("D. Termene utile (orientativ)", [
            bullet(
              "Comisia de malpraxis: sesizare cât mai repede; acțiunile civile se prescriu, de regulă, în 3 ani de la prejudiciu."
            ),
            bullet("Contestație decizie Comisie: 15 zile de la comunicare."),
            bullet(
              "Penal (ucidere/vătămare din culpă, neglijență în serviciu): termenele de prescripție sunt cele din Codul penal (variază în funcție de încadrare)."
            ),
          ]),

          // Șabloane
          ...box("Șabloane rapide (copiază și completează)", [
            new Paragraph({ children: [new TextRun({ text: "1) Cronologie evenimente (pacient)", bold: true })] }),
            para("Data/ora:"),
            para("Locație (secție/spital):"),
            para("Simptome/diagnostic inițial:"),
            para("Intervenții/medicație:"),
            para("Cine a participat (nume/funcție):"),
            para("Ce s-a întâmplat concret:"),
            para("Efect imediat (durere, complicații, transfer):"),
            para("Document(e) aferente (denumire fișier):"),

            new Paragraph({ spacing: { before: 200 }, children: [new TextRun({ text: "2) Lista cheltuieli & pierderi (pacient)", bold: true })] }),
            para("Cheltuială (ex. ‘investigații CT’):"),
            para("Suma:"),
            para("Dată:"),
            para("Dovadă (factură/bon nr.):"),
            para("Observații (ex. ‘recomandat de medicul X’):"),

            new Paragraph({ spacing: { before: 200 }, children: [new TextRun({ text: "3) Punct de vedere preliminar (medic/clinică)", bold: true })] }),
            para("Specialitatea/cadrul:"),
            para("Standardul/ghidul aplicabil:"),
            para("Faptele relevante (cronologic):"),
            para("Evaluarea riscurilor inerente vs. abatere:"),
            para("Măsuri imediate post-eveniment:"),
            para("Documente anexate:"),
          ]),

          new Paragraph({ spacing: { before: 300 } }),
          new Paragraph({
            children: [
              new ExternalHyperlink({
                link: "tel:+40316320183",
                children: [
                  new TextRun({
                    text: "Sună acum: +40 (31) 632 01 83",
                    bold: true,
                    color: ORANGE,
                  }),
                ],
              }),
            ],
            alignment: AlignmentType.CENTER,
          }),
        ],
      },
    ],
  });

  const blob = await Packer.toBlob(doc);
  return blob;
}
