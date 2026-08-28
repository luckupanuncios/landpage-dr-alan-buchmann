"use client";

import React, { useState, useEffect } from "react";
import { MessageCircle } from "lucide-react";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { trackGTMEvent } from "@/lib/analytics";

export function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show floating button after scrolling down 300px (past hero)
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    trackGTMEvent("click_whatsapp_floating");
  };

  const whatsappUrl = getWhatsAppLink("Olá, gostaria de agendar uma avaliação com o Dr. Alan.");

  if (!isVisible) return null;

  return (
    <>
      {/* Floating Button for Desktop */}
      <div className="hidden md:block fixed bottom-8 right-8 z-40 animate-fade-in">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleClick}
          aria-label="Falar pelo WhatsApp"
          className="group flex items-center gap-3 bg-[#25D366] text-white px-5 py-3.5 rounded-full shadow-lg hover:shadow-xl hover:bg-[#20bd5a] transition-all duration-300 transform hover:-translate-y-1"
        >
          <MessageCircle className="w-6 h-6 shrink-0 fill-current" />
          <span className="font-medium text-sm tracking-wide">
            Agendar Avaliação
          </span>
        </a>
      </div>

      {/* Floating Bar for Mobile (Bottom Bar) */}
      <div className="block md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-[#e9e7e2] p-3 shadow-2xl animate-slide-up">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleClick}
          aria-label="Falar pelo WhatsApp"
          className="flex items-center justify-center gap-2.5 bg-[#25D366] text-white py-3 px-4 rounded-full font-medium text-sm shadow-md active:scale-95 transition-all w-full"
        >
          <MessageCircle className="w-5 h-5 shrink-0 fill-current" />
          <span>Falar pelo WhatsApp</span>
        </a>
      </div>
    </>
  );
}
