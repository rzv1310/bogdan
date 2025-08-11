import React from "react";
import { Document, Page, Text, View, StyleSheet, Font, Link } from "@react-pdf/renderer";

// Register fonts with diacritics support
Font.register({
  family: "RobotoPDF",
  fonts: [
    { src: "/fonts/Roboto-Regular.ttf", fontWeight: "normal" },
    { src: "/fonts/Roboto-Bold.ttf", fontWeight: "bold" },
  ],
});

const styles = StyleSheet.create({
  page: {
    paddingTop: 36,
    paddingBottom: 40,
    paddingHorizontal: 40,
    fontFamily: "RobotoPDF",
    fontSize: 11,
    lineHeight: 1.5,
    color: "#111",
  },
  h1: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  h2: {
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 14,
    marginBottom: 6,
  },
  section: {
    marginTop: 8,
  },
  bulletList: {
    marginTop: 4,
    marginLeft: 10,
  },
  bulletItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 6,
    marginBottom: 4,
  },
  bulletDot: {
    width: 6,
    textAlign: "center",
  },
  bold: {
    fontWeight: "bold",
  },
  smallMuted: {
    color: "#555",
    fontSize: 10,
  },
  divider: {
    marginVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    borderBottomStyle: "solid",
  },
  // CTA box styles (accent-aligned)
  ctaBox: {
    borderWidth: 1,
    borderColor: "#f59e0b",
    borderStyle: "solid",
    padding: 12,
    borderRadius: 6,
    marginTop: 16,
    alignItems: "center",
  },
  ctaTitle: {
    fontSize: 12,
    fontWeight: "bold",
    marginBottom: 8,
  },
  ctaButton: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#f59e0b",
    borderStyle: "solid",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 4,
    textDecoration: "none",
  },
  ctaButtonText: {
    color: "#111",
    fontSize: 12,
    fontWeight: "bold",
  },
});

const Bullet: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <View style={styles.bulletItem}>
    <Text style={styles.bulletDot}>•</Text>
    <Text>{children}</Text>
  </View>
);

