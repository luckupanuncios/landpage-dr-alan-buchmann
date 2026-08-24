"use client";

import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Button } from "@/components/ui/button";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { MessageCircle, Sparkles } from "lucide-react";

export function FinalCTASection() {
  const whatsappUrl = getWhatsAppLink(
    "Olá Dr. Alan, gostaria de dar o primeiro passo e agendar uma avaliação."
  );

  return (
    <section className="py-20 md:py-28 bg-[#171717] text-white relative overflow-hidden">
      {/* Elemento de brilho / iluminação decorativa de fundo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#b89b5e]/15 blur-[130px] rounded-full pointer-events-none" />

      <Container size="default">
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center max-w-5xl mx-auto">
          {/* Foto Dr. Alan Terceira */}
          <div className="lg:col-span-4 order-2 lg:order-1">
            <ScrollReveal delay={150} direction="up">
              <div className="relative aspect-[4/5] rounded-[28px] overflow-hidden border border-[#333] shadow-2xl mx-auto max-w-xs lg:max-w-none group">
                <Image
                  src="/images/dr-alan/dr-alan-terceira.jpg"
                  alt="Dr. Alan Buchmann"
                  fill
                  sizes="(max-width: 768px) 100vw, 30vw"
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#171717]/85 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 text-center">
                  <p className="font-serif-title text-sm font-medium text-white">
                    Dr. Alan G. Buchmann
                  </p>
                  <p className="text-[10px] text-[#b89b5e] uppercase tracking-widest font-semibold">
                    Atendimento em Parobé - RS
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Conteúdo do CTA */}
          <div className="lg:col-span-8 order-1 lg:order-2 text-center lg:text-left space-y-6">
            <ScrollReveal delay={0}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2c2c2c] border border-[#3a3a3a]">
                <Sparkles className="w-3.5 h-3.5 text-[#b89b5e]" />
                <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#b89b5e]">
                  Agendamento Aberto
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <h2 className="font-serif-title text-4xl sm:text-5xl font-light tracking-tight text-white leading-[1.1]">
                Seu sorriso merece cuidado.
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <p className="text-base sm:text-lg text-[#a3a3a3] max-w-xl font-light leading-relaxed">
                Dê o primeiro passo. Converse com nossa equipe e agende sua avaliação.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="pt-2 flex flex-col sm:flex-row items-center lg:justify-start justify-center gap-4">
                <Button
                  href={whatsappUrl}
                  external
                  variant="gold"
                  size="lg"
                  gtmEventName="click_whatsapp_final"
                  icon={<MessageCircle className="w-5 h-5" />}
                >
                  Falar pelo WhatsApp
                </Button>
              </div>

              <p className="text-xs text-[#737373] tracking-wide pt-3">
                Resposta rápida em horário comercial • Atendimento individualizado
              </p>
            </ScrollReveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
