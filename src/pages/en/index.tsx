import { Outlet } from "react-router-dom";
import { useSEO } from "@/hooks/useSEO";

export default function EnIndex() {
  useSEO({
    title: "Attorney Bogdan Lamatic - Criminal Defense | Bucharest",
    description: "Defense in white-collar crime, corruption, road traffic, crypto, malpractice.",
    alternates: { en: "/en", ro: "/" },
    locale: "en_US",
  });
  return <Outlet />;
}
