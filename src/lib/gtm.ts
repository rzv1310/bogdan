// Google Tag Manager utilities with consent mode support

const GTM_ID = 'GTM-KRQRVTL3';

let gtmLoaded = false;

declare global {
  interface Window {
    dataLayer: unknown[];
  }
}

/**
 * Initialize dataLayer with default consent (denied)
 * This should be called before GTM loads
 */
export function initializeDataLayer() {
  window.dataLayer = window.dataLayer || [];
  
  // Set default consent to denied (GDPR compliant)
  window.dataLayer.push({
    'gtm.start': new Date().getTime(),
    event: 'gtm.js',
  });
  
  // Google Consent Mode v2 defaults
  window.dataLayer.push({
    event: 'consent_default',
    analytics_storage: 'denied',
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    functionality_storage: 'granted',
    security_storage: 'granted',
  });
}

/**
 * Dynamically load GTM script
 */
export function loadGTM() {
  if (gtmLoaded) return;
  
  initializeDataLayer();
  
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;
  
  const firstScript = document.getElementsByTagName('script')[0];
  firstScript?.parentNode?.insertBefore(script, firstScript);
  
  // Add noscript iframe for fallback
  const noscript = document.createElement('noscript');
  const iframe = document.createElement('iframe');
  iframe.src = `https://www.googletagmanager.com/ns.html?id=${GTM_ID}`;
  iframe.height = '0';
  iframe.width = '0';
  iframe.style.display = 'none';
  iframe.style.visibility = 'hidden';
  noscript.appendChild(iframe);
  document.body.insertBefore(noscript, document.body.firstChild);
  
  gtmLoaded = true;
}

/**
 * Update consent state in GTM
 */
export function updateConsent(consent: {
  analytics: boolean;
  marketing: boolean;
}) {
  window.dataLayer = window.dataLayer || [];
  
  window.dataLayer.push({
    event: 'cookie_consent_update',
    analytics_storage: consent.analytics ? 'granted' : 'denied',
    ad_storage: consent.marketing ? 'granted' : 'denied',
    ad_user_data: consent.marketing ? 'granted' : 'denied',
    ad_personalization: consent.marketing ? 'granted' : 'denied',
  });
}

/**
 * Check if GTM is loaded
 */
export function isGTMLoaded() {
  return gtmLoaded;
}
