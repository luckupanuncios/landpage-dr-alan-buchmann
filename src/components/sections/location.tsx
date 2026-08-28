"use client";

import React from "react";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Button } from "@/components/ui/button";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { MapPin, Navigation, MessageCircle, Clock, Building } from "lucide-react";

export function LocationSection() {
  const mapsUrl = "https://maps.app.goo.gl/zvSyshBKMffJGThp6";
  const whatsappUrl = getWhatsAppLink(
    "Olá, gostaria de agendar uma avaliação com o Dr. Alan no consultório de Parobé."
  );

  return (
    <section id="localizacao" className="py-20 md:py-32 bg-[#ffffff] relative border-t border-[#e9e7e2]">
      <Container size="default">
        <ScrollReveal delay={0}>
          <SectionHeader
            eyebrow="Localização & Acesso"
            title="Fácil acesso no centro de Parobé."
            subtitle="Um consultório localizado em ponto estratégico, com privacidade e facilidade para você chegar."
            align="center"
          />
        </ScrollReveal>

        <ScrollReveal delay={150}>
          <div className="max-w-4xl mx-auto mt-12 md:mt-16 bg-[#fafaf8] rounded-[32px] p-8 md:p-12 border border-[#e9e7e2] shadow-subtle-luxury">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Lado Esquerdo: Dados de Endereço & Horários */}
              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-white border border-[#e9e7e2] flex items-center justify-center text-[#a38344] shrink-0 shadow-xs">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-serif-title text-xl font-medium text-[#171717]">
                        Endereço Oficial
                      </h4>
                      <p className="text-sm text-[#686868] mt-1 leading-relaxed">
                        R. Lotário Raimundo, 59 - Sl 02 - Centro
                        <br />
                        Parobé - RS, 95630-000
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-white border border-[#e9e7e2] flex items-center justify-center text-[#a38344] shrink-0 shadow-xs">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-serif-title text-xl font-medium text-[#171717]">
                        Atendimento
                      </h4>
                      <p className="text-sm text-[#686868] mt-1 leading-relaxed">
                        Segunda a sexta-feira, preferencialmente com horário agendado.
                        <br />
                        Às segundas-feiras, em semanas alternadas e apenas no período da tarde.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-white border border-[#e9e7e2] flex items-center justify-center text-[#a38344] shrink-0 shadow-xs">
                      <Building className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-serif-title text-xl font-medium text-[#171717]">
                        Estrutura do Prédio
                      </h4>
                      <p className="text-sm text-[#686868] mt-1 leading-relaxed">
                        Sala 02 - Ambiente climatizado e silencioso
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Lado Direito: Ações Principais (Navegação & WhatsApp) */}
              <div className="bg-white p-6 lg:p-8 rounded-2xl border border-[#e9e7e2] shadow-sm space-y-6 text-center md:text-left">
                <div>
                  <h4 className="font-serif-title text-2xl font-light text-[#171717]">
                    Venha conhecer o consultório
                  </h4>
                  <p className="text-xs text-[#686868] mt-1">
                    Clique abaixo para abrir o mapa no seu GPS ou falar diretamente com a recepção.
                  </p>
                </div>

                <div className="flex flex-col gap-3">
                  <Button
                    href={mapsUrl}
                    external
                    variant="primary"
                    size="md"
                    gtmEventName="click_maps"
                    icon={<Navigation className="w-4 h-4" />}
                  >
                    Como chegar (Google Maps)
                  </Button>
                  <Button
                    href={whatsappUrl}
                    external
                    variant="gold"
                    size="md"
                    gtmEventName="click_whatsapp_hero"
                    icon={<MessageCircle className="w-4 h-4" />}
                  >
                    Falar no WhatsApp
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
