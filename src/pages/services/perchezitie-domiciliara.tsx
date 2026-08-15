import SubServicePage from "@/components/services/SubServicePage";
import { perchezitieDomiciliaraRo } from "@/lib/subServices/ro";

export default function PerchezitieDomiciliara() {
  return <SubServicePage data={perchezitieDomiciliaraRo} />;
}
