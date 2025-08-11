import React from "react";
import {
  Document as PDFDocument,
  Page,
  Text,
  View,
  StyleSheet,
  Link,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: { padding: 32, fontSize: 11, color: "#111827" },
  title: { fontSize: 18, fontWeight: 700, marginBottom: 4 },
  note: { fontSize: 10, color: "#6B7280", marginBottom: 12, fontStyle: "italic" },
  sectionBox: {
    borderColor: "#F97316",
    borderWidth: 2,
    borderStyle: "solid",
    borderRadius: 4,
    padding: 10,
    marginBottom: 12,
  },
  sectionHeading: { fontSize: 14, fontWeight: 700, marginBottom: 6 },
  subHeading: { fontSize: 11, fontWeight: 700, marginTop: 6, marginBottom: 4 },
  bullet: { marginLeft: 10, marginBottom: 2 },
  templatesHeading: { fontSize: 12, fontWeight: 700, marginTop: 8, marginBottom: 4 },
  footerCall: { textAlign: "center", color: "#F97316", fontWeight: 700, marginTop: 12 },
});

function Bullet({ children }: { children: string }) {
  return (
    <View style={styles.bullet}>
      <Text>• {children}</Text>
    </View>
  );
}

export default function MalpraxisChecklistPDF() {
  return (
    <PDFDocument title="Checklist malpraxis medical" author="Av. Bogdan Lamatic">
      <Page size="A4" style={styles.page}>
        <Text style={styles.title}>Checklist documente – Malpraxis Medical & Neglijență în serviciu</Text>
        <Text style={styles.note}>(autor: Av. Bogdan Lamatic, București)</Text>

        {/* A. Pacienți / aparținători */}
        <View style={styles.sectionBox}>
          <Text style={styles.sectionHeading}>A. Pentru pacienți / aparținători (partea vătămată)</Text>

          <Text style={styles.subHeading}>1) Identitate & calitate</Text>
          <Bullet>CI/pașaport (copie).</Bullet>
          <Bullet>Dovada calității (soț/soție, părinte, moștenitor): certificat de căsătorie/naștere/succesiune (dacă e cazul).</Bullet>
          <Bullet>Procura specială/împuternicire avocațială (dacă depune altcineva în numele tău).</Bullet>

          <Text style={styles.subHeading}>2) Dosar medical complet (cronologic)</Text>
          <Bullet>Bilet de internare/trimitere, foaia de observație clinică, foi ATI, foi de anestezie.</Bullet>
          <Bullet>Consimțământ informat (toate formularele semnate), foaia de anestezie, check-listuri perioperatorii.</Bullet>
          <Bullet>Raport operator, registrul intervențiilor, epicriza/bilet de externare.</Bullet>
          <Bullet>Rezultate analize, imagistică (CD/film + buletine), recomandări postoperatorii.</Bullet>
          <Bullet>Scheme de tratament, medicație administrată (ore/dose), prescripții.</Bullet>
          <Bullet>Trasabilitatea dispozitivelor/materialelor (etichete, serii/loturi, UDI), fișe incident.</Bullet>
          <Bullet>Corespondență cu spitalul/medicul (email/SMS), programări, bilete consultație.</Bullet>

          <Text style={styles.subHeading}>3) Prejudicii & probe</Text>
          <Bullet>Facturi/bonuri: consultații, tratamente ulterioare, medicamente, transport, îngrijire la domiciliu.</Bullet>
          <Bullet>Dovezi privind veniturile pierdute: contract de muncă/adeverință venit, concedii medicale, indemnizații.</Bullet>
          <Bullet>Fotografii/înregistrări ale leziunilor, jurnale de simptome.</Bullet>
          <Bullet>Martori (nume, date contact, ce au văzut/auzit).</Bullet>
          <Bullet>Dacă a survenit decesul: certificat de deces, raport medico-legal.</Bullet>

          <Text style={styles.subHeading}>4) Pentru sesizarea Comisiei de malpraxis (administrativ)</Text>
          <Bullet>Cerere către Comisie (o redactez eu).</Bullet>
          <Bullet>Dosarul medical ordonat cronologic (PDF-uri lizibile).</Bullet>
          <Bullet>Cronologie evenimente (vezi șablonul de mai jos).</Bullet>
          <Bullet>Lista cheltuielilor (cu sume și dovezi).</Bullet>
          <Bullet>Datele asigurătorului de malpraxis al medicului/clinicii (dacă le deții).</Bullet>

          <Text style={styles.subHeading}>5) Pentru plângerea penală / acțiunea civilă</Text>
          <Bullet>Plângere penală (o redactez eu) + împuternicire avocațială.</Bullet>
          <Bullet>Calculul despăgubirilor (materiale/morale).</Bullet>
          <Bullet>Orice sesizări anterioare (Colegiul Medicilor, conducerea spitalului).</Bullet>
        </View>

        {/* B. Medici / clinici */}
        <View style={styles.sectionBox}>
          <Text style={styles.sectionHeading}>B. Pentru medici / clinici (apărare)</Text>

          <Text style={styles.subHeading}>1) Identitate profesională & conformitate</Text>
          <Bullet>Aviz de liberă practică, asigurare de răspundere civilă (poliță + anexă), certificări/EMC.</Bullet>
          <Bullet>Fișa postului, fișa atribuțiilor, programul/gărzile din perioada incidentului.</Bullet>
          <Bullet>Contracte de muncă/colaborare, regulament intern/proceduri aplicabile.</Bullet>

          <Text style={styles.subHeading}>2) Documente medicale & standard de îngrijire</Text>
          <Bullet>Dosarul medical integral al pacientului (inclusiv log-uri acces EHR, dacă există).</Bullet>
          <Bullet>Consimțăminte, foi de anestezie/ATI, check-listuri, raport operator, traseu pacient.</Bullet>
          <Bullet>Ghiduri/protocoale clinice aplicabile la data faptelor (naționale/ale unității).</Bullet>
          <Bullet>Dovada informării pacientului (materiale scrise, notițe, confirmări).</Bullet>

          <Text style={styles.subHeading}>3) Infrastructură, dispozitive, igienă</Text>
          <Bullet>Trasabilitatea dispozitivelor/materialelor (serii/loturi, UDI), registre sterilizare.</Bullet>
          <Bullet>Autorizații/avize (DSP), acreditare ANMCS, proceduri pentru infecții asociate asistenței medicale.</Bullet>
          <Bullet>Rapoarte mentenanță aparatură, fișe intervenții tehnice.</Bullet>

          <Text style={styles.subHeading}>4) Evenimentul și apărarea</Text>
          <Bullet>Raport intern eveniment advers, declarații personal, listă echipă medicală implicată.</Bullet>
          <Bullet>Dovezi privind resursele și contextul (grad ocupare, timpi de așteptare, lipsă resurse neimputabilă).</Bullet>
          <Bullet>Comunicare cu pacientul/familia (email/SMS), propuneri de remediere/monitorizare post-incident.</Bullet>
          <Bullet>Coordonate asigurător (notificare claim).</Bullet>
        </View>

        {/* C. Bune practici */}
        <View style={styles.sectionBox}>
          <Text style={styles.sectionHeading}>C. Formatare & bune practici (ambele părți)</Text>
          <Bullet>Folosește PDF clare, scanate la min. 300 dpi; denumește fișierele cronologic ("2025-08-10 – externare.pdf").</Bullet>
          <Bullet>Nu trimiți originale; aduci originalele doar la solicitarea expresă.</Bullet>
          <Bullet>Pune un index al probelor și numerotează paginile.</Bullet>
          <Bullet>Respectă GDPR: acoperă CNP-urile altor pacienți; nu publica date sensibile pe email nesecurizat.</Bullet>
          <Bullet>Trimite documentele prin link securizat; eu îți pun la dispoziție o adresă de încărcare.</Bullet>
        </View>

        {/* D. Termene utile */}
        <View style={styles.sectionBox}>
          <Text style={styles.sectionHeading}>D. Termene utile (orientativ)</Text>
          <Bullet>Comisia de malpraxis: sesizare cât mai repede; acțiunile civile se prescriu, de regulă, în 3 ani de la prejudiciu.</Bullet>
          <Bullet>Contestație decizie Comisie: 15 zile de la comunicare.</Bullet>
          <Bullet>Penal (ucidere/vătămare din culpă, neglijență în serviciu): termenele de prescripție sunt cele din Codul penal (variază în funcție de încadrare).</Bullet>
        </View>

        {/* Șabloane rapide */}
        <View style={styles.sectionBox}>
          <Text style={styles.sectionHeading}>Șabloane rapide (copiază și completează)</Text>

          <Text style={styles.templatesHeading}>1) Cronologie evenimente (pacient)</Text>
          <Bullet>Data/ora:</Bullet>
          <Bullet>Locație (secție/spital):</Bullet>
          <Bullet>Simptome/diagnostic inițial:</Bullet>
          <Bullet>Intervenții/medicație:</Bullet>
          <Bullet>Cine a participat (nume/funcție):</Bullet>
          <Bullet>Ce s-a întâmplat concret:</Bullet>
          <Bullet>Efect imediat (durere, complicații, transfer):</Bullet>
          <Bullet>Document(e) aferente (denumire fișier):</Bullet>

          <Text style={styles.templatesHeading}>2) Lista cheltuieli & pierderi (pacient)</Text>
          <Bullet>Cheltuială (ex. „investigații CT”):</Bullet>
          <Bullet>Suma:</Bullet>
          <Bullet>Dată:</Bullet>
          <Bullet>Dovadă (factură/bon nr.):</Bullet>
          <Bullet>Observații (ex. „recomandat de medicul X”):</Bullet>

          <Text style={styles.templatesHeading}>3) Punct de vedere preliminar (medic/clinică)</Text>
          <Bullet>Specialitatea/cadrul:</Bullet>
          <Bullet>Standardul/ghidul aplicabil:</Bullet>
          <Bullet>Faptele relevante (cronologic):</Bullet>
          <Bullet>Evaluarea riscurilor inerente vs. abatere:</Bullet>
          <Bullet>Măsuri imediate post-eveniment:</Bullet>
          <Bullet>Documente anexate:</Bullet>
        </View>

        <Text style={styles.footerCall}>
          <Link src="tel:+40745506443">Sună acum: +40 745 506 443</Link>
        </Text>
      </Page>
    </PDFDocument>
  );
}
