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
                Cada preparo, escultura e ajuste é conduzido com atenção aos detalhes e auxílio de lupa de magnificação. Quando indicado, o sorriso é planejado previamente com mock-up.
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
                      Abordagem conservadora quando indicada
                    </h4>
                    <p className="text-xs text-[#686868] mt-1 leading-relaxed">
                      Cada caso é avaliado individualmente, buscando preservar ao máximo a estrutura dental sempre que clinicamente indicado.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#fafaf8] border border-[#e9e7e2]">
                  <div className="w-10 h-10 rounded-full bg-[#f8f5ee] border border-[#e9e7e2] flex items-center justify-center text-[#a38344] shrink-0 mt-0.5">
                    <Eye className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif-title text-lg text-[#171717] font-medium">
                      Lupa de Magnificação
                    </h4>
                    <p className="text-xs text-[#686868] mt-1 leading-relaxed">
                      Visualização ampliada do campo de trabalho, auxiliando na precisão dos procedimentos.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#fafaf8] border border-[#e9e7e2]">
                  <div className="w-10 h-10 rounded-full bg-[#f8f5ee] border border-[#e9e7e2] flex items-center justify-center text-[#a38344] shrink-0 mt-0.5">
                    <HeartHandshake className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif-title text-lg text-[#171717] font-medium">
                      Planejamento do sorriso com mock-up
                    </h4>
                    <p className="text-xs text-[#686868] mt-1 leading-relaxed">
                      Quando indicado, você visualiza o formato do sorriso em boca antes da confecção definitiva das peças.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Lado Direito: Imagem editorial única em formato 4:5 */}
          <div className="lg:col-span-6">
            <ScrollReveal delay={150} direction="up">
              <div className="relative aspect-[4/5] w-full max-w-md lg:max-w-lg mx-auto rounded-[28px] overflow-hidden border border-[#e9e7e2] shadow-2xl group">
                <Image
                  src="/images/dr-alan/experiencia-03.jpg"
                  alt="Registro clínico de procedimento restaurador conduzido sob lupa pelo Dr. Alan Buchmann"
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
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
          </div>
        </div>
      </Container>
    </section>
  );
}
