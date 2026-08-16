import { Card, CardContent, CardHeader } from "@/components/ui/card";

export interface ServiceFaqItem {
  q: string;
  a: React.ReactNode;
}

interface ServiceFaqProps {
  title: string;
  items: ServiceFaqItem[];
  ordered?: boolean;
}

export default function ServiceFaq({ title, items, ordered = false }: ServiceFaqProps) {
  const List = ordered ? "ol" : "ul";
  const listClassName = ordered ? "list-decimal pl-6 space-y-3" : "space-y-2";

  return (
    <Card className="mt-8 border-accent">
      <CardHeader>
        <h2 className="text-2xl font-semibold leading-none tracking-tight">{title}</h2>
      </CardHeader>
      <CardContent className="text-base leading-relaxed">
        <List className={listClassName}>
          {items.map((item) => (
            <li key={item.q}>
              <h3 className="text-base font-semibold inline">{item.q}</h3>
              {ordered ? (
                <div className="mt-1">{item.a}</div>
              ) : (
                <span className="text-foreground"> {item.a}</span>
              )}
            </li>
          ))}
        </List>
      </CardContent>
    </Card>
  );
}
