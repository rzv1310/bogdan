import SubServicePage from "@/components/services/SubServicePage";
import { controlJudiciarRo } from "@/lib/subServices/ro";

export default function ControlJudiciar() {
  return <SubServicePage data={controlJudiciarRo} />;
}
