import { useEffect, useState } from 'react';
import { Phone } from 'lucide-react';
import { useCookieConsent } from '@/context/cookie-consent';

interface MobileConversionBarProps {
  lang?: 'ro' | 'en';
}

export default function MobileConversionBar({ lang = 'ro' }: MobileConversionBarProps) {
  const { hasConsented } = useCookieConsent();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!hasConsented || !scrolled) return null;

  const callLabel = lang === 'en' ? 'Call now' : 'Sună acum';

  return (
    <div className="fixed inset-x-0 bottom-0 z-[60] flex border-t border-border bg-background pb-[env(safe-area-inset-bottom)] shadow-[0_-2px_10px_rgba(0,0,0,0.15)] md:hidden">
      <a
        href="tel:+40316320183"
        className="flex basis-[68%] items-center justify-center gap-2 bg-accent px-3 py-4 text-base font-semibold text-accent-foreground"
        aria-label={callLabel}
      >
        <Phone className="h-5 w-5" aria-hidden="true" />
        {callLabel}
      </a>
      <a
        href="https://wa.me/+40745506443"
        target="_blank"
        rel="noopener noreferrer"
        className="flex basis-[32%] items-center justify-center gap-1.5 bg-[#25D366] px-2 py-4 text-sm font-semibold text-white"
        aria-label="WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-5 w-5"
          aria-hidden="true"
        >
          <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.433 5.168L2 22l4.962-1.394A9.953 9.953 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a7.947 7.947 0 01-4.065-1.117l-.292-.174-2.946.829.79-2.848-.187-.302A7.948 7.948 0 014 12a7.948 7.948 0 018-8 7.948 7.948 0 018 8 7.948 7.948 0 01-8 8zm4.472-5.618c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-1.803-.242-.187-.506-.203-.67-.207-.267 0-.569.029-.871.173l.06-.03c.302-.144.604-.173.871-.173.164.004.428.02.67.207.247.191.841 1.654.916 1.803.075.149.124.322.025.52-.1.199-.199.323-.348.497-.148.173-.312.387-.446.52-.148.148-.303.309-.13.606.173.298.77 1.271 1.653 2.06 1.135 1.011 2.093 1.324 2.39 1.474.297.148.471.124.644-.075.173-.198.743-.867.94-1.164.199-.298.397-.249.67-.15.272.1 1.733.818 2.03.967.297.149.495.223.569.347.075.124.075.719-.173 1.413z" />
        </svg>
        WhatsApp
      </a>
    </div>
  );
}
