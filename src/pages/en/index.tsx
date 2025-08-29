import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useLanguage } from "@/context/language";
import { useSEO } from "@/hooks/useSEO";

export default function EnIndex() {
  const { setLang } = useLanguage();
  useEffect(() => { setLang("en"); }, [setLang]);

  // Language setting only - SEO handled by child components
  return <Outlet />;
}
