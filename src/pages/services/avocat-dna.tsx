import SubServicePage from "@/components/services/SubServicePage";
import { avocatDnaRo } from "@/lib/subServices/ro";

export default function AvocatDna() {
  return <SubServicePage data={avocatDnaRo} />;
}
