"use client";

import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Microchip, Eye, HeartHandshake } from "lucide-react";

export function ProcedureSection() {
  return (
    <section className="py-20 md:py-32 bg-[#ffffff] relative border-y border-[#e9e7e2] overflow-hidden">
      <Container size="default">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Lado Esquerdo: Conteúdo Editorial do Procedimento */}
          <div className="lg:col-span-6 space-y-6 md:space-y-8">
            <ScrollReveal delay={0}>
              <div className="space-y-3">
                <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#a38344]">
                  Excelência Operacional
                </span>
                <h2 className="font-serif-title text-3xl sm:text-4xl md:text-5xl font-light text-[#171717] leading-[1.15]">
                  Técnica, cuidado e atenção em cada detalhe.
                </h2>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <p className="text-base text-[#686868] font-normal leading-relaxed">
                A alta estética dental nasce da união entre o rigor técnico-científico e o olhar artístico apurado. Cada preparo, escultura e ajuste é conduzido sob lupas de magnificação e planejamento digital prévio.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#fafaf8] border border-[#e9e7e2]">
                  <div className="w-10 h-10 rounded-full bg-[#f8f5ee] border border-[#e9e7e2] flex items-center justify-center text-[#a38344] shrink-0 mt-0.5">
                    <Microchip className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif-title text-lg text-[#171717] font-medium">
                      Preparo Conservador de Mínima Intervenção
                    </h4>
                    <p className="text-xs text-[#686868] mt-1 leading-relaxed">
                      Preservação máxima da estrutura dental natural e do esmalte para longevidade biológica.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#fafaf8] border border-[#e9e7e2]">
                  <div className="w-10 h-10 rounded-full bg-[#f8f5ee] border border-[#e9e7e2] flex items-center justify-center text-[#a38344] shrink-0 mt-0.5">
                    <Eye className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif-title text-lg text-[#171717] font-medium">
                      Precisão Microscópica & Lupa de Magnificação
                    </h4>
                    <p className="text-xs text-[#686868] mt-1 leading-relaxed">
                      Visualização ampliada para garantias de adaptação marginal perfeita e ausência de degraus.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#fafaf8] border border-[#e9e7e2]">
                  <div className="w-10 h-10 rounded-full bg-[#f8f5ee] border border-[#e9e7e2] flex items-center justify-center text-[#a38344] shrink-0 mt-0.5">
                    <HeartHandshake className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif-title text-lg text-[#171717] font-medium">
                      Simulação Prévia (Mock-up do Sorriso)
                    </h4>
                    <p className="text-xs text-[#686868] mt-1 leading-relaxed">
                      Você aprova o novo formato do seu sorriso em boca antes da confecção definitiva das cerâmicas.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Lado Direito: Composição Editorial Escalonada — sem sobreposição agressiva */}
          <div className="lg:col-span-6">
            <div className="flex flex-col gap-6 lg:gap-8">

              {/* Imagem 1: Procedimento — deslocada para a direita no desktop */}
              <ScrollReveal delay={150} direction="up">
                <div className="relative aspect-[16/10] rounded-[28px] overflow-hidden border border-[#e9e7e2] shadow-2xl group w-full lg:w-[88%] lg:ml-auto">
                  <Image
                    src="/images/dr-alan/procedimento-odontologico.jpg"
                    alt="Registro clínico de procedimento odontológico realizado pelo Dr. Alan"
                    fill
                    sizes="(max-width: 768px) 100vw, 45vw"
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#171717]/65 via-transparent to-transparent z-10 pointer-events-none" />
                  <div className="absolute bottom-4 left-4 right-4 z-20 apple-glass-badge p-3.5 rounded-xl">
                    <p className="font-serif-title text-sm font-medium text-[#171717]">
                      Precisão Cirúrgica &amp; Restauradora
                    </p>
                    <p className="text-[11px] text-[#686868]">
                      Protocolos rigorosos conduzidos sob iluminação de alta resolução.
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              {/* Imagem 2: Prótese — deslocada para a esquerda no desktop */}
              <ScrollReveal delay={300} direction="up">
                <div className="relative aspect-[16/10] rounded-[28px] overflow-hidden border border-[#e9e7e2] shadow-2xl group w-full lg:w-[88%] lg:mr-auto">
                  <Image
                    src="/images/dr-alan/protese-dentaria.jpg"
                    alt="Peça de prótese cerâmica de alta precisão estética"
                    fill
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#171717]/65 via-transparent to-transparent z-10 pointer-events-none" />
                  <div className="absolute bottom-4 left-4 right-4 z-20 apple-glass-badge p-3.5 rounded-xl">
                    <p className="font-serif-title text-sm font-medium text-[#171717]">
                      Cerâmicas &amp; Laminados Personalizados
                    </p>
                    <p className="text-[11px] text-[#686868]">
                      Textura, translucidez e mimetismo com os dentes naturais.
                    </p>
                  </div>
                </div>
              </ScrollReveal>

            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
