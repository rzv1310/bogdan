import SubServicePage from "@/components/services/SubServicePage";
import { refuzPrelevareProbeRo } from "@/lib/subServices/ro";

export default function RefuzPrelevareProbe() {
  return <SubServicePage data={refuzPrelevareProbeRo} />;
}
