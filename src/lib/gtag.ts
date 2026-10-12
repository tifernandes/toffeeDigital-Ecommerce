// Helpers de Google Ads + GA4.
// O gtag.js é carregado uma única vez no _app.tsx (next/script).
// Como o site não possui formulário ativo (captação = WhatsApp/e-mail),
// a conversão de lead é disparada no clique dos botões de contato/revenda.

// IDs das contas
export const GA_ADS_ID = "AW-11324933640";
export const GA4_ID = "G-XMYGC9BP9R";

// Rótulo da conversão "Enviar formulário de lead"
export const LEAD_CONVERSION_SEND_TO = "AW-11324933640/TrpmCPHD-NIbEIiMk5gq";

type GtagArgs = [string, ...unknown[]];

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: GtagArgs) => void;
  }
}

/**
 * Dispara a conversão de lead no Google Ads.
 * Chamar no onClick dos botões de WhatsApp, "Fale Conosco" e "Quero Revender".
 */
export function trackLeadConversion(): void {
  if (typeof window === "undefined" || typeof window.gtag !== "function") {
    return;
  }

  window.gtag("event", "conversion", {
    send_to: LEAD_CONVERSION_SEND_TO,
    value: 1.0,
    currency: "BRL",
  });
}
