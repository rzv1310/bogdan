import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function MalpraxisChecklistSection() {
  return (
    <section className="mt-12 md:mt-16">
      <Card className="border-accent">
        <CardHeader>
          <CardTitle className="text-2xl md:text-3xl">
            Checklist documente – Malpraxis Medical & Neglijență în serviciu
          </CardTitle>
          <CardDescription>(autor: Av. Bogdan Lamatic, București)</CardDescription>
        </CardHeader>
        <CardFooter>
          <Button asChild size="lg" aria-label="Descarcă DOCX completabil">
            <Link to="/documente-malpraxis">Descarcă DOCX completabil</Link>
          </Button>
        </CardFooter>
      </Card>
    </section>
  );
}
