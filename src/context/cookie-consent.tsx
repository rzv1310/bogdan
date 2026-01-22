import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';
import { loadGTM, updateConsent } from '@/lib/gtm';

const STORAGE_KEY = 'cookie_consent';
const CONSENT_VERSION = 1;

interface ConsentState {
  analytics: boolean;
  marketing: boolean;
  functional: boolean; // Always true (required)
  timestamp: string;
  version: number;
}

interface CookieConsentContextType {
  consent: ConsentState | null;
  hasConsented: boolean;
  showBanner: boolean;
  acceptAll: () => void;
  rejectAll: () => void;
  savePreferences: (analytics: boolean, marketing: boolean) => void;
  openPreferences: () => void;
}

const defaultConsent: ConsentState = {
  analytics: false,
  marketing: false,
  functional: true,
  timestamp: '',
  version: CONSENT_VERSION,
};

const CookieConsentContext = createContext<CookieConsentContextType | undefined>(undefined);

export function CookieConsentProvider({ children }: { children: React.ReactNode }) {
  const [consent, setConsent] = useState<ConsentState | null>(null);
  const [showBanner, setShowBanner] = useState(false);

  // Load consent from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed: ConsentState = JSON.parse(stored);
        // Check version - if outdated, show banner again
        if (parsed.version === CONSENT_VERSION) {
          setConsent(parsed);
          // If user previously consented, load GTM and update consent
          if (parsed.analytics || parsed.marketing) {
            loadGTM();
            updateConsent({ analytics: parsed.analytics, marketing: parsed.marketing });
          }
        } else {
          setShowBanner(true);
        }
      } else {
        setShowBanner(true);
      }
    } catch {
      setShowBanner(true);
    }
  }, []);

  const saveConsent = useCallback((analytics: boolean, marketing: boolean) => {
    const newConsent: ConsentState = {
      analytics,
      marketing,
      functional: true,
      timestamp: new Date().toISOString(),
      version: CONSENT_VERSION,
    };
    
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newConsent));
    setConsent(newConsent);
    setShowBanner(false);

    // Load GTM if any tracking is allowed
    if (analytics || marketing) {
      loadGTM();
    }
    
    // Always update consent state (even if denied)
    updateConsent({ analytics, marketing });
  }, []);

  const acceptAll = useCallback(() => {
    saveConsent(true, true);
  }, [saveConsent]);

  const rejectAll = useCallback(() => {
    saveConsent(false, false);
  }, [saveConsent]);

  const savePreferences = useCallback((analytics: boolean, marketing: boolean) => {
    saveConsent(analytics, marketing);
  }, [saveConsent]);

  const openPreferences = useCallback(() => {
    setShowBanner(true);
  }, []);

  const value: CookieConsentContextType = {
    consent,
    hasConsented: consent !== null,
    showBanner,
    acceptAll,
    rejectAll,
    savePreferences,
    openPreferences,
  };

  return (
    <CookieConsentContext.Provider value={value}>
      {children}
    </CookieConsentContext.Provider>
  );
}

export function useCookieConsent() {
  const context = useContext(CookieConsentContext);
  if (context === undefined) {
    throw new Error('useCookieConsent must be used within a CookieConsentProvider');
  }
  return context;
}