const AnafCryptoChecklist: React.FC = () => (
  <Document title="Checklist fiscal ANAF – criptomonede (persoană fizică)">
    <Page size="A4" style={styles.page}>
      <View>
        <Text style={styles.h1}>Checklist fiscal ANAF – criptomonede (persoană fizică)</Text>

        <View style={styles.section}>
          <Bullet>
            Strânge documentele — istoricul tranzacțiilor (CSV/raport din exchange), curs RON la data vânzării, comisioane directe (trading/withdrawal).
          </Bullet>
          <Bullet>
            Identifică tranzacțiile care generează venit: vânzare în fiat sau plată în bunuri/servicii. Câștigul = preț vânzare − preț achiziție − costuri directe; impozit 10% pe câștigul impozabil.
          </Bullet>
        </View>

        <View style={[styles.section]}>
          <Text style={styles.h2}>Regula „200 lei / 600 lei”</Text>
          <Text>
            Dacă câștigul pe o tranzacție &lt; 200 lei și totalul câștigurilor pe anul fiscal ≤ 600 lei, acele câștiguri nu se impozitează. Dacă totalul trece de 600 lei, toate câștigurile devin impozabile (și cele sub 200 lei/tranzacție).
          </Text>
        </View>

        <View style={[styles.section]}>
          <Text style={styles.h2}>Depune Declarația Unică (Formular 212)</Text>
          <Bullet>Completezi Capitolul I (venituri realizate) până la 25 mai al anului următor veniturilor.</Bullet>
          <Bullet>Ghiduri 2025 și materiale de lucru ANAF (Declarația Unică, pași, exemple).</Bullet>
        </View>

        <View style={[styles.section]}>
          <Text style={styles.h2}>Verifică obligația de CASS (sănătate)</Text>
          <Bullet>
            Dacă totalul veniturilor extra-salariale din categoriile art. 155 alin. (1) lit. c–h (inclusiv venituri din alte surse — cripto) depășește pragurile 6/12/24 x salariul minim brut, datorezi CASS 10% la Baza de calcul aferentă pragului atins.
          </Bullet>
          <Bullet>
            Pentru 2025, salariul minim brut este 4.050 lei (HG nr. 1506/27.11.2024). Praguri CASS 2025: 6 x = 24.300 lei, 12 x = 48.600 lei, 24 x = 97.200 lei.
          </Bullet>
          <Bullet>
            CAS (pensie) nu se datorează pentru „venituri din alte surse” (categoria în care intră cripto). Regula generală ANAF pe contribuții: CAS se aplică la activități independente/drepturi de autor, nu la „alte surse”.
          </Bullet>
        </View>

        <View style={styles.section}>
          <Text style={styles.h2}>Plata</Text>
          <Bullet>
            Impozitul pe venit (10%) și CASS (dacă e cazul) se plătesc până la termenul‑limită al Declarației Unice.
          </Bullet>
        </View>

        <View style={styles.divider} />

        <View style={styles.section}>
          <Text style={styles.h2}>Exemple de calcul (2025)</Text>
          <Text style={styles.smallMuted}>Notă: sumele sunt în RON. Pentru 2025 folosim pragurile CASS din HG 1506/2024 (salariul minim 4.050 lei).</Text>

          <View style={{ marginTop: 6 }}>
            <Text style={styles.bold}>Ex. 1 — total câștig ≤ 600 lei, tranzacții mici</Text>
            <Bullet>5 tranzacții cu câștiguri: 120, 90, 150, 110, 100 → total 570</Bullet>
            <Bullet>Sub 200 lei/tranzacție și total &lt;= 600 → nu datorezi impozit, nu datorezi CASS.</Bullet>
          </View>

          <View style={{ marginTop: 8 }}>
            <Text style={styles.bold}>Ex. 2 — total 950 lei; ai și tranzacții sub 200 lei</Text>
            <Bullet>6 tranzacții cu câștiguri: 160, 180, 230, 140, 120, 120 → total 950</Bullet>
            <Bullet>Totalul depășește 600 → toate câștigurile devin impozabile.</Bullet>
            <Bullet>Impozit = 10% x 950 = 95 lei.</Bullet>
            <Bullet>CASS: 950 &lt; 24.300 (pragul de 6 x) → nu datorezi CASS (dacă nu ai și alte venituri extra-salariale).</Bullet>
          </View>

          <View style={{ marginTop: 8 }}>
            <Text style={styles.bold}>Ex. 3 — câștig 40.000 lei</Text>
            <Bullet>Impozit = 10% x 40.000 = 4.000 lei.</Bullet>
            <Bullet>CASS: 40.000 ≥ 24.300 și &lt; 48.600 =&gt; Baza de calcul = 6 x 4.050 = 24.300; CASS = 10% x 24.300 = 2.430 lei.</Bullet>
          </View>

          <View style={{ marginTop: 8 }}>
            <Text style={styles.bold}>Ex. 4 — câștig 120.000 lei</Text>
            <Bullet>Impozit = 10% x 120.000 = 12.000 lei.</Bullet>
            <Bullet>CASS: 120.000 ≥ 97.200 =&gt; Baza de calcul = 24 x 4.050 = 97.200; CASS = 9.720 lei.</Bullet>
          </View>
        </View>
        {/* CTA final */}
        <View style={[styles.section, styles.ctaBox]}>
          <Text style={styles.ctaTitle}>Ai nevoie de ajutor?</Text>
          <Link src="tel:+40745506443" style={styles.ctaButton}>
            <Text style={styles.ctaButtonText}>Sună-mă acum!</Text>
          </Link>
        </View>
      </View>
    </Page>
  </Document>
);

export default AnafCryptoChecklist;
