"use client";

import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Button } from "@/components/ui/button";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { MessageCircle } from "lucide-react";

export function ResultsSection() {
  const whatsappUrl = getWhatsAppLink(
    "Olá Dr. Alan, gostaria de agendar uma avaliação após ver os resultados."
  );

  return (
    <section id="resultados" className="py-20 md:py-32 bg-[#fafaf8] relative">
      <Container size="default">
        <ScrollReveal delay={0}>
          <SectionHeader
            eyebrow="Casos Clínicos & Transformações"
            title="Sorrisos transformados com arte e precisão."
            subtitle="Cada resultado reflete a harmonia entre a biologia dental natural e a estética personalizada de alto padrão."
            align="center"
          />
        </ScrollReveal>

        {/* Grid de 2 Colunas no Desktop / 1 Coluna no Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mt-14 md:mt-16">
          {/* Caso 1: Scroll reveal desliza da esquerda */}
          <ScrollReveal delay={100} direction="left" distance="20px">
            <div className="bg-white rounded-[28px] p-6 lg:p-8 border border-[#e9e7e2] shadow-subtle-luxury flex flex-col justify-between hover:scale-[1.015] hover:shadow-card-hover transition-all duration-350 ease-out group">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#a38344] bg-[#f8f5ee] px-3 py-1 rounded-full border border-[#e9e7e2]">
                    Caso 01
                  </span>
                  <span className="text-xs text-[#686868]">Reabilitação Estética</span>
                </div>

                <h3 className="font-serif-title text-2xl font-light text-[#171717] group-hover:text-[#a38344] transition-colors">
                  Facetas em Cerâmica & Harmonização do Sorriso
                </h3>

                {/* Container de Imagem Vertical (object-contain mantido 100% íntegro) */}
                <div className="relative aspect-[3/4] sm:aspect-[4/5] rounded-2xl overflow-hidden bg-[#fafaf8] border border-[#e9e7e2] my-4 p-2 shadow-inner">
                  <Image
                    src="/images/dr-alan/resultado-antes-depois-01.jpg"
                    alt="Resultado Antes e Depois - Caso 01 - Dr. Alan Buchmann"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-contain p-1.5 transition-transform duration-500 group-hover:scale-[1.01]"
                  />
                </div>

                <p className="text-sm text-[#686868] leading-relaxed">
                  Transformação completa de formato e tonalidade mantendo a naturalidade dos bordos incisais.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Caso 2: Scroll reveal desliza da direita */}
          <ScrollReveal delay={200} direction="right" distance="20px">
            <div className="bg-white rounded-[28px] p-6 lg:p-8 border border-[#e9e7e2] shadow-subtle-luxury flex flex-col justify-between hover:scale-[1.015] hover:shadow-card-hover transition-all duration-350 ease-out group">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#a38344] bg-[#f8f5ee] px-3 py-1 rounded-full border border-[#e9e7e2]">
                    Caso 02
                  </span>
                  <span className="text-xs text-[#686868]">Alinhadores & Clareamento</span>
                </div>

                <h3 className="font-serif-title text-2xl font-light text-[#171717] group-hover:text-[#a38344] transition-colors">
                  Alinhamento Invisível & Lentes Ultrafinas
                </h3>

                {/* Container de Imagem Vertical (object-contain mantido 100% íntegro) */}
                <div className="relative aspect-[3/4] sm:aspect-[4/5] rounded-2xl overflow-hidden bg-[#fafaf8] border border-[#e9e7e2] my-4 p-2 shadow-inner">
                  <Image
                    src="/images/dr-alan/resultado-antes-depois-02.jpg"
                    alt="Resultado Antes e Depois - Caso 02 - Dr. Alan Buchmann"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-contain p-1.5 transition-transform duration-500 group-hover:scale-[1.01]"
                  />
                </div>

                <p className="text-sm text-[#686868] leading-relaxed">
                  Correção de alinhamento dental e fechamento de diastemas com mínima intervenção.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Chamada para Avaliação de Caso */}
        <ScrollReveal delay={300}>
          <div className="mt-14 text-center">
            <Button
              href={whatsappUrl}
              external
              variant="gold"
              size="lg"
              gtmEventName="click_whatsapp_hero"
              icon={<MessageCircle className="w-5 h-5" />}
            >
              Quero avaliar o meu caso
            </Button>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
