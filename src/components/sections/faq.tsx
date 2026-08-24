"use client";

import React from "react";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Accordion } from "@/components/ui/accordion";
import { FAQ_DATA } from "@/data/faq";

export function FAQSection() {
  return (
    <section id="faq" className="py-20 md:py-32 bg-[#fafaf8] relative border-t border-[#e9e7e2]">
      <Container size="narrow">
        <ScrollReveal delay={0}>
          <SectionHeader
            eyebrow="Tire Suas Dúvidas"
            title="Perguntas Frequentes"
            subtitle="Respostas simples e transparentes para orientar você antes de agendar sua avaliação com o Dr. Alan."
            align="center"
          />
        </ScrollReveal>

        <ScrollReveal delay={150}>
          <div className="mt-12 md:mt-16 bg-white p-6 sm:p-10 rounded-[28px] border border-[#e9e7e2] shadow-subtle-luxury">
            <Accordion items={FAQ_DATA} />
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
