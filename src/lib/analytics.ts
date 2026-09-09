declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

// ID do container do GTM. E um identificador publico: vai no HTML entregue ao
// navegador. A variavel de ambiente permite sobrescrever por ambiente, se preciso.
export const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || "GTM-P33V4R7K";

export function trackGTMEvent(eventName: string, params?: Record<string, unknown>) {
  if (typeof window === "undefined") return;

  // Garante a fila mesmo que o evento ocorra antes do script do GTM carregar
  // (strategy="afterInteractive"): sem isso, cliques rapidos seriam perdidos.
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: eventName,
    ...params,
  });
}
