"use client";

import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Sparkles, Shield, Coffee, Armchair } from "lucide-react";

export function ClinicSection() {
  const mainItem = {
    id: "consultorio-recepcao",
    image: "/images/dr-alan/consultorio-recepcao.jpg",
    title: "Recepção Exclusiva",
    description: "Ambiente sofisticado e acolhedor para receber você com total privacidade e conforto.",
    icon: <Sparkles className="w-5 h-5 text-[#b89b5e]" />,
    label: "Recepção",
  };

  const secondaryItems = [
    {
      id: "consultorio-logo",
      image: "/images/dr-alan/consultorio-logo.jpg",
      title: "Identidade & Marca",
      description: "Espaço projetado com elegância e atenção em cada detalhe institucional.",
      icon: <Shield className="w-5 h-5 text-[#b89b5e]" />,
      label: "Ambiente",
    },
    {
      id: "consultorio-lustre",
      image: "/images/dr-alan/consultorio-lustre.jpg",
      title: "Iluminação & Design",
      description: "Design de interiores refinado para tornar sua consulta agradável.",
      icon: <Coffee className="w-5 h-5 text-[#b89b5e]" />,
      label: "Detalhes",
    },
    {
      id: "consultorio-espera",
      image: "/images/dr-alan/consultorio-espera.jpg",
      title: "Sala de Espera Privativa",
      description: "Conforto absoluto e atendimento com horário marcado, sem filas.",
      icon: <Armchair className="w-5 h-5 text-[#b89b5e]" />,
      label: "Conforto",
    },
  ];

  return (
    <section id="consultorio" className="py-20 md:py-32 bg-[#121212] text-white relative overflow-hidden">
      {/* Glow de fundo luxuoso */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#b89b5e]/10 blur-[140px] rounded-full pointer-events-none" />

      <Container size="default">
        {/* Cabeçalho */}
        <ScrollReveal delay={0}>
          <div className="text-center mx-auto max-w-3xl space-y-4">
            <span className="inline-block text-xs uppercase tracking-[0.2em] font-semibold text-[#b89b5e]">
              Estrutura & Ambiente
            </span>
            <h2 className="font-serif-title text-3xl sm:text-4xl md:text-5xl font-light text-white tracking-tight leading-[1.15]">
              Um espaço preparado para cuidar de você.
            </h2>
            <p className="text-base sm:text-lg text-[#a3a3a3] font-normal leading-relaxed">
              Conforto, cuidado e uma estrutura pensada para tornar sua experiência mais tranquila do início ao fim.
            </p>
          </div>
        </ScrollReveal>

        {/* Grid de 2 Colunas no Desktop / 2x2 no Tablet / 1 Coluna no Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8 mt-14 md:mt-16 relative z-10 items-stretch">
          
          {/* Coluna da Esquerda (Desktop): Imagem de Destaque Maior */}
          <div className="lg:col-span-6 flex flex-col">
            <ScrollReveal delay={100} duration={700} className="h-full">
              <div className="group relative rounded-[28px] overflow-hidden border border-[#2c2c2c] shadow-2xl transition-all duration-500 h-full min-h-[380px] lg:min-h-[540px] flex flex-col justify-between p-6 lg:p-8">
                <Image
                  src={mainItem.image}
                  alt={mainItem.title}
                  fill
                  priority={false}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />

                {/* Gradient Overlay Escuro */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#121212]/90 via-[#121212]/30 to-transparent z-10 pointer-events-none transition-opacity duration-300 group-hover:opacity-90" />

                {/* Header do Card */}
                <div className="flex justify-between items-start z-20">
                  <div className="w-10 h-10 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-lg">
                    {mainItem.icon}
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#b89b5e] bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20">
                    {mainItem.label}
                  </span>
                </div>

                {/* Conteúdo do Card */}
                <div className="z-20 bg-black/75 backdrop-blur-md p-6 rounded-2xl border border-white/15 shadow-2xl transition-transform duration-300 group-hover:-translate-y-1">
                  <h3 className="font-serif-title text-2xl font-medium text-white mb-1">
                    {mainItem.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#a3a3a3] leading-relaxed">
                    {mainItem.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Coluna da Direita (Desktop): 3 Cards Menores Proporcionais Empilhados */}
          <div className="lg:col-span-6 flex flex-col gap-6 justify-between">
            {secondaryItems.map((item, idx) => (
              <ScrollReveal key={item.id} delay={150 + idx * 100} duration={650}>
                <div className="group relative rounded-2xl overflow-hidden border border-[#2c2c2c] shadow-xl transition-all duration-500 aspect-[16/10] sm:aspect-[16/9] lg:aspect-[21/9] flex flex-col justify-between p-5 lg:p-6">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />

                  {/* Gradient Overlay Escuro */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121212]/85 via-[#121212]/25 to-transparent z-10 pointer-events-none transition-opacity duration-300 group-hover:opacity-90" />

                  {/* Header do Card Menor */}
                  <div className="flex justify-between items-start z-20">
                    <div className="w-8 h-8 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-md">
                      {item.icon}
                    </div>
                    <span className="text-[9px] uppercase tracking-[0.2em] font-semibold text-[#b89b5e] bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                      {item.label}
                    </span>
                  </div>

                  {/* Conteúdo do Card Menor */}
                  <div className="z-20 bg-black/75 backdrop-blur-md p-4 rounded-xl border border-white/15 shadow-xl transition-transform duration-300 group-hover:-translate-y-1">
                    <h3 className="font-serif-title text-base sm:text-lg font-medium text-white">
                      {item.title}
                    </h3>
                    <p className="text-[11px] sm:text-xs text-[#a3a3a3] mt-0.5 leading-relaxed line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </Container>
    </section>
  );
}
