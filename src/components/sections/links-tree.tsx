"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MessageCircle, MapPin, Globe, ArrowUpRight, ShieldCheck } from "lucide-react";

/* Marcas nao existem no lucide-react v1: SVGs proprios, iguais aos do rodape. */
function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}
import { getWhatsAppLink } from "@/lib/whatsapp";
import { trackGTMEvent } from "@/lib/analytics";

const MAPS_URL = "https://maps.app.goo.gl/zvSyshBKMffJGThp6";
const INSTAGRAM_URL = "https://www.instagram.com/dr.alanbuchmann/";
const FACEBOOK_URL = "https://www.facebook.com/dentistaalanbuchmann/";

type LinkItem = {
  label: string;
  helper: string;
  href: string;
  icon: React.ReactNode;
  event: string;
  params: Record<string, unknown>;
  highlight?: boolean;
};

export function LinksTree() {
  const whatsappUrl = getWhatsAppLink(
    "Olá, gostaria de agendar uma avaliação com o Dr. Alan."
  );

  const links: LinkItem[] = [
    {
      label: "Agendar minha avaliação",
      helper: "Fale direto no WhatsApp",
      href: whatsappUrl,
      icon: <MessageCircle className="w-5 h-5" />,
      event: "click_whatsapp_links",
      params: { secao: "links" },
      highlight: true,
    },
    {
      label: "Instagram",
      helper: "@dr.alanbuchmann",
      href: INSTAGRAM_URL,
      icon: <InstagramIcon className="w-[18px] h-[18px]" />,
      event: "click_social",
      params: { secao: "links", rede: "instagram" },
    },
    {
      label: "Facebook",
      helper: "Dentista Alan Buchmann",
      href: FACEBOOK_URL,
      icon: <FacebookIcon className="w-[18px] h-[18px]" />,
      event: "click_social",
      params: { secao: "links", rede: "facebook" },
    },
    {
      label: "Como chegar ao consultório",
      helper: "R. Lotário Raimundo, 59 · Sl 02 · Parobé - RS",
      href: MAPS_URL,
      icon: <MapPin className="w-5 h-5" />,
      event: "click_maps",
      params: { origem: "links" },
    },
    {
      label: "Conhecer o site completo",
      helper: "Tratamentos, casos clínicos e consultório",
      href: "/",
      icon: <Globe className="w-5 h-5" />,
      event: "click_site_links",
      params: { secao: "links" },
    },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#171717] px-5 py-14 sm:py-20">
      {/* Brilho dourado ambiente */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/3 rounded-full bg-[#b89b5e]/20 blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-[#0f0f0f] to-transparent"
      />

      <div className="relative z-10 mx-auto w-full max-w-md">
        {/* Cabeçalho de perfil */}
        <header className="flex flex-col items-center text-center">
          <div className="relative h-28 w-28 overflow-hidden rounded-full ring-1 ring-[#b89b5e]/50 shadow-2xl">
            <Image
              src="/images/dr-alan/dr-alan-principal.jpg"
              alt="Dr. Alan Geison Buchmann Machado"
              fill
              priority
              sizes="112px"
              className="object-cover object-top"
            />
          </div>

          <h1 className="font-serif-title mt-6 text-3xl font-light tracking-tight text-white">
            Dr. Alan Buchmann
          </h1>

          <span className="mt-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-[11px] font-medium uppercase tracking-[0.18em] text-[#b89b5e]">
            <ShieldCheck className="h-3.5 w-3.5" />
            Clínico Geral · CRO/RS 16744
          </span>

          <p className="mt-5 max-w-sm text-sm leading-relaxed text-[#a3a3a3]">
            Odontologia com atenção aos detalhes em Parobé - RS. Escolha abaixo por
            onde prefere falar com a gente.
          </p>
        </header>

        {/* Lista de links */}
        <nav className="mt-10 flex flex-col gap-3.5">
          {links.map((item) => {
            const isInternal = item.href.startsWith("/");
            const content = (
              <>
                <span
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-colors ${
                    item.highlight
                      ? "bg-[#171717]/15 text-[#171717]"
                      : "bg-[#b89b5e]/12 text-[#b89b5e] group-hover:bg-[#b89b5e]/20"
                  }`}
                >
                  {item.icon}
                </span>

                <span className="min-w-0 flex-1 text-left">
                  <span
                    className={`block text-sm font-semibold leading-tight ${
                      item.highlight ? "text-[#171717]" : "text-white"
                    }`}
                  >
                    {item.label}
                  </span>
                  <span
                    className={`mt-0.5 block truncate text-[11px] leading-tight ${
                      item.highlight ? "text-[#171717]/70" : "text-[#8f8f8f]"
                    }`}
                  >
                    {item.helper}
                  </span>
                </span>

                <ArrowUpRight
                  className={`h-4 w-4 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
                    item.highlight ? "text-[#171717]/60" : "text-[#686868]"
                  }`}
                />
              </>
            );

            const className = `group flex items-center gap-4 rounded-2xl px-4 py-4 transition-all duration-200 ease-out hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.99] ${
              item.highlight
                ? "bg-gradient-to-r from-[#c9ae72] to-[#b89b5e] shadow-lg shadow-[#b89b5e]/20 hover:shadow-xl hover:shadow-[#b89b5e]/30"
                : "border border-white/10 bg-white/[0.04] backdrop-blur-sm hover:border-[#b89b5e]/40 hover:bg-white/[0.07]"
            }`;

            const handleClick = () => trackGTMEvent(item.event, item.params);

            if (isInternal) {
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={handleClick}
                  className={className}
                >
                  {content}
                </Link>
              );
            }

            return (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleClick}
                className={className}
              >
                {content}
              </a>
            );
          })}
        </nav>

        {/* Rodapé */}
        <footer className="mt-12 text-center">
          <p className="text-[11px] leading-relaxed text-[#686868]">
            Atendimento com horário agendado · Segunda a sexta
          </p>
          <div className="mt-4 flex items-center justify-center gap-4 text-[11px] text-[#686868]">
            <Link
              href="/politica-de-privacidade"
              className="transition-colors hover:text-[#b89b5e]"
            >
              Política de Privacidade
            </Link>
            <span aria-hidden className="text-[#3a3a3a]">
              ·
            </span>
            <Link
              href="/termos-de-uso"
              className="transition-colors hover:text-[#b89b5e]"
            >
              Termos de Uso
            </Link>
          </div>
          <p className="mt-4 text-[11px] text-[#4a4a4a]">
            © {new Date().getFullYear()} Dr. Alan Buchmann
          </p>
        </footer>
      </div>
    </div>
  );
}
