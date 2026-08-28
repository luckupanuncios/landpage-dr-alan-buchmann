export const WHATSAPP_NUMBER = "5551997805053";
export const WHATSAPP_DISPLAY = "(51) 99780-5053";
export const DEFAULT_WHATSAPP_MESSAGE = "Olá, gostaria de agendar uma avaliação com o Dr. Alan.";

/**
 * Gera o link completo do WhatsApp com mensagem formatada para URL.
 * @param message Mensagem opcional para substituir a mensagem padrão.
 * @returns Link completo wa.me
 */
export function getWhatsAppLink(message?: string): string {
  const text = message || DEFAULT_WHATSAPP_MESSAGE;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}
