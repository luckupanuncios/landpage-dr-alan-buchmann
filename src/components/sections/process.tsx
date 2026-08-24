"use client";

import React from "react";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Button } from "@/components/ui/button";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { MessageCircle, CalendarCheck, ClipboardList, Sparkles } from "lucide-react";

export function ProcessSection() {
  const whatsappUrl = getWhatsAppLink(
    "Olá Dr. Alan, gostaria de dar o 1º passo e agendar uma avaliação."
  );

  const steps = [
    {
      number: "01",
      title: "Entre em contato",
      description:
        "Fale diretamente com nossa recepção pelo WhatsApp. Tiraremos suas dúvidas iniciais com rapidez e atenção.",
      icon: <MessageCircle className="w-5 h-5 text-[#a38344]" />,
    },
    {
      number: "02",
      title: "Agende sua avaliação",
      description:
        "Escolha o melhor dia e horário na agenda do consultório para ser recebido sem filas ou esperas desnecessárias.",
      icon: <CalendarCheck className="w-5 h-5 text-[#a38344]" />,
    },
    {
      number: "03",
      title: "Avaliação personalizada",
      description:
        "No consultório, realizamos um exame completo, escutamos seus desejos e avaliamos os aspectos funcionais e estéticos.",
      icon: <ClipboardList className="w-5 h-5 text-[#a38344]" />,
    },
    {
      number: "04",
      title: "Planejamento sob medida",
      description:
        "Apresentamos a proposta de tratamento ideal, os prazos e o mock-up digital para você iniciar com total clareza.",
      icon: <Sparkles className="w-5 h-5 text-[#a38344]" />,
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-[#ffffff] relative">
      <Container size="default">
        <ScrollReveal delay={0}>
          <SectionHeader
            eyebrow="Jornada do Paciente"
            title="Seu novo sorriso começa com uma conversa."
            subtitle="Um processo transparente, organizado e desenhado para que você se sinta acolhido e seguro desde o primeiro momento."
            align="center"
          />
        </ScrollReveal>

        {/* Grid de 4 Passos com Linha Visual Conectora */}
        <div className="relative mt-14 md:mt-16">
          {/* Linha horizontal conectora no desktop */}
          <div className="hidden lg:block absolute top-[28%] left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-[#b89b5e]/40 to-transparent z-0 pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 relative z-10">
            {steps.map((step, idx) => (
              <ScrollReveal key={idx} delay={idx * 100} duration={600}>
                <div className="card-editorial h-full p-8 rounded-3xl shadow-subtle-luxury flex flex-col justify-between group">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="font-serif-title text-5xl font-light text-[#b89b5e]/30 group-hover:text-[#a38344] transition-colors">
                        {step.number}
                      </span>
                      <div className="w-10 h-10 rounded-full bg-[#f8f5ee] border border-[#e9e7e2] flex items-center justify-center shadow-xs">
                        {step.icon}
                      </div>
                    </div>

                    <h3 className="font-serif-title text-xl font-medium text-[#171717] mb-2">
                      {step.title}
                    </h3>
                    <p className="text-xs text-[#686868] leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-[#e9e7e2]/60 text-[11px] text-[#a38344] font-semibold uppercase tracking-wider">
                    Etapa {idx + 1} de 4
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* CTA do Fim do Processo */}
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
              Iniciar meu agendamento agora
            </Button>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
