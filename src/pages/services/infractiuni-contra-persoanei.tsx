import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";
import { useSEO } from "@/hooks/useSEO";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { ServiceHeroCta } from "@/components/services/ServiceHeroCta";
import { servedAreasSchema } from "@/lib/areaServed";

import RelatedServices from "@/components/RelatedServices";
import ServiceSubServices from "@/components/services/ServiceSubServices";
const PAGE_URL = "https://avocatpenalbucuresti.ro/servicii/infractiuni-contra-persoanei";
const TITLE = "Avocat Infracțiuni Contra Persoanei București - Apăr Libertatea și Reputația Ta | Bogdan Lamatic";
const DESCRIPTION =
  "Avocat infracțiuni contra persoanei București - violență, amenințare, vătămare corporală, infracțiuni sexuale. Experiență 18+ ani. Sună acum!";

const FAQ = [
  {
    q: "Care este diferența dintre lovire și vătămare corporală?",
    a: "Lovirea sau alte violențe (art. 193 CP) presupune, de regulă, o suferință fizică fără zile de îngrijiri medicale semnificative, în timp ce vătămarea corporală (art. 194 CP) implică o formă agravată, cu consecințe mai grave asupra sănătății victimei - încadrarea corectă influențează direct gravitatea acuzației.",
  },
  {
    q: "Se poate retrage o plângere pentru violență sau amenințare?",
    a: "Pentru unele fapte din această categorie, acțiunea penală se pune în mișcare la plângerea prealabilă a persoanei vătămate, iar retragerea plângerii sau împăcarea părților poate duce la încetarea procesului penal. Depinde de fapta concretă și de stadiul procesual - o analizez punctual pentru fiecare caz.",
  },
  {
    q: "Ce se întâmplă dacă am primit un ordin de protecție?",
    a: "Ordinul de protecție impune obligații și interdicții (de exemplu, distanța față de victimă) care trebuie respectate imediat. Există posibilitatea de a-l contesta sau de a solicita modificarea lui, în condițiile legii.",
  },
  {
    q: "Pot fi arestat preventiv pentru o acuzație de violență în familie sau infracțiune sexuală?",
    a: "Da, în funcție de gravitatea faptei și de circumstanțe, procurorul poate propune o măsură preventivă, inclusiv arestarea preventivă. Intervin imediat pentru a formula apărări solide încă din faza propunerii.",
  },
  {
    q: "Cât costă un avocat pentru o cauză de infracțiuni contra persoanei?",
    a: "Onorariul depinde de complexitatea cauzei și de etapa procesuală. Ofer o primă discuție gratuită pentru evaluarea situației și un tarif estimativ transparent, prevăzut integral în contract. Sunați-mă la +40 (31) 632 01 83.",
  },
  {
    q: "Sunt acuzat pe nedrept - ce pot face?",
    a: "Contactați-mă imediat. Voi analiza plângerea, probele existente și declarațiile, voi contesta elementele neîntemeiate și voi construi o apărare bazată pe fapte, martori și expertize, acolo unde este cazul.",
  },
  {
    q: "Mă reprezentați chiar dumneavoastră la audieri și în instanță?",
    a: "Da, mă ocup personal de dosar, de la prima discuție până la soluția finală, rămânând avocatul dumneavoastră de contact pe tot parcursul cauzei.",
  },
];

const CTA_CLASS =
  "relative overflow-hidden border border-hero-foreground after:content-[''] after:absolute after:inset-[2px] after:rounded-md after:border after:border-hero-foreground after:pointer-events-none";

function CallCta({ label = "Sună-mă acum!" }: { label?: string }) {
  return (
    <div className="mt-6 flex flex-wrap items-center gap-3">
      <Button asChild variant="premium" size="lg" className={CTA_CLASS} aria-label={`${label} - avocat infracțiuni contra persoanei`}>
        <a href="tel:+40316320183">
          <Phone className="mr-2 h-4 w-4" /> {label}
        </a>
      </Button>
    </div>
  );
}

const LEGISLATIE = "https://legislatie.just.ro/Public/DetaliiDocument/223635";

