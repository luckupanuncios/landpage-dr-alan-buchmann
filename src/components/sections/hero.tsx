"use client";

import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { MessageCircle, ArrowRight, ShieldCheck, Sparkles } from "lucide-react";

export function HeroSection() {
  const whatsappUrl = getWhatsAppLink("Olá Dr. Alan, gostaria de agendar uma avaliação.");

  return (
    <section
      id="hero"
      className="relative pt-32 sm:pt-36 lg:pt-44 pb-20 md:pb-28 overflow-hidden bg-gradient-to-b from-[#fafaf8] via-[#f7f6f2] to-[#fafaf8]"
    >
      <Container size="default">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Lado Esquerdo: Conteúdo Editorial */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left">
            {/* Eyebrow Tag */}
            <ScrollReveal delay={0} duration={600}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f8f5ee] border border-[#e9e7e2]">
                <Sparkles className="w-3.5 h-3.5 text-[#a38344]" />
                <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#a38344]">
                  Odontologia • Cuidado • Confiança
                </span>
              </div>
            </ScrollReveal>

            {/* Headline Principal */}
            <ScrollReveal delay={100} duration={700}>
              <h1 className="font-serif-title text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-light text-[#171717] tracking-tight leading-[1.1]">
                Fazer sorrisos é a <br className="hidden sm:inline" />
                <span className="italic font-normal gold-gradient-text">
                  minha arte.
                </span>
              </h1>
            </ScrollReveal>

            {/* Subheadline */}
            <ScrollReveal delay={200} duration={700}>
              <p className="text-base sm:text-lg text-[#686868] font-normal leading-relaxed max-w-2xl">
                Odontologia realizada com experiência, cuidado e atenção aos detalhes para devolver saúde, segurança e confiança ao seu sorriso.
              </p>
            </ScrollReveal>

            {/* Ações / CTAs */}
            <ScrollReveal delay={320} duration={700}>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <Button
                  href={whatsappUrl}
                  external
                  variant="gold"
                  size="lg"
                  gtmEventName="click_whatsapp_hero"
                  icon={<MessageCircle className="w-5 h-5" />}
                >
                  Agendar minha avaliação
                </Button>
                <Button
                  href="#sobre"
                  variant="secondary"
                  size="lg"
                  icon={<ArrowRight className="w-5 h-5" />}
                >
                  Conhecer o Dr. Alan
                </Button>
              </div>
            </ScrollReveal>

            {/* Microcopy & Garantia de atendimento */}
            <ScrollReveal delay={420} duration={600}>
              <div className="flex items-center gap-2 text-xs text-[#686868] pt-1">
                <ShieldCheck className="w-4 h-4 text-[#a38344] shrink-0" />
                <span>Fale diretamente com nossa equipe pelo WhatsApp.</span>
              </div>
            </ScrollReveal>
          </div>

          {/* Lado Direito: Composição de Fotografia Principal com Glow Dourado */}
          <div className="lg:col-span-5">
            <ScrollReveal delay={150} duration={800} direction="none">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Glow Dourado sutil de fundo */}
                <div className="hero-ambient-glow" />

                {/* Moldura / Card de Foto Responsivo */}
                <div className="relative aspect-[4/5] rounded-[32px] overflow-hidden border border-[#e9e7e2]/80 shadow-2xl group z-10">
                  <Image
                    src="/images/dr-alan/dr-alan-principal.jpg"
                    alt="Dr. Alan Geison Buchmann Machado"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
                  />
                  
                  {/* Degradê sutil de acabamento inferior */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#171717]/65 via-transparent to-transparent z-10 pointer-events-none" />

                  {/* Badge estilo Apple com frosted glass */}
                  <div className="absolute bottom-6 left-6 right-6 z-20 apple-glass-badge p-4 rounded-2xl">
                    <p className="font-serif-title text-base font-medium text-[#171717]">
                      Dr. Alan G. Buchmann
                    </p>
                    <p className="text-xs text-[#a38344] font-medium tracking-wide uppercase">
                      Odontologia Estética
                    </p>
                  </div>
                </div>

                {/* Elementos de destaque decorativos */}
                <div className="absolute -bottom-6 -left-6 apple-glass-badge p-4 rounded-2xl hidden sm:flex items-center gap-3 z-30">
                  <div className="w-10 h-10 rounded-full bg-[#f8f5ee] flex items-center justify-center text-[#a38344]">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#171717]">Atendimento Individualizado</p>
                    <p className="text-[11px] text-[#686868]">Parobé - RS</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
