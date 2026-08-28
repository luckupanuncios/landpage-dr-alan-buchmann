"use client";

import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { getWhatsAppLink, WHATSAPP_DISPLAY } from "@/lib/whatsapp";
import { MapPin, MessageCircle } from "lucide-react";
import { trackGTMEvent } from "@/lib/analytics";
import Image from "next/image";

export function Footer() {
  const whatsappUrl = getWhatsAppLink("Olá, gostaria de agendar uma avaliação com o Dr. Alan.");
  const mapsUrl = "https://maps.app.goo.gl/zvSyshBKMffJGThp6";

  const handleMapsClick = () => {
    trackGTMEvent("click_maps");
  };

  return (
    <footer className="bg-[#171717] text-white pt-16 pb-24 md:pb-12 border-t border-[#2c2c2c]">
      <Container size="default">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 pb-12 border-b border-[#2c2c2c]">
          {/* Coluna 1: Brand & Apresentação */}
          <div className="space-y-4">
            <div className="flex flex-col gap-3">
              <div className="w-full max-w-[270px] sm:max-w-[340px] opacity-95 hover:opacity-100 transition-opacity duration-300">
                <Image
                  src="/images/dr-alan/capa-facebook-dr-alan.png"
                  alt="Dr. Alan Buchmann — Odontologia em Parobé"
                  width={340}
                  height={110}
                  className="w-full h-auto object-contain rounded-lg"
                />
              </div>
              <div className="flex flex-col pt-1">
                <span className="font-serif-title text-xl font-light text-white tracking-tight leading-tight">
                  DR. ALAN BUCHMANN
                </span>
                <span className="text-[10px] uppercase tracking-[0.22em] text-[#b89b5e] font-medium">
                  Clínico Geral · CRO/RS 16744
                </span>
              </div>
            </div>
            <p className="text-sm text-[#a3a3a3] font-light leading-relaxed">
              Atendimento odontológico em Parobé - RS, conduzido com cuidado,
              planejamento individualizado e atenção aos detalhes.
            </p>
          </div>

          {/* Coluna 2: Navegação Rápida */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#b89b5e]">
              Navegação
            </h4>
            <ul className="space-y-2.5 text-sm text-[#a3a3a3]">
              <li>
                <a href="#hero" className="hover:text-white transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#tratamentos" className="hover:text-white transition-colors">
                  Tratamentos
                </a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-white transition-colors">
                  Sobre o Dr. Alan
                </a>
              </li>
              <li>
                <a href="#resultados" className="hover:text-white transition-colors">
                  Resultados & Transformações
                </a>
              </li>
              <li>
                <a href="#consultorio" className="hover:text-white transition-colors">
                  Estrutura do Consultório
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  Dúvidas Frequentes
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Localização & Contato */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#b89b5e]">
              Localização & Contato
            </h4>
            <div className="space-y-3 text-sm text-[#a3a3a3]">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#b89b5e] shrink-0 mt-0.5" />
                <span>
                  R. Lotário Raimundo, 59 - Sl 02 - Centro
                  <br />
                  Parobé - RS, 95630-000
                </span>
              </div>
              <div className="flex items-center gap-3">
                <MessageCircle className="w-5 h-5 text-[#b89b5e] shrink-0" />
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  {WHATSAPP_DISPLAY}
                </a>
              </div>
              <div className="pt-2">
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleMapsClick}
                  className="inline-flex items-center gap-2 text-xs font-medium text-[#b89b5e] hover:underline"
                >
                  <span>Abrir no Google Maps</span>
                  <span>→</span>
                </a>
              </div>
            </div>
          </div>

          {/* Coluna 4: Redes & Horários */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#b89b5e]">
              Redes Sociais
            </h4>
            <p className="text-sm text-[#a3a3a3] font-light">
              Acompanhe novidades, casos clínicos e orientações para o seu sorriso.
            </p>
            <div className="flex items-center gap-4 pt-1">
              <a
                href="https://www.instagram.com/dr.alanbuchmann/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram do Dr. Alan"
                className="w-10 h-10 rounded-full border border-[#333] flex items-center justify-center text-[#a3a3a3] hover:text-[#b89b5e] hover:border-[#b89b5e] transition-colors"
              >
                <svg
                  className="w-5 h-5 fill-current"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/dentistaalanbuchmann/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook do Dr. Alan"
                className="w-10 h-10 rounded-full border border-[#333] flex items-center justify-center text-[#a38344] hover:text-[#b89b5e] hover:border-[#b89b5e] transition-colors"
              >
                <svg
                  className="w-5 h-5 fill-current"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Rodapé Inferior / Direitos */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#737373]">
          <p>
            © {new Date().getFullYear()} Dr. Alan Geison Buchmann Machado. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-[#a3a3a3] transition-colors">
              Política de Privacidade
            </Link>
            <Link href="#" className="hover:text-[#a3a3a3] transition-colors">
              Termos de Uso
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
