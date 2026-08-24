"use client";

import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Award, GraduationCap, Stethoscope, Check } from "lucide-react";

export function AboutDoctorSection() {
  return (
    <section id="sobre" className="py-20 md:py-32 bg-[#ffffff] relative overflow-hidden">
      {/* Marca d'água editorial sutil de fundo (2% de opacidade) */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 font-serif-title text-[120px] md:text-[200px] font-bold text-[#171717]/[0.02] pointer-events-none select-none tracking-widest leading-none">
        EXPERIÊNCIA
      </div>

      <Container size="default">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Lado Esquerdo: Conteúdo Sobre o Dr. Alan */}
          <div className="lg:col-span-7 space-y-6 md:space-y-8">
            <ScrollReveal delay={0}>
              <SectionHeader
                eyebrow="Corpo Clínico & Responsável Técnico"
                title="Dr. Alan G. Buchmann"
                subtitle="Odontologia feita com técnica, atenção aos detalhes e cuidado genuíno por cada paciente."
                align="left"
              />
            </ScrollReveal>

            {/* Espaço Estruturado para CRO & Credenciais */}
            <ScrollReveal delay={100}>
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f8f5ee] border border-[#e9e7e2] text-xs font-semibold text-[#a38344]">
                  <Award className="w-3.5 h-3.5" />
                  CRO-RS [Nº de Inscrição em Validação]
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#fafaf8] border border-[#e9e7e2] text-xs font-medium text-[#686868]">
                  Odontologia Estética & Reabilitação
                </span>
              </div>
            </ScrollReveal>

            {/* Pilares da Atuação Profissional */}
            <ScrollReveal delay={200}>
              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-4 p-5 rounded-2xl bg-[#fafaf8] border border-[#e9e7e2] shadow-subtle-luxury">
                  <div className="w-10 h-10 rounded-full bg-[#f8f5ee] flex items-center justify-center text-[#a38344] shrink-0 mt-0.5">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif-title text-xl text-[#171717] font-medium">
                      Formação & Aperfeiçoamento Contínuo
                    </h4>
                    <p className="text-sm text-[#686868] mt-1 leading-relaxed">
                      Dedicação constante à atualização técnica em cursos de pós-graduação e imersões estéticas de alto padrão para entregar o que há de mais moderno aos pacientes.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 rounded-2xl bg-[#fafaf8] border border-[#e9e7e2] shadow-subtle-luxury">
                  <div className="w-10 h-10 rounded-full bg-[#f8f5ee] flex items-center justify-center text-[#a38344] shrink-0 mt-0.5">
                    <Stethoscope className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif-title text-xl text-[#171717] font-medium">
                      Planejamento Odontológico Individualizado
                    </h4>
                    <p className="text-sm text-[#686868] mt-1 leading-relaxed">
                      Nenhum tratamento é padronizado. Cada plano de diagnóstico é desenhado respeitando a biologia, a estética facial e as metas pessoais do paciente.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Diferenciais Principais */}
            <ScrollReveal delay={300}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  "Atendimento com hora marcada e sem pressa",
                  "Materiais e cerâmicas de padrão internacional",
                  "Acompanhamento pós-tratamento rigoroso",
                  "Ambiente preparado para seu total conforto",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs font-medium text-[#171717]">
                    <div className="w-5 h-5 rounded-full bg-[#f8f5ee] flex items-center justify-center text-[#a38344] shrink-0">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Lado Direito: Container de Retrato Profissional */}
          <div className="lg:col-span-5">
            <ScrollReveal delay={150} direction="right">
              <div className="relative aspect-[4/5] rounded-[32px] overflow-hidden border border-[#e9e7e2] shadow-2xl group">
                <Image
                  src="/images/dr-alan/dr-alan-secundaria.jpg"
                  alt="Dr. Alan G. Buchmann — Cirurgião-Dentista"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#171717]/60 via-transparent to-transparent z-10 pointer-events-none" />

                <div className="absolute bottom-6 left-6 right-6 z-20 apple-glass-badge p-5 rounded-2xl">
                  <h3 className="font-serif-title text-xl text-[#171717] font-medium">
                    Dr. Alan G. Buchmann
                  </h3>
                  <p className="text-xs text-[#a38344] font-medium tracking-wide uppercase mt-0.5">
                    Cirurgião-Dentista
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
