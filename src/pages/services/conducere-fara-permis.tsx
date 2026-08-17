import SubServicePage from "@/components/services/SubServicePage";
import { conducereFaraPermisRo } from "@/lib/subServices/ro";

export default function ConducereFaraPermis() {
  return <SubServicePage data={conducereFaraPermisRo} />;
}
