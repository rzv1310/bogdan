import SubServicePage from "@/components/services/SubServicePage";
import { arestLaDomiciliuRo } from "@/lib/subServices/ro";

export default function ArestLaDomiciliu() {
  return <SubServicePage data={arestLaDomiciliuRo} />;
}
