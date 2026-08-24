export const WHATSAPP_NUMBER = "555197805053";
export const DEFAULT_WHATSAPP_MESSAGE = "Olá Dr. Alan, gostaria de agendar uma avaliação.";

/**
 * Gera o link completo do WhatsApp com mensagem formatada para URL.
 * @param message Mensagem opcional para substituir a mensagem padrão.
 * @returns Link completo wa.me
 */
export function getWhatsAppLink(message?: string): string {
  const text = message || DEFAULT_WHATSAPP_MESSAGE;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}
