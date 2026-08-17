import SubServicePage from "@/components/services/SubServicePage";
import { fraudaInformaticaRo } from "@/lib/subServices/ro";

export default function FraudaInformatica() {
  return <SubServicePage data={fraudaInformaticaRo} />;
}
