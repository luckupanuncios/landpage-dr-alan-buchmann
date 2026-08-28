"use client";

import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Star, Quote } from "lucide-react";

export function TestimonialsSection() {
  const testimonials = [
    {
      treatment: "Lentes de Contato Dental",
      text: "Atendimento impecável do início ao fim. O Dr. Alan ouviu exatamente o que eu desejava e o resultado ficou super natural. Mudou totalmente minha autoestima ao sorrir e me comunicar.",
      authorInitial: "P. R.",
      location: "Parobé - RS",
      rating: 5,
    },
    {
      treatment: "Clareamento Dental",
      text: "Eu tinha muito receio de tratamentos dentários por experiências passadas. O Dr. Alan foi extremamente paciente, explicou cada etapa do processo e tornou tudo muito tranquilo.",
      authorInitial: "M. S.",
      location: "Taquara - RS",
      rating: 5,
    },
    {
      treatment: "Reabilitação Oral",
      text: "O consultório é excelente e a atenção aos detalhes impressiona. Fazer a reabilitação do meu sorriso com o Dr. Alan foi a melhor escolha que fiz pela minha saúde e confiança.",
      authorInitial: "C. H.",
      location: "Novo Hamburgo - RS",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-[#f8f5ee] relative border-y border-[#e9e7e2]">
      <Container size="default">
        <ScrollReveal delay={0}>
          <SectionHeader
            eyebrow="Depoimentos & Experiência"
            title="O sorriso de quem confiou em nosso trabalho."
            subtitle="A satisfação dos nossos pacientes é a nossa maior marca de qualidade e dedicação diária."
            align="center"
          />
        </ScrollReveal>

        {/* Destaque Visual com a Imagem Real do Paciente no Espelho (Composição Editorial Compacta) */}
        <div className="mt-12 md:mt-16 mb-12 max-w-5xl mx-auto rounded-[28px] border border-[#e9e7e2] shadow-xl bg-white p-6 sm:p-8 lg:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Coluna da Esquerda (Imagem): ~45% no Desktop */}
            <div className="lg:col-span-5 w-full">
              <ScrollReveal delay={100} direction="left">
                <div className="relative aspect-[4/5] w-full rounded-[24px] overflow-hidden border border-[#e9e7e2] shadow-subtle-luxury group">
                  <Image
                    src="/images/dr-alan/paciente-sorriso-espelho.jpg"
                    alt="Paciente observando o próprio sorriso refletido no espelho"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.02]"
                  />
                </div>
              </ScrollReveal>
            </div>

            {/* Coluna da Direita (Texto): ~55% no Desktop */}
            <div className="lg:col-span-7 space-y-5 flex flex-col justify-center">
              <ScrollReveal delay={200} direction="right">
                <span className="inline-block text-xs uppercase tracking-[0.2em] font-semibold text-[#a38344] bg-[#f8f5ee] px-3.5 py-1.5 rounded-full border border-[#e9e7e2] w-fit">
                  Alegria de Voltar a Sorrir
                </span>
                <h3 className="font-serif-title text-2xl sm:text-3xl lg:text-4xl font-light text-[#171717] leading-snug">
                  Resultados que devolvem a espontaneidade e a confiança.
                </h3>
                <p className="text-sm sm:text-base text-[#686868] font-normal leading-relaxed">
                  Ver o paciente se olhar no espelho ao fim do tratamento e se reconhecer em um sorriso renovado é o que nos move todos os dias em Parobé.
                </p>
                <div className="pt-2 flex items-center gap-2 text-xs font-semibold text-[#a38344] uppercase tracking-wider">
                  <Star className="w-4 h-4 fill-[#b89b5e] text-[#b89b5e]" />
                  <span>Experiência Paciente Centrada</span>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>

        {/* Grid de Depoimentos em Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((item, idx) => (
            <ScrollReveal key={idx} delay={idx * 100} duration={600}>
              <div className="card-editorial h-full p-8 rounded-3xl shadow-subtle-luxury flex flex-col justify-between group">
                <div className="space-y-4">
                  <Quote className="w-8 h-8 text-[#b89b5e]/40" />

                  <div className="flex items-center gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-[#b89b5e] text-[#b89b5e]"
                      />
                    ))}
                  </div>

                  <p className="text-xs uppercase tracking-wider text-[#a38344] font-semibold">
                    {item.treatment}
                  </p>

                  <p className="text-sm text-[#686868] font-normal leading-relaxed italic">
                    &ldquo;{item.text}&rdquo;
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#e9e7e2]/70 flex items-center justify-between">
                  <div>
                    <p className="font-serif-title text-base font-medium text-[#171717]">
                      Paciente {item.authorInitial}
                    </p>
                    <p className="text-xs text-[#686868]">{item.location}</p>
                  </div>
                  <span className="text-[10px] uppercase tracking-widest text-[#a38344] font-semibold bg-[#f8f5ee] px-2.5 py-1 rounded-full border border-[#e9e7e2]">
                    Avaliação Real
                  </span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
