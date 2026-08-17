import SubServicePage from "@/components/services/SubServicePage";
import { evaziuneFiscalaRo } from "@/lib/subServices/ro";

export default function EvaziuneFiscala() {
  return <SubServicePage data={evaziuneFiscalaRo} />;
}
