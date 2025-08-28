import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function WorkplaceLiabilityEn() {
  useSEO({
    title: "Criminal liability for incidents at the workplace | Criminal lawyer Bogdan Lamatic | Bucharest",
    description: "Specialized assistance in criminal cases regarding workplace accidents and criminal liability for violating safety regulations.",
    alternates: { en: "/en/services/workplace-criminal-liability", ro: "/servicii/raspundere-penala-incidente-locul-de-munca" },
    locale: "en_US",
    canonical: "/en/services/workplace-criminal-liability",
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: typeof window !== "undefined" ? `${window.location.origin}/en` : "/en" },
              { "@type": "ListItem", position: 2, name: "Criminal liability for incidents at the workplace", item: typeof window !== "undefined" ? `${window.location.origin}/en/services/workplace-criminal-liability` : "/en/services/workplace-criminal-liability" },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LegalService",
            name: "Criminal liability for incidents at the workplace",
            url: typeof window !== "undefined" ? `${window.location.origin}/en/services/workplace-criminal-liability` : "/en/services/workplace-criminal-liability",
            areaServed: ["RO", "EU"],
            availableLanguage: ["en", "ro"],
            provider: { "@type": "Person", name: "Bogdan Lamatic", telephone: "+40 745 506 443" },
            telephone: "+40 745 506 443",
          }),
        }}
      />

      <section className="mx-auto max-w-6xl px-4 md:px-6 py-8">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Criminal liability for incidents at the workplace | Criminal lawyer Bogdan Lamatic | Bucharest</h1>
        
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/en">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <span className="text-muted-foreground">Services</span>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Criminal liability for incidents at the workplace</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="mt-6 space-y-3 text-base leading-relaxed text-muted-foreground">
          <p>
            In my career as a criminal lawyer, I have seen what it means to live on the edge of the abyss between order and chaos.
          </p>
          <p>
            In every workplace accident, in every criminal investigation for violating safety regulations, there is a mixture of responsibility, negligence and tragedy.
          </p>
          <p>
            I practice in Bucharest and my name is Bogdan Lamatic – I have 17 years of experience in criminal law and numerous successful cases in white-collar crime.
          </p>
        </div>

        <div className="mt-6">
          <a href="tel:+40745506443" aria-label="Call now">
            <Button variant="premium" size="lg" className="relative overflow-hidden border border-hero-foreground after:content-[''] after:absolute after:inset-[2px] after:rounded-md after:border after:border-hero-foreground after:pointer-events-none">
              <Phone /> Call now
            </Button>
          </a>
        </div>

        {/* General framework */}
        <Card className="mt-8 border-accent">
          <CardHeader>
            <h2 className="text-2xl font-semibold leading-none tracking-tight">General framework of occupational health and safety</h2>
          </CardHeader>
          <CardContent className="text-base leading-relaxed space-y-3">
            <p>
              In Romania, responsibility for workers' health and safety is regulated by <strong>Law no. 319/2006</strong>, updated in 2021.
            </p>
            <p>
              This provides that the employer must ensure the safety and health of workers in all aspects related to work, including when using external services; employees' obligations do not exempt the employer.
            </p>
            <p>Within this responsibility, the employer is obliged to take measures for:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>ensuring safety and protecting workers' health;</li>
              <li>preventing occupational risks;</li>
              <li>informing and training workers;</li>
              <li>ensuring the organizational framework and necessary means;</li>
              <li>continuous adaptation of these measures to changing conditions.</li>
            </ul>
            <p>
              The law also establishes general prevention principles: risk avoidance, risk assessment and control at source, adapting work to humans, adapting to technical progress, developing a coherent prevention policy and prioritizing collective protection over individual protection.
            </p>
          </CardContent>
        </Card>

        {/* What is a workplace accident */}
        <Card className="mt-8 border-accent">
          <CardHeader>
            <h2 className="text-2xl font-semibold leading-none tracking-tight">What is a "workplace accident"?</h2>
          </CardHeader>
          <CardContent className="text-base leading-relaxed space-y-3">
            <p>
              According to <strong>art. 5 of Law 319/2006</strong>, a workplace accident is "violent injury to the body or acute occupational poisoning that occurs during the work process or in the performance of service duties and which causes temporary incapacity for work of at least 3 days, disability or death".
            </p>
            <p>
              This definition also includes accidents on the way to work, dangerous incidents and occupational diseases. Therefore, any serious incident related to professional activity can generate multiple liabilities, including criminal ones.
            </p>
          </CardContent>
        </Card>

        {/* Forms of liability */}
        <Card className="mt-8 border-accent">
          <CardHeader>
            <h2 className="text-2xl font-semibold leading-none tracking-tight">Forms of liability following workplace incidents</h2>
          </CardHeader>
          <CardContent className="text-base leading-relaxed space-y-3">
            <p>
              Romanian legislation distinguishes between disciplinary, contraventional, civil and criminal liability. Employers often face all these forms simultaneously.
            </p>
            <p>As a lawyer, I always analyze the entire spectrum of legal risks:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Disciplinary liability</strong> – applying internal sanctions to employees or managers for violating OSH rules. This does not exempt the employer from other liabilities.</li>
              <li><strong>Civil liability</strong> – the employer's obligation to compensate the victim for damage not covered by social or health insurance. Law 319/2006 and the Labor Code provide that the employer remains responsible even if using external services.</li>
              <li><strong>Contraventional liability</strong> – territorial labor inspectorates can apply fines for non-compliance with safety and health standards, even if no accident occurred. In case of serious accident, the fine can be doubled and combined with activity suspension.</li>
              <li><strong>Criminal liability</strong> – intervenes when non-compliance with safety standards produces or creates imminent danger of accident or occupational disease. This is the most severe form of liability and will be detailed below.</li>
            </ul>
          </CardContent>
        </Card>

        {/* CTA Button after 3rd card */}
        <div className="mt-6 text-center">
          <a href="tel:+40745506443" aria-label="I want a lawyer - Call now">
            <Button variant="premium" size="lg" className="border border-hero-foreground relative overflow-hidden after:content-[''] after:absolute after:inset-[2px] after:rounded-md after:border after:border-hero-foreground after:pointer-events-none">
              <Phone className="mr-2 h-5 w-5" />
              I want a lawyer!
            </Button>
          </a>
        </div>

        {/* Criminal liability */}
        <Card className="mt-8 border-accent">
          <CardHeader>
            <h2 className="text-2xl font-semibold leading-none tracking-tight">Criminal liability for violating safety regulations</h2>
          </CardHeader>
          <CardContent className="text-base leading-relaxed space-y-3">
            <p>In the Criminal Code there are 2 main offenses related to occupational safety and health:</p>
            
            <h3 className="text-xl font-semibold mt-6">Failure to take legal safety and health measures (art. 349 Criminal Code)</h3>
            <p>
              This article sanctions the omission of the responsible person to adopt legal safety and health measures if an imminent danger of an accident or occupational illness is created. The punishment is imprisonment from 6 months to 3 years or fine, and in the negligent variant it is reduced to 3 months – 1 year. The particularity of this offense is that it is consummated by simple omission – it is not necessary for an accident to have occurred for criminal liability to be engaged.
            </p>

            <h3 className="text-xl font-semibold mt-6">Non-compliance with legal safety and health measures (art. 350 Criminal Code)</h3>
            <p>
              Article 350 criminalizes the act of any person to violate legal obligations regarding occupational safety and health, if this creates an imminent danger of accident or illness. The punishment is similar: 6 months – 3 years imprisonment or fine. Putting back into operation machinery or installations without eliminating the deficiencies for which they were stopped constitutes an offense. As with art. 349, if the act is committed through negligence, the limits are reduced to 3 months – 1 year.
            </p>

            <p>
              These offenses are called "danger offenses" – the law protects the life and integrity of workers even if the accident did not occur. As a result, prosecutors can open criminal proceedings as soon as an inspection finds serious OSH omissions.
            </p>

            <h3 className="text-xl font-semibold mt-6">Liability for manslaughter or bodily harm through negligence (art. 192 and art. 196 Criminal Code)</h3>
            <p>
              If a workplace accident causes the death or serious injury of a worker, the offenses of professional manslaughter through negligence and bodily harm through negligence come into discussion. Professional manslaughter through negligence (art. 192 para. 2) is committed when a person kills another through negligence, as a result of non-compliance with legal provisions or prevention measures for practicing a profession or trade. The legal punishment is imprisonment from 2 to 7 years, and if the act causes the death of 2 or more people, the limits are increased.
            </p>
            <p>
              In criminal practice, these offenses often appear together: the prosecutor charges the perpetrator with both art. 349/350 for non-compliance with preventive obligations, and art. 192/196 for the result produced.
            </p>
          </CardContent>
        </Card>

        {/* Why such cases occur */}
        <Card className="mt-8 border-accent">
          <CardHeader>
            <h2 className="text-2xl font-semibold leading-none tracking-tight">Why do such cases occur?</h2>
          </CardHeader>
          <CardContent className="text-base leading-relaxed space-y-3">
            <p>
              My experience shows that most workplace accidents are not the result of malice, but of indifference and chaos in organizing responsibilities.
            </p>
            <p>
              Constant implementation of safety procedures, employee education and investment in organizational culture are essential.
            </p>
            <p>
              When management treats safety as a "cost" or a "formality", chaos infiltrates and generates tragedies.
            </p>
          </CardContent>
        </Card>

        {/* Case studies */}
        <Card className="mt-8 border-accent">
          <CardHeader>
            <h2 className="text-2xl font-semibold leading-none tracking-tight">Case studies</h2>
          </CardHeader>
          <CardContent className="text-base leading-relaxed space-y-3">
            <p>In recent years there have been numerous criminal investigations with serious repercussions:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>A construction company did not check the condition of scaffolds; a worker fell and died. The prosecutor classified the act under art. 192 para. 2 and art. 349, sending both the company and the OSH manager to trial. In the end, the company received a criminal fine, and the manager was convicted with suspension.</li>
              <li>In a factory, restarting a defective press before remediation caused the amputation of an operator's arm. The act was classified under art. 350 para. 2 and art. 196 para. 3, demonstrating that ignoring shutdown provisions can be fatal.</li>
              <li>In another case, neglecting worker training at a fuel depot led to an explosion and the death of several people. The court found professional manslaughter through negligence, with a sentence of 4 years imprisonment for the administrator.</li>
            </ul>
            <p>
              These examples show that prevention measures and strict compliance with regulations are essential. They also confirm the doctrinal interpretation that offenses under art. 349 and art. 350 are acts of omission, which are consummated when there is a state of imminent danger, even without the occurrence of an accident.
            </p>
          </CardContent>
        </Card>

        {/* CTA Button after 6th card */}
        <div className="mt-6 text-center">
          <a href="tel:+40745506443" aria-label="I want a lawyer - Call now">
            <Button variant="premium" size="lg" className="border border-hero-foreground relative overflow-hidden after:content-[''] after:absolute after:inset-[2px] after:rounded-md after:border after:border-hero-foreground after:pointer-events-none">
              <Phone className="mr-2 h-5 w-5" />
              I want a lawyer!
            </Button>
          </a>
        </div>

        {/* Workers' obligations */}
        <Card className="mt-8 border-accent">
          <CardHeader>
            <h2 className="text-2xl font-semibold leading-none tracking-tight">Workers' obligations</h2>
          </CardHeader>
          <CardContent className="text-base leading-relaxed space-y-3">
            <p>
              Law no. 319/2006 establishes not only the employer's obligations, but also those of workers.
            </p>
            <p>
              Each employee must carry out their activity in accordance with the training and instructions received, so as not to endanger themselves or other people.
            </p>
            <p>They have the obligation to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>correctly use machines, equipment, tools and dangerous substances;</li>
              <li>use and return individual protective equipment;</li>
              <li>not deactivate safety devices;</li>
              <li>immediately communicate to the employer any dangerous situation or accident;</li>
              <li>cooperate with labor inspectors;</li>
              <li>comply with OSH legislation.</li>
            </ul>
            <p>
              Fulfilling these obligations can prevent accidents and can reduce one's own criminal liability.
            </p>
          </CardContent>
        </Card>

        {/* Accident reporting and investigation procedure */}
        <Card className="mt-8 border-accent">
          <CardHeader>
            <h2 className="text-2xl font-semibold leading-none tracking-tight">Accident reporting and investigation procedure</h2>
          </CardHeader>
          <CardContent className="text-base leading-relaxed space-y-3">
            <p>
              In case of an accident, the first step is immediate communication. Any incident defined by law – from accidents causing death or injury, to dangerous incidents or commuting accidents – must be immediately communicated to the employer.
            </p>
            <p>
              If workers from other employers are among the victims, the event must also be communicated to them.
            </p>
            <p>
              In traffic accidents with victims performing their duties, the traffic police communicate the event to the ITM. The communication includes essential data: employer's name, location, date and time of accident, victim's identity, known circumstances and consequences.
            </p>
            <p>
              The employer must preserve the scene until investigation authorities arrive, except when maintaining this state would generate new dangers; then photographs are taken and a report is drawn up with the modifications.
            </p>
            <p>
              Accident investigation aims to establish circumstances, causes, violated regulations and responsibilities. For accidents with temporary work incapacity, investigation is conducted by a commission appointed by the employer, consisting of at least 3 people – a designated worker, a representative of the internal or external prevention service.
            </p>
            <p>
              Persons involved in the accident or the OSH responsible cannot be part of the commission.
            </p>
            <p>
              In case of death, obvious disability, collective accident or dangerous incidents, investigation is performed by ITM. Completion deadlines are 10 working days for events with temporary work incapacity and 15 days for those with death or disability.
            </p>
            <p>
              The investigation file must contain the investigation report, on-site observation note, sketches, photographs, victim and witness statements, OSH training sheets and any other relevant documents. Non-compliance with this procedure can seriously influence guilt assessment.
            </p>
          </CardContent>
        </Card>

        {/* Compensation and victims' rights */}
        <Card className="mt-8 border-accent">
          <CardHeader>
            <h2 className="text-2xl font-semibold leading-none tracking-tight">Compensation and victims' rights</h2>
          </CardHeader>
          <CardContent className="text-base leading-relaxed space-y-3">
            <p>
              In parallel with criminal liability, victims have the right to benefits from the work insurance system.
            </p>
            <p>
              Temporary incapacity allowance is calculated as the average of gross earnings from the last 6 months, and for employees with less than 6 months' seniority, it is calculated for the period actually worked.
            </p>
            <p>
              Compensation for damage to integrity is established according to the severity of the injury and can reach up to 12 minimum base salaries.
            </p>
            <p>
              In case of death, entitled persons (surviving spouse, child, parent, guardian or heirs) receive a lump sum compensation of 4 average gross salaries.
            </p>
            <p>
              Victims can apply for disability pension, and survivors – for survivor's pension, according to Law no. 360/2023.
            </p>
            <p>
              For accidents occurring abroad, medical costs and transportation are reimbursed by the Romanian institution when the employee remains subject to Romanian legislation.
            </p>
            <p>
              All these benefits do not remove the right to claim additional civil damages.
            </p>
          </CardContent>
        </Card>

        {/* CTA Button after 9th card */}
        <div className="mt-6 text-center">
          <a href="tel:+40745506443" aria-label="I want a lawyer - Call now">
            <Button variant="premium" size="lg" className="border border-hero-foreground relative overflow-hidden after:content-[''] after:absolute after:inset-[2px] after:rounded-md after:border after:border-hero-foreground after:pointer-events-none">
              <Phone className="mr-2 h-5 w-5" />
              I want a lawyer!
            </Button>
          </a>
        </div>

        {/* OSH services outsourcing */}
        <Card className="mt-8 border-accent">
          <CardHeader>
            <h2 className="text-2xl font-semibold leading-none tracking-tight">OSH services outsourcing and employer liability</h2>
          </CardHeader>
          <CardContent className="text-base leading-relaxed space-y-3">
            <p>
              A controversial aspect in practice is the outsourcing of occupational safety and health services.
            </p>
            <p>
              Law no. 319/2006 allows the employer to use external services for developing protection plans and training employees.
            </p>
            <p>
              However, art. 6 para. (2) clearly stipulates that resorting to an external specialist does not exempt them from responsibility.
            </p>
            <p>
              Prosecutors can hold the employer criminally liable alongside the external specialist when lack or non-implementation of OSH measures is found.
            </p>
            <p>
              I have argued in court that criminal liability is individual – a concrete conduct must be imputed, not mere delegation; therefore, in defense, we analyze in detail the contract with the external service and the level of control exercised by the employer.
            </p>
            <p>
              Referring the matter to the High Court for legal clarification could clarify jurisprudence.
            </p>
          </CardContent>
        </Card>

        {/* Insurance obligation */}
        <Card className="mt-8 border-accent">
          <CardHeader>
            <h2 className="text-2xl font-semibold leading-none tracking-tight">Insurance obligation</h2>
          </CardHeader>
          <CardContent className="text-base leading-relaxed space-y-3">
            <p>
              The Labor Code stipulates that the employer must insure all employees against the risk of work accidents and occupational diseases.
            </p>
            <p>
              Additionally, the employer has the obligation to organize periodic training of workers, permanently control the condition of equipment and create conditions for providing first aid and evacuating employees in case of danger. Non-compliance with these obligations can lead to administrative fines and support criminal charges.
            </p>
          </CardContent>
        </Card>

        {/* Other risks */}
        <Card className="mt-8 border-accent">
          <CardHeader>
            <h2 className="text-2xl font-semibold leading-none tracking-tight">Other risks</h2>
          </CardHeader>
          <CardContent className="text-base leading-relaxed space-y-3">
            <p>
              Certain fields – construction, agriculture, extractive industry, transport – present increased risks. Methodological norms define high-risk areas where additional measures are required.
            </p>
            <p>
              Employers with over 50 employees must establish occupational safety and health committees. Periodic updating of risk assessments and adaptation to technical progress are essential.
            </p>
          </CardContent>
        </Card>

        {/* CTA Button after 12th card */}
        <div className="mt-6 text-center">
          <a href="tel:+40745506443" aria-label="I want a lawyer - Call now">
            <Button variant="premium" size="lg" className="border border-hero-foreground relative overflow-hidden after:content-[''] after:absolute after:inset-[2px] after:rounded-md after:border after:border-hero-foreground after:pointer-events-none">
              <Phone className="mr-2 h-5 w-5" />
              I want a lawyer!
            </Button>
          </a>
        </div>

        {/* Prevention and defense strategies */}
        <Card className="mt-8 border-accent">
          <CardHeader>
            <h2 className="text-2xl font-semibold leading-none tracking-tight">Prevention and defense strategies</h2>
          </CardHeader>
          <CardContent className="text-base leading-relaxed space-y-3">
            <p>As a criminal lawyer, I focus my activity on two complementary directions:</p>
            
            <h3 className="text-xl font-semibold mt-6">Prevention</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>I conduct audits and consultancy in the field of safety; I identify legal risks and help companies implement measures according to Law 319/2006: risk assessment, prevention plans, periodic training, OSH documentation.</li>
              <li>I promote a culture of responsibility: safety should not be seen as a cost, but as part of organizational identity. Accepting responsibility for the common good radically reduces the probability of accidents.</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6">Defense in criminal investigations</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>I analyze legal classifications; many cases are prosecuted based on extensive interpretations of the law, so I identify elements that can lead to dismissal.</li>
              <li>I support the employer's diligence through documents: training, technical checks, reports to authorities.</li>
              <li>I exploit the separation of responsibilities: we demonstrate when the offense is exclusively the result of individual conduct, so that the company is not held criminally liable.</li>
            </ul>
          </CardContent>
        </Card>

        {/* Discipline and responsibility */}
        <Card className="mt-8 border-accent">
          <CardHeader>
            <h2 className="text-2xl font-semibold leading-none tracking-tight">Discipline and responsibility</h2>
          </CardHeader>
          <CardContent className="text-base leading-relaxed space-y-3">
            <p>
              Workplace tragedies confront us with the fragility of life and the necessity of discipline.
            </p>
            <p>
              Criminal liability for workplace incidents is not just a sanction; it is a call to responsibility and to implement real measures, not facade ones.
            </p>
            <p>
              As a lawyer in Bucharest, with a career dedicated to criminal law and white-collar crime, I have assisted corporate clients and individuals in complex investigations, being recognized by Legal 500 for the ability to obtain favorable solutions.
            </p>
            <p>
              If you are facing a workplace accident or want to prevent a disaster, call me for an in-depth analysis and a strategy adapted to your situation.
            </p>
          </CardContent>
        </Card>
      </section>
    </>
  );
}
