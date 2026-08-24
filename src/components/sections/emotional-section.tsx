"use client";

import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { Heart, MessageCircle, Sparkles } from "lucide-react";

export function EmotionalSection() {
  const whatsappUrl = getWhatsAppLink(
    "Olá Dr. Alan, gostaria de agendar uma avaliação para cuidar do meu sorriso."
  );

  return (
    <section className="py-20 md:py-32 bg-[#fafaf8] relative overflow-hidden border-y border-[#e9e7e2]">
      <Container size="default">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Container de Foto Responsivo (Esquerda no desktop) */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <ScrollReveal delay={100} direction="left">
              <div className="relative aspect-[4/5] rounded-[32px] overflow-hidden border border-[#e9e7e2] shadow-2xl group">
                <Image
                  src="/images/dr-alan/dr-alan-com-paciente-01.jpg"
                  alt="Dr. Alan Buchmann em atendimento com paciente"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#171717]/70 via-transparent to-transparent z-10 pointer-events-none" />

                <div className="absolute inset-0 flex flex-col justify-between p-6 sm:p-8 z-20">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full apple-glass-badge w-fit">
                    <Heart className="w-3.5 h-3.5 text-[#a38344]" />
                    <span className="text-[11px] uppercase tracking-wider font-semibold text-[#171717]">
                      Cuidado Individualizado
                    </span>
                  </div>

                  <div className="space-y-2 apple-glass-badge p-5 rounded-2xl">
                    <p className="font-serif-title text-lg sm:text-xl text-[#171717] font-light italic leading-snug">
                      &ldquo;Cada sorriso tem uma história única. O meu compromisso é honrar a sua.&rdquo;
                    </p>
                    <p className="text-xs text-[#a38344] font-semibold tracking-wider uppercase pt-1">
                      Dr. Alan Buchmann
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Conteúdo Emocional (Direita no desktop) */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6 md:space-y-8 text-left">
            <ScrollReveal delay={0}>
              <div className="space-y-3">
                <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#a38344]">
                  Transformação & Bem-estar
                </span>
                <h2 className="font-serif-title text-3xl sm:text-4xl md:text-5xl font-light text-[#171717] leading-[1.15]">
                  Não é apenas sobre dentes. <br />
                  <span className="gold-gradient-text font-normal italic">
                    É sobre voltar a sorrir com confiança.
                  </span>
                </h2>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <p className="text-base sm:text-lg text-[#686868] font-normal leading-relaxed">
                Um tratamento odontológico pode transformar muito mais do que o sorriso. Por isso, cada atendimento é conduzido de forma próxima, individualizada e respeitando as necessidades de cada paciente.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-5 bg-white rounded-2xl border border-[#e9e7e2] shadow-subtle-luxury">
                  <Sparkles className="w-5 h-5 text-[#a38344] mb-2" />
                  <h4 className="font-serif-title text-lg text-[#171717] font-medium">Escuta Atenta</h4>
                  <p className="text-xs text-[#686868] mt-1 leading-relaxed">
                    Entendemos suas desejos e receios antes de qualquer procedimento.
                  </p>
                </div>

                <div className="p-5 bg-white rounded-2xl border border-[#e9e7e2] shadow-subtle-luxury">
                  <Heart className="w-5 h-5 text-[#a38344] mb-2" />
                  <h4 className="font-serif-title text-lg text-[#171717] font-medium">Conforto Absoluto</h4>
                  <p className="text-xs text-[#686868] mt-1 leading-relaxed">
                    Ambiente acolhedor e protocolos suaves em todas as etapas.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="pt-2">
                <Button
                  href={whatsappUrl}
                  external
                  variant="gold"
                  size="lg"
                  gtmEventName="click_whatsapp_hero"
                  icon={<MessageCircle className="w-5 h-5" />}
                >
                  Quero cuidar do meu sorriso
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