export default function InfractiuniContraPersoanei() {
  useSEO({
    canonical: "/servicii/infractiuni-contra-persoanei",
    locale: "ro_RO",
    alternates: { ro: "/servicii/infractiuni-contra-persoanei", en: "/en/services/offenses-against-persons", xDefault: "/servicii/infractiuni-contra-persoanei" },
    title: TITLE,
    description: DESCRIPTION,
    keywords: "avocat infracțiuni contra persoanei, avocat infracțiuni contra persoanei bucuresti",
    robotsDirectives: "index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
    schemas: [
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Acasă", item: "https://avocatpenalbucuresti.ro/" },
          { "@type": "ListItem", position: 2, name: "Servicii", item: "https://avocatpenalbucuresti.ro/servicii" },
          { "@type": "ListItem", position: 3, name: "Infracțiuni contra persoanei", item: PAGE_URL },
        ],
      },
      {
        "@context": "https://schema.org",
        "@type": "LegalService",
        name: "Avocat infracțiuni contra persoanei București - Bogdan Lamatic",
        description: DESCRIPTION,
        url: PAGE_URL,
        areaServed: servedAreasSchema,
        availableLanguage: ["ro", "en"],
        address: {
          "@type": "PostalAddress",
          streetAddress: "Strada Colonel Stefan Stoika 22",
          addressLocality: "București",
          addressRegion: "Bucuresti",
          postalCode: "012244",
          addressCountry: "RO",
        },
        hasMap: "https://www.google.com/maps?cid=17818591254142574295",
        telephone: "+40 (31) 632 01 83",
        email: "contact@avocatpenalbucuresti.ro",
        provider: {
          "@type": "Attorney",
          name: "Bogdan Lamatic",
          telephone: "+40 (31) 632 01 83",
        },
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: FAQ.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
      },
    ],
  });

  return (
    <section className="mx-auto max-w-6xl px-4 md:px-6 py-8">
      <Breadcrumb className="mb-4">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Acasă</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <span className="text-muted-foreground">Servicii</span>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Infracțiuni contra persoanei</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <h1 className="text-2xl font-semibold mb-4">
        Avocat Infracțiuni Contra Persoanei București - Apăr Libertatea și Reputația Ta | Bogdan Lamatic
      </h1>

      <div className="space-y-3 text-base leading-relaxed text-muted-foreground">
        <p className="text-foreground">
          <span className="block"><strong>Acuzațiile privind infracțiuni contra persoanei afectează direct libertatea, dar și reputația și viața de familie.</strong></span>
          <span className="block">Multe dintre aceste cauze pornesc dintr-un conflict, o plângere depusă la furie sau o interpretare greșită a unor fapte - iar modul în care reacționezi din prima zi poate influența decisiv rezultatul final.</span>
        </p>
      </div>

      <ServiceHeroCta lang="ro" ariaLabel="Sună-mă acum! - avocat infracțiuni contra persoanei" />

      <p className="mt-3 text-sm text-muted-foreground">
        <span className="text-yellow-400" aria-hidden="true">★★★★★</span> 5,0 din 27 de recenzii Google
      </p>
      <ServiceSubServices path="/servicii/infractiuni-contra-persoanei" />

      <div className="mt-6 space-y-3 text-base leading-relaxed text-muted-foreground">
        <p>
          Sunt Bogdan Lamatic, avocat în Baroul București, cu peste 18 ani de experiență în drept penal. Reprezint persoane acuzate de infracțiuni contra persoanei - de la loviri și amenințări, la violență în familie sau infracțiuni contra libertății și integrității sexuale - în fața Poliției, Parchetului și instanțelor de judecată.
        </p>
        <p>
          Sunt recunoscut de Legal 500 ca „Next Generation Partner” (White-Collar Crime) și am pledat la toate nivelurile de jurisdicție, de la parchete până la Înalta Curte de Casație și Justiție.
        </p>
      </div>

      {/* Ce înseamnă infracțiuni contra persoanei */}
      <Card className="mt-12 md:mt-14 border-accent">
        <CardHeader>
          <h2 className="text-2xl font-semibold leading-none tracking-tight">Ce înseamnă infracțiuni contra persoanei</h2>
        </CardHeader>
        <CardContent className="text-base leading-relaxed space-y-3">
          <p>
            Infracțiunile contra persoanei sunt reglementate de Titlul I al Părții speciale a Codului penal (art. 188-227) și cuprind faptele care aduc atingere vieții, integrității corporale, libertății, vieții private sau libertății și integrității sexuale a unei persoane. (<a href={LEGISLATIE} target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-2">Portal Legislativ</a>) Codul penal le grupează în nouă capitole:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Infracțiuni contra vieții (omor, ucidere din culpă) - art. 188-192</li>
            <li>Infracțiuni contra integrității corporale sau sănătății (loviri, vătămare corporală) - art. 193-198</li>
            <li>Infracțiuni săvârșite asupra unui membru de familie (violență în familie) - art. 199-200</li>
            <li>Agresiuni asupra fătului - art. 201-202</li>
            <li>Infracțiuni privind obligația de asistență a celor în primejdie - art. 203-204</li>
            <li>Infracțiuni contra libertății persoanei (lipsire de libertate, amenințare, șantaj, hărțuire) - art. 205-208</li>
            <li>Traficul și exploatarea persoanelor vulnerabile - art. 209-217</li>
            <li>Infracțiuni contra libertății și integrității sexuale (viol, agresiune sexuală) - art. 218-223</li>
            <li>Infracțiuni ce aduc atingere domiciliului și vieții private - art. 224-227</li>
          </ul>
          <p>
            <strong>Notă:</strong> dacă ești persoana vătămată și cauți despăgubiri sau reprezentare ca parte civilă, informațiile potrivite pentru tine sunt pe pagina{" "}
            <Link to="/servicii/reprezentarea-victimelor-in-procese-penale" className="text-primary underline underline-offset-2">
              Reprezentarea victimelor în procese penale
            </Link>
            . Pagina de față privește apărarea persoanelor acuzate.
          </p>
          <CallCta label="Vreau avocat!" />
        </CardContent>
      </Card>

      {/* Tipuri de cauze */}
      <Card className="mt-8 border-accent">
        <CardHeader>
          <h2 className="text-2xl font-semibold leading-none tracking-tight">Tipuri de cauze pe care le apăr</h2>
        </CardHeader>
        <CardContent className="text-base leading-relaxed space-y-3">
          <ol className="list-decimal pl-6 space-y-2">
            <li><strong>Loviri și alte violențe, vătămare corporală (art. 193-195 CP).</strong> Apăr persoane acuzate de acte de violență, analizând proporționalitatea faptei reținute, certificatele medico-legale și circumstanțele reale ale conflictului.</li>
            <li><strong>Vătămare corporală din culpă (art. 196 CP).</strong> Frecvent întâlnită în contexte de accidente, neglijențe sau conflicte fără intenție de vătămare - contest încadrarea juridică atunci când elementele de culpă nu sunt clar dovedite. Pentru cauzele rezultate din accidente de circulație, vezi și pagina{" "}
              <Link to="/servicii/infractiuni-rutiere-cu-victime" className="text-primary underline underline-offset-2">
                Infracțiuni rutiere cu victime
              </Link>.
            </li>
            <li><strong>Violență în familie (art. 199 CP).</strong> Construiesc apărarea ținând cont de particularitățile acestor cauze - deseori cu probe contradictorii, martori din familie și, uneori, ordine de protecție deja emise.</li>
            <li><strong>Amenințare și șantaj (art. 206-207 CP).</strong> Analizez dacă fapta reclamată întrunește efectiv elementele de tipicitate ale infracțiunii sau reprezintă un conflict verbal fără relevanță penală.</li>
            <li><strong>Hărțuire și hărțuire sexuală (art. 208, art. 223 CP).</strong> Apăr persoane acuzate în astfel de cauze, verificând cu atenție probele și contextul comunicărilor invocate.</li>
            <li><strong>Lipsirea de libertate în mod ilegal (art. 205 CP).</strong> Reprezint persoane acuzate în situații deseori legate de conflicte familiale sau de proprietate, unde încadrarea juridică trebuie analizată cu rigoare.</li>
            <li><strong>Infracțiuni contra libertății și integrității sexuale - viol, agresiune sexuală (art. 218-219 CP).</strong> Cauze cu miză extrem de ridicată pentru libertatea și reputația clientului, în care construiesc apărarea pe baza probelor medico-legale, martorilor și cronologiei faptelor.</li>
            <li><strong>Violare de domiciliu și violarea vieții private (art. 224-227 CP).</strong> Apăr persoane acuzate de pătrundere fără drept sau de încălcarea vieții private a altei persoane.</li>
          </ol>
          <CallCta />
        </CardContent>
      </Card>

      {/* Metodă de lucru */}
      <Card className="mt-8 border-accent">
        <CardHeader>
          <h2 className="text-2xl font-semibold leading-none tracking-tight">Cum te ajut | Metodă de lucru</h2>
        </CardHeader>
        <CardContent className="text-base leading-relaxed space-y-3">
          <p>
            <strong>A) Evaluare rapidă și confidențială.</strong> Analizez plângerea, actul de sesizare sau citația primită, împreună cu orice probe existente (certificate medico-legale, mesaje, martori), pentru a înțelege exact ce ți se impută.
          </p>
          <p>
            <strong>B) Verificarea încadrării juridice.</strong> Multe cauze din această categorie pornesc din conflicte reale, dar fapta reclamată nu întrunește întotdeauna elementele infracțiunii invocate. Verific dacă încadrarea este corectă și dacă există temeiuri pentru reîncadrare, clasare sau soluții alternative.
          </p>
          <p>
            <strong>C) Strategie de apărare adaptată.</strong> Pregătesc declarațiile, formulez cereri de probe și, unde legea o permite (de exemplu, la unele fapte pentru care acțiunea penală se pune în mișcare la plângerea prealabilă), analizez posibilitatea împăcării părților.
          </p>
          <p>
            <strong>D) Reprezentare completă, de la audiere la instanță.</strong> Te reprezint personal pe tot parcursul cauzei - de la prima audiere la Poliție sau Parchet, în{" "}
            <Link to="/servicii/urmarire-penala" className="text-primary underline underline-offset-2">
              faza de urmărire penală
            </Link>
            , până la soluția procurorului și, dacă e cazul, în fața instanței.
          </p>
          <CallCta label="Vreau avocat!" />
        </CardContent>
      </Card>

      {/* De ce ai nevoie de avocat din prima fază */}
      <Card className="mt-8 border-accent">
        <CardHeader>
          <h2 className="text-2xl font-semibold leading-none tracking-tight">De ce ai nevoie de avocat din prima fază</h2>
        </CardHeader>
        <CardContent className="text-base leading-relaxed">
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Unele infracțiuni contra persoanei permit împăcarea părților sau retragerea plângerii prealabile</strong> - dar numai dacă sunt îndeplinite condițiile legale și demersurile sunt făcute corect și la timp.
            </li>
            <li>
              <strong>O acuzație de violență sau infracțiune sexuală poate atrage și o{" "}
              <Link to="/servicii/masuri-preventive" className="text-primary underline underline-offset-2">măsură preventivă</Link></strong> (control judiciar, arest la domiciliu), pe lângă procesul penal propriu-zis.
            </li>
            <li>
              <strong>Declarațiile date fără pregătire pot fi interpretate în defavoarea ta</strong>, chiar dacă intenția reală a fost alta decât cea reținută în plângere.
            </li>
            <li>
              <strong>Impactul reputațional și asupra vieții de familie este, de multe ori, mai mare decât pedeapsa în sine</strong> - de aceea discreția și rapiditatea intervenției contează la fel de mult ca argumentele juridice.
            </li>
          </ul>
        </CardContent>
      </Card>

      {/* Pași practici */}
      <Card className="mt-8 border-accent">
        <CardHeader>
          <h2 className="text-2xl font-semibold leading-none tracking-tight">Pași practici, în funcție de situația ta</h2>
        </CardHeader>
        <CardContent className="text-base leading-relaxed space-y-3">
          <p>
            <strong>Ai fost citat sau reclamat pentru un incident de violență ori amenințare.</strong> Sună-mă înainte de audiere, ca să pregătim împreună declarația și să stabilim ce documente sau martori pot susține varianta ta.
          </p>
          <p>
            <strong>Împotriva ta a fost emis un ordin de protecție provizoriu.</strong> Respectă imediat obligațiile impuse și contactează-mă cât mai repede - termenele pentru contestarea sau modificarea unui astfel de ordin sunt scurte.
          </p>
          <p>
            <strong>Ai fost acuzat de o faptă cu conotație sexuală.</strong> Nu da nicio declarație fără avocat. Sună-mă imediat, indiferent de oră, pentru o evaluare confidențială a situației.
          </p>
          <p>
            <strong>Vrei să afli dacă poți ajunge la o împăcare cu partea vătămată.</strong> Analizăm împreună dacă fapta reclamată permite legal această variantă și, dacă da, cum poate fi negociată corect.
          </p>
          <CallCta />
        </CardContent>
      </Card>

      {/* De ce să mă alegi */}
      <Card className="mt-8 border-accent">
        <CardHeader>
          <h2 className="text-2xl font-semibold leading-none tracking-tight">De ce să mă alegi</h2>
        </CardHeader>
        <CardContent className="text-base leading-relaxed space-y-3">
          <p>
            Am peste 18 ani de experiență în drept penal și sunt recunoscut de Legal 500 timp de cinci ani consecutivi ca Next Generation Partner. Am reprezentat clienți în cauze variate din sfera infracțiunilor contra persoanei, de la conflicte cu grad redus de gravitate, la acuzații complexe cu impact major asupra libertății.
          </p>
          <p>
            <strong>Mă ocup personal de fiecare dosar.</strong> Nu trimit un coleg în locul meu la audieri sau la instanță - rămân avocatul tău de contact pe tot parcursul cauzei, cu discreție absolută.
          </p>
          <p>
            <strong>Sunt disponibil aproape non-stop.</strong> Aceste situații nu respectă un program de birou, de aceea pot fi contactat de la ora 6 dimineața până seara târziu, inclusiv în weekend.
          </p>
          <CallCta label="Vreau avocat!" />
        </CardContent>
      </Card>

      {/* FAQ */}
      <Card className="mt-8 border-accent">
        <CardHeader>
          <h2 className="text-2xl font-semibold leading-none tracking-tight">Întrebări frecvente despre infracțiunile contra persoanei</h2>
        </CardHeader>
        <CardContent className="text-base leading-relaxed">
          <ol className="list-decimal pl-6 space-y-3">
            {FAQ.map((item) => (
              <li key={item.q}>
                <strong>{item.q}</strong>
                <p className="mt-1">
                  {item.q.startsWith("Cât costă") ? (
                    <>
                      Onorariul depinde de complexitatea cauzei și de etapa procesuală. Ofer o primă discuție gratuită pentru evaluarea situației și un tarif estimativ transparent, prevăzut integral în contract. Sunați-mă la{" "}
                      <a href="tel:+40316320183" className="text-primary underline underline-offset-2">+40 (31) 632 01 83</a>.
                    </>
                  ) : (
                    item.a
                  )}
                </p>
              </li>
            ))}
          </ol>
        </CardContent>
      </Card>

      {/* Contact */}
      <Card className="mt-8 border-accent">
        <CardHeader>
          <h3 className="text-xl font-semibold leading-none tracking-tight">Contact | Evaluare inițială gratuită</h3>
        </CardHeader>
        <CardContent className="text-base leading-relaxed space-y-2">
          <p>
            Dacă ești acuzat de o infracțiune contra persoanei sau ai fost citat pentru audiere, sună-mă acum pentru o evaluare inițială gratuită și confidențială.
          </p>
          <div className="flex flex-wrap gap-3 pt-1">
            <Button asChild variant="premium" className={CTA_CLASS}>
              <a href="tel:+40316320183"><Phone className="mr-2 h-4 w-4" /> Sună acum</a>
            </Button>
            <Button asChild variant="outline">
              <a href="mailto:contact@avocatpenalbucuresti.ro">Trimite email</a>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Resurse oficiale */}
      <Card className="mt-8 border-accent">
        <CardHeader>
          <h2 className="text-2xl font-semibold leading-none tracking-tight">Resurse oficiale (linkuri utile)</h2>
        </CardHeader>
        <CardContent className="text-base leading-relaxed">
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Codul penal - Titlul I, Infracțiuni contra persoanei (art. 188-227), inclusiv loviri, vătămare corporală, violență în familie, amenințare, șantaj și infracțiuni contra libertății și integrității sexuale. (<a href={LEGISLATIE} target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-2">Portal Legislativ</a>)
            </li>
            <li>
              Legea nr. 217/2003 pentru prevenirea și combaterea violenței domestice, inclusiv dispozițiile privind ordinul de protecție. (<a href={LEGISLATIE} target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-2">Portal Legislativ</a>)
            </li>
          </ul>
        </CardContent>
      </Card>
      <RelatedServices current="/servicii/infractiuni-contra-persoanei" />

    </section>
  );
}
