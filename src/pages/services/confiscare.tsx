import SubServicePage from "@/components/services/SubServicePage";
import { confiscareRo } from "@/lib/subServices/ro";

export default function Confiscare() {
  return <SubServicePage data={confiscareRo} />;
}
