"use client";

import React from "react";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { TREATMENTS_DATA } from "@/data/treatments";
import { Button } from "@/components/ui/button";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { CheckCircle2, MessageCircle, ArrowUpRight } from "lucide-react";

export function TreatmentsSection() {
  const defaultWhatsappUrl = getWhatsAppLink(
    "Olá, gostaria de agendar uma avaliação com o Dr. Alan."
  );

  return (
    <section id="tratamentos" className="py-20 md:py-32 bg-[#ffffff] relative">
      <Container size="default">
        {/* Cabeçalho da Seção */}
        <ScrollReveal delay={0}>
          <SectionHeader
            eyebrow="Tratamentos Realizados"
            title="Cuidado completo para o seu sorriso."
            subtitle="Cada sorriso possui uma necessidade diferente. O primeiro passo é entender você e construir um tratamento adequado ao seu caso."
            align="center"
          />
        </ScrollReveal>

        {/* Grid de Cards de Tratamentos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-14 md:mt-16">
          {TREATMENTS_DATA.map((treatment, idx) => {
            const treatmentWhatsappUrl = getWhatsAppLink(
              `Olá, gostaria de agendar uma avaliação com o Dr. Alan sobre ${treatment.title}.`
            );

            return (
              <ScrollReveal key={treatment.id} delay={idx * 80} duration={600}>
                <div className="card-editorial h-full rounded-3xl p-8 shadow-subtle-luxury flex flex-col justify-between group">
                  <div>
                    {/* Badge Opcional */}
                    {treatment.badge && (
                      <span className="inline-block text-[10px] uppercase tracking-[0.2em] font-semibold text-[#a38344] bg-[#f8f5ee] px-3 py-1 rounded-full border border-[#e9e7e2] mb-4">
                        {treatment.badge}
                      </span>
                    )}

                    <h3 className="font-serif-title text-2xl font-normal text-[#171717] group-hover:text-[#a38344] transition-colors mb-1">
                      {treatment.title}
                    </h3>
                    <p className="text-xs uppercase tracking-wider text-[#a38344] font-medium mb-4">
                      {treatment.subtitle}
                    </p>

                    <p className="text-sm text-[#686868] font-normal leading-relaxed mb-6">
                      {treatment.description}
                    </p>

                    {/* Lista de Recursos / Diferenciais */}
                    <ul className="space-y-2.5 mb-8">
                      {treatment.features.map((feature, fIdx) => (
                        <li
                          key={fIdx}
                          className="flex items-start gap-2.5 text-xs text-[#171717] font-medium"
                        >
                          <CheckCircle2 className="w-4 h-4 text-[#a38344] shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA do Card */}
                  <div className="pt-4 border-t border-[#e9e7e2]/60">
                    <a
                      href={treatmentWhatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-semibold text-[#171717] group-hover:text-[#a38344] transition-colors"
                    >
                      <span>Saber mais sobre este tratamento</span>
                      <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* CTA do Fim da Seção de Tratamentos */}
        <ScrollReveal delay={200}>
          <div className="mt-14 md:mt-16 text-center bg-[#f8f5ee] rounded-3xl p-8 md:p-12 border border-[#e9e7e2] shadow-subtle-luxury">
            <h4 className="font-serif-title text-2xl md:text-3xl text-[#171717] font-light mb-3">
              Não tem certeza de qual tratamento é o ideal para você?
            </h4>
            <p className="text-sm md:text-base text-[#686868] max-w-2xl mx-auto mb-6">
              Agende uma avaliação inicial completa com o Dr. Alan. Analisaremos sua saúde bucal e apresentaremos o planejamento ideal.
            </p>
            <Button
              href={defaultWhatsappUrl}
              external
              variant="gold"
              size="md"
              gtmEventName="click_whatsapp_hero"
              icon={<MessageCircle className="w-5 h-5" />}
            >
              Agendar minha avaliação personalizada
            </Button>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
