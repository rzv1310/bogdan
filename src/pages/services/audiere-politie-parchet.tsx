import SubServicePage from "@/components/services/SubServicePage";
import { audierePolitieParchetRo } from "@/lib/subServices/ro";

export default function AudierePolitieParchet() {
  return <SubServicePage data={audierePolitieParchetRo} />;
}
