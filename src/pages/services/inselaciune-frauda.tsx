import SubServicePage from "@/components/services/SubServicePage";
import { inselaciuneFraudaRo } from "@/lib/subServices/ro";

export default function InselaciuneFrauda() {
  return <SubServicePage data={inselaciuneFraudaRo} />;
}
