import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCookieConsent } from '@/context/cookie-consent';
import { useLanguage } from '@/context/language';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

const translations = {
  ro: {
    title: 'Folosim cookie-uri',
    description: 'Acest site folosește cookie-uri pentru a analiza traficul și a îmbunătăți experiența ta.',
    policyLink: 'Citește politica de cookie-uri',
    acceptAll: 'Acceptă toate',
    rejectAll: 'Refuză toate',
    customize: 'Personalizează',
    save: 'Salvează preferințele',
    analytics: 'Analytics',
    analyticsDesc: 'Ne ajută să înțelegem cum folosești site-ul',
    marketing: 'Marketing',
    marketingDesc: 'Permite afișarea de reclame personalizate',
    functional: 'Funcționale (obligatorii)',
    functionalDesc: 'Necesare pentru funcționarea site-ului',
    policyUrl: '/politica-cookies',
  },
  en: {
    title: 'We use cookies',
    description: 'This site uses cookies to analyze traffic and improve your experience.',
    policyLink: 'Read our cookie policy',
    acceptAll: 'Accept all',
    rejectAll: 'Reject all',
    customize: 'Customize',
    save: 'Save preferences',
    analytics: 'Analytics',
    analyticsDesc: 'Helps us understand how you use the site',
    marketing: 'Marketing',
    marketingDesc: 'Enables personalized advertisements',
    functional: 'Functional (required)',
    functionalDesc: 'Necessary for the site to work',
    policyUrl: '/en/cookie-policy',
  },
};

export default function CookieConsentBanner() {
  const { showBanner, acceptAll, rejectAll, savePreferences, consent } = useCookieConsent();
  const { lang } = useLanguage();
  const t = translations[lang];
  
  const [showCustomize, setShowCustomize] = useState(false);
  const [analyticsEnabled, setAnalyticsEnabled] = useState(consent?.analytics ?? false);
  const [marketingEnabled, setMarketingEnabled] = useState(consent?.marketing ?? false);

  if (!showBanner) return null;

  const handleSavePreferences = () => {
    savePreferences(analyticsEnabled, marketingEnabled);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
      >
        <div className="mx-auto max-w-2xl rounded-lg border border-border bg-background/95 backdrop-blur-sm shadow-lg">
          <div className="p-4 md:p-6">
            {/* Header */}
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/20">
                <Cookie className="h-5 w-5 text-accent" />
              </div>
              <div className="flex-1">
                <h2 className="text-lg font-semibold text-foreground">{t.title}</h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  {t.description}{' '}
                  <a 
                    href={t.policyUrl} 
                    className="underline hover:text-foreground transition-colors"
                  >
                    {t.policyLink}
                  </a>
                </p>
              </div>
            </div>

            {/* Customize Section */}
            <AnimatePresence>
              {showCustomize && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <div className="mt-4 space-y-3 border-t border-border pt-4">
                    {/* Functional (always on) */}
                    <div className="flex items-start gap-3">
                      <Checkbox id="functional" checked disabled className="mt-0.5" />
                      <div>
                        <Label htmlFor="functional" className="font-medium">
                          {t.functional}
                        </Label>
                        <p className="text-sm text-muted-foreground">{t.functionalDesc}</p>
                      </div>
                    </div>

                    {/* Analytics */}
                    <div className="flex items-start gap-3">
                      <Checkbox 
                        id="analytics" 
                        checked={analyticsEnabled}
                        onCheckedChange={(checked) => setAnalyticsEnabled(checked === true)}
                        className="mt-0.5"
                      />
                      <div>
                        <Label htmlFor="analytics" className="font-medium cursor-pointer">
                          {t.analytics}
                        </Label>
                        <p className="text-sm text-muted-foreground">{t.analyticsDesc}</p>
                      </div>
                    </div>

                    {/* Marketing */}
                    <div className="flex items-start gap-3">
                      <Checkbox 
                        id="marketing" 
                        checked={marketingEnabled}
                        onCheckedChange={(checked) => setMarketingEnabled(checked === true)}
                        className="mt-0.5"
                      />
                      <div>
                        <Label htmlFor="marketing" className="font-medium cursor-pointer">
                          {t.marketing}
                        </Label>
                        <p className="text-sm text-muted-foreground">{t.marketingDesc}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Buttons */}
            <div className="mt-4 flex flex-col gap-2">
              {!showCustomize ? (
                <>
                  {/* Personalizează - full width on mobile, auto on desktop */}
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setShowCustomize(true)}
                    className="text-muted-foreground w-full md:w-auto"
                  >
                    {t.customize}
                  </Button>
                  
                  {/* Refuză/Acceptă - side by side */}
                  <div className="flex gap-2 w-full">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={rejectAll}
                      className="flex-1 md:flex-none"
                    >
                      {t.rejectAll}
                    </Button>
                    <Button
                      variant="default"
                      size="sm"
                      onClick={acceptAll}
                      className="flex-1 md:flex-none"
                    >
                      {t.acceptAll}
                    </Button>
                  </div>
                </>
              ) : (
                <div className="flex gap-2 w-full">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setShowCustomize(false)}
                    className="text-muted-foreground flex-1 md:flex-none"
                  >
                    <X className="h-4 w-4 mr-1" />
                    {t.rejectAll}
                  </Button>
                  <Button
                    variant="default"
                    size="sm"
                    onClick={handleSavePreferences}
                    className="flex-1 md:flex-none"
                  >
                    {t.save}
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
