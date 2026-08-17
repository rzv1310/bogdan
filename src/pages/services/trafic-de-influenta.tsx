import SubServicePage from "@/components/services/SubServicePage";
import { traficDeInfluentaRo } from "@/lib/subServices/ro";

export default function TraficDeInfluenta() {
  return <SubServicePage data={traficDeInfluentaRo} />;
}
