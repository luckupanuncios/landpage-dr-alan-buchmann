import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = {
  title: "Termos de Uso | Dr. Alan Buchmann",
  description:
    "Condições de uso do site do Dr. Alan Buchmann: natureza informativa do conteúdo, propriedade intelectual, condutas vedadas e limitação de responsabilidade.",
  alternates: {
    canonical: "/termos-de-uso",
  },
};

const ULTIMA_ATUALIZACAO = "8 de setembro de 2026";

function Secao({
  titulo,
  children,
}: {
  titulo: string;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-3 py-8">
      <h2 className="font-serif-title text-2xl sm:text-3xl font-light text-[#171717] leading-tight">
        {titulo}
      </h2>
      <div className="space-y-3 text-sm sm:text-base text-[#686868] font-normal leading-relaxed">
        {children}
      </div>
    </section>
  );
}

function Item({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-3">
      <span className="text-[#a38344] shrink-0">&bull;</span>
      <span>{children}</span>
    </li>
  );
}

function Destaque({ children }: { children: React.ReactNode }) {
  return <strong className="text-[#171717] font-medium">{children}</strong>;
}

export default function TermosDeUsoPage() {
  return (
    <div className="relative pt-32 sm:pt-36 lg:pt-44 pb-20 md:pb-28 bg-[#fafaf8]">
      <Container size="narrow">
        {/* Cabeçalho da página */}
        <div className="space-y-4 pb-10 border-b border-[#e9e7e2]">
          <span className="inline-block text-xs md:text-sm uppercase tracking-[0.2em] font-medium text-[#a38344]">
            Condições de Utilização
          </span>
          <h1 className="font-serif-title text-3xl sm:text-4xl md:text-5xl font-light text-[#171717] tracking-tight leading-[1.15]">
            Termos de Uso
          </h1>
          <p className="text-base sm:text-lg text-[#686868] font-normal leading-relaxed">
            Estes termos estabelecem as condições de acesso e utilização deste
            site. Ao navegar por ele, você declara ter lido e concordado com o
            que segue.
          </p>
          <p className="text-xs text-[#a38344] font-medium uppercase tracking-wider pt-2">
            Última atualização: {ULTIMA_ATUALIZACAO}
          </p>
        </div>

        <div className="divide-y divide-[#e9e7e2]">
          <Secao titulo="1. Objeto e aceite">
            <p>
              Este site tem por finalidade apresentar o consultório odontológico
              do Dr. Alan Buchmann, os serviços prestados, a localização e os
              canais de contato para agendamento.
            </p>
            <p>
              O acesso e a navegação implicam a aceitação integral destes Termos
              de Uso. Caso você não concorde com qualquer disposição aqui
              prevista, não utilize o site.
            </p>
          </Secao>

          <Secao titulo="2. Identificação do responsável">
            <p>
              Responsável técnico:{" "}
              <Destaque>Dr. Alan Geison Buchmann Machado</Destaque>,
              cirurgião-dentista clínico geral, inscrito no CRO/RS sob o nº
              16744.
            </p>
            <p>
              Consultório localizado na R. Lotário Raimundo, 59, Sala 02, Centro,
              Parobé/RS, CEP 95630-000.
            </p>
            <p>
              Titularidade do site:{" "}
              <Destaque>Alan Geison Buchmann Machado, cirurgião-dentista inscrito no CRO/RS sob o nº 16744</Destaque>. Contato:{" "}
              <Destaque>alangeisonbuchmann@gmail.com</Destaque>.
            </p>
          </Secao>

          <Secao titulo="3. Natureza informativa do conteúdo">
            <p>
              Todo o conteúdo deste site tem caráter exclusivamente informativo e
              educativo. Ele{" "}
              <Destaque>
                não substitui consulta, diagnóstico ou orientação profissional
              </Destaque>{" "}
              e não deve ser utilizado como base para autodiagnóstico ou para
              iniciar, alterar ou interromper qualquer tratamento.
            </p>
            <p>
              A simples navegação, o envio de mensagem por WhatsApp ou o pedido
              de agendamento{" "}
              <Destaque>
                não estabelecem relação profissional-paciente
              </Destaque>
              . Essa relação se constitui apenas a partir do atendimento clínico
              presencial, com avaliação individual.
            </p>
            <p>
              As imagens de casos clínicos publicadas correspondem a resultados
              reais obtidos em pacientes específicos, divulgadas mediante
              autorização.{" "}
              <Destaque>
                Resultados variam conforme as condições clínicas de cada caso
              </Destaque>
              , a indicação técnica, a resposta biológica individual e a adesão
              do paciente às orientações. Nenhum resultado é garantido ou pode
              ser presumido a partir do material apresentado.
            </p>
          </Secao>

          <Secao titulo="4. Propriedade intelectual">
            <p>
              Todos os elementos deste site — textos, imagens, fotografias de
              casos clínicos, ilustrações, logotipo, identidade visual, layout,
              código-fonte e demais materiais — são protegidos pela Lei nº
              9.610/1998 e pela legislação de propriedade industrial, e pertencem
              ao titular do site ou a terceiros que autorizaram o seu uso.
            </p>
            <p>
              A marca e o nome do Dr. Alan Buchmann não podem ser utilizados por
              terceiros sem autorização prévia e por escrito.
            </p>
          </Secao>

          <Secao titulo="5. Uso permitido">
            <p>
              Você pode acessar o site, consultar o seu conteúdo e compartilhar
              links para as páginas, desde que a origem seja preservada e que não
              haja alteração do conteúdo nem finalidade comercial.
            </p>
          </Secao>

          <Secao titulo="6. Condutas vedadas">
            <p>É expressamente proibido:</p>
            <ul className="space-y-2 pt-1">
              <Item>
                Reproduzir, copiar, distribuir ou publicar qualquer conteúdo do
                site sem autorização prévia e por escrito;
              </Item>
              <Item>
                Utilizar imagens de casos clínicos para qualquer finalidade,
                inclusive em redes sociais, materiais publicitários ou
                comparativos;
              </Item>
              <Item>
                Modificar, adaptar, realizar engenharia reversa ou criar obras
                derivadas a partir do site;
              </Item>
              <Item>
                Empregar robôs, raspadores ou qualquer método automatizado de
                coleta de dados ou conteúdo;
              </Item>
              <Item>
                Praticar atos que comprometam a segurança, a integridade ou a
                disponibilidade do site;
              </Item>
              <Item>
                Utilizar o site para finalidade ilícita, difamatória, enganosa ou
                que viole direitos de terceiros.
              </Item>
            </ul>
          </Secao>

          <Secao titulo="7. Links e serviços de terceiros">
            <p>
              Este site contém links e integrações com serviços operados por
              terceiros, entre eles WhatsApp, Google Maps, Facebook e Instagram.
              Esses serviços possuem termos de uso e políticas de privacidade
              próprios, aos quais você se submete ao utilizá-los.
            </p>
            <p>
              Não temos controle sobre o conteúdo, a disponibilidade ou as
              práticas desses serviços e não respondemos por eventuais danos
              decorrentes do seu uso.
            </p>
          </Secao>

          <Secao titulo="8. Disponibilidade do site">
            <p>
              Empregamos esforços para manter o site disponível e atualizado.
              Contudo, o acesso pode ser interrompido por manutenção, falha
              técnica, indisponibilidade do provedor de hospedagem ou eventos
              fora do nosso controle, sem que isso gere qualquer direito a
              indenização.
            </p>
            <p>
              Reservamo-nos o direito de alterar, suspender ou descontinuar
              qualquer parte do site a qualquer momento.
            </p>
          </Secao>

          <Secao titulo="9. Limitação de responsabilidade">
            <p>
              Na máxima extensão permitida pela legislação aplicável, não nos
              responsabilizamos por:
            </p>
            <ul className="space-y-2 pt-1">
              <Item>
                Decisões tomadas exclusivamente com base no conteúdo informativo
                do site, sem avaliação clínica presencial;
              </Item>
              <Item>
                Danos decorrentes de indisponibilidade, interrupção ou falha
                técnica de acesso;
              </Item>
              <Item>
                Conteúdo, práticas ou falhas de sites e serviços de terceiros
                acessados a partir daqui;
              </Item>
              <Item>
                Uso indevido do site por parte do usuário ou de terceiros.
              </Item>
            </ul>
            <p className="pt-1">
              Nenhuma disposição destes termos afasta os direitos assegurados ao
              consumidor pela Lei nº 8.078/1990 (Código de Defesa do Consumidor)
              nem a responsabilidade profissional prevista na legislação
              sanitária e no Código de Ética Odontológica.
            </p>
          </Secao>

          <Secao titulo="10. Proteção de dados pessoais">
            <p>
              O tratamento de dados pessoais realizado a partir deste site está
              descrito na{" "}
              <Link
                href="/politica-de-privacidade"
                className="text-[#a38344] font-medium hover:underline"
              >
                Política de Privacidade
              </Link>
              , que integra estes Termos de Uso.
            </p>
          </Secao>

          <Secao titulo="11. Alterações destes termos">
            <p>
              Estes termos podem ser alterados a qualquer momento, sem aviso
              prévio, para refletir mudanças no site, nos serviços prestados ou
              na legislação aplicável. A data da última atualização é sempre
              indicada no topo desta página, e a continuidade do uso do site após
              a publicação de alterações representa a concordância com a nova
              versão.
            </p>
          </Secao>

          <Secao titulo="12. Legislação aplicável e foro">
            <p>
              Estes Termos de Uso são regidos pela legislação brasileira. Fica
              eleito o foro da comarca de Parobé/RS para dirimir quaisquer
              controvérsias deles decorrentes, com renúncia a qualquer outro, por
              mais privilegiado que seja, ressalvada a competência legalmente
              assegurada ao consumidor de demandar no foro do seu domicílio.
            </p>
          </Secao>
        </div>
      </Container>
    </div>
  );
}
