import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = {
  title: "Política de Privacidade | Dr. Alan Buchmann",
  description:
    "Saiba como o site do Dr. Alan Buchmann trata dados pessoais, quais cookies utiliza e como exercer seus direitos previstos na Lei Geral de Proteção de Dados (LGPD).",
  alternates: {
    canonical: "/politica-de-privacidade",
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

export default function PoliticaDePrivacidadePage() {
  return (
    <div className="relative pt-32 sm:pt-36 lg:pt-44 pb-20 md:pb-28 bg-[#fafaf8]">
      <Container size="narrow">
        {/* Cabeçalho da página */}
        <div className="space-y-4 pb-10 border-b border-[#e9e7e2]">
          <span className="inline-block text-xs md:text-sm uppercase tracking-[0.2em] font-medium text-[#a38344]">
            Transparência &amp; Proteção de Dados
          </span>
          <h1 className="font-serif-title text-3xl sm:text-4xl md:text-5xl font-light text-[#171717] tracking-tight leading-[1.15]">
            Política de Privacidade
          </h1>
          <p className="text-base sm:text-lg text-[#686868] font-normal leading-relaxed">
            Esta política explica quais dados pessoais são tratados a partir da
            navegação neste site e do contato realizado por WhatsApp, com que
            finalidade e quais são os seus direitos.
          </p>
          <p className="text-xs text-[#a38344] font-medium uppercase tracking-wider pt-2">
            Última atualização: {ULTIMA_ATUALIZACAO}
          </p>
        </div>

        <div className="divide-y divide-[#e9e7e2]">
          <Secao titulo="1. Quem é o controlador dos seus dados">
            <p>
              O controlador dos dados pessoais tratados neste site é{" "}
              <Destaque>[RAZÃO SOCIAL / CPF ou CNPJ]</Destaque>, responsável pelo
              consultório odontológico do Dr. Alan Geison Buchmann Machado, com
              endereço na R. Lotário Raimundo, 59, Sala 02, Centro, Parobé/RS,
              CEP 95630-000.
            </p>
            <p>
              Canal para assuntos relacionados a dados pessoais:{" "}
              <Destaque>[E-MAIL DE CONTATO]</Destaque>.
            </p>
            <p>
              Encarregado pelo tratamento de dados pessoais (DPO), quando
              aplicável: <Destaque>[NOME E CONTATO DO ENCARREGADO, SE HOUVER]</Destaque>.
            </p>
          </Secao>

          <Secao titulo="2. Quais dados são coletados">
            <p>
              Este site não possui formulários de cadastro, área de login ou
              carrinho de compras. Os dados tratados se limitam a:
            </p>

            <p className="font-medium text-[#171717] pt-1">
              a) Dados de navegação, coletados por cookies e tags
            </p>
            <p>
              Endereço IP, tipo e versão do navegador, sistema operacional, tipo
              de dispositivo, páginas visitadas, tempo de permanência, origem do
              acesso (por exemplo, um anúncio ou uma busca) e interações com
              botões do site, como cliques em agendamento. Esses dados são
              coletados por meio do Google Tag Manager e das ferramentas
              acionadas por ele, como Google Analytics e Meta Pixel.
            </p>

            <p className="font-medium text-[#171717] pt-1">
              b) Dados informados por você no WhatsApp
            </p>
            <p>
              Ao clicar em qualquer botão de agendamento, você é direcionado ao
              WhatsApp, fora deste site. A partir daí, são tratados o número de
              telefone, o nome de exibição do seu perfil e as informações que
              você espontaneamente enviar na conversa.
            </p>

            <p className="font-medium text-[#171717] pt-1">
              c) O que este site não coleta
            </p>
            <p>
              Este site não coleta dados de saúde, histórico clínico, imagens
              odontológicas ou qualquer dado pessoal sensível. Não há formulário
              de anamnese, envio de exames ou prontuário eletrônico acessível
              pelo site.
            </p>
          </Secao>

          <Secao titulo="3. Finalidades e bases legais">
            <p>
              Cada tratamento de dados possui uma finalidade específica e uma
              base legal prevista na Lei nº 13.709/2018 (LGPD):
            </p>
            <ul className="space-y-3 pt-1">
              <Item>
                <Destaque>Permitir o funcionamento básico do site</Destaque> —
                cookies estritamente necessários. Base legal: legítimo interesse
                do controlador (art. 7º, IX).
              </Item>
              <Item>
                <Destaque>
                  Medir audiência e entender como o site é utilizado
                </Destaque>{" "}
                — cookies analíticos. Base legal: consentimento (art. 7º, I) ou
                legítimo interesse, conforme a configuração adotada.
              </Item>
              <Item>
                <Destaque>Mensurar e otimizar campanhas de divulgação</Destaque>{" "}
                — cookies de marketing e remarketing. Base legal: consentimento
                (art. 7º, I).
              </Item>
              <Item>
                <Destaque>Responder a contatos e agendar consultas</Destaque> —
                dados enviados por você no WhatsApp. Base legal: procedimentos
                preliminares relacionados a contrato, a pedido do titular (art.
                7º, V).
              </Item>
            </ul>
          </Secao>

          <Secao titulo="4. Cookies e tecnologias semelhantes">
            <p>
              Cookies são pequenos arquivos gravados no seu navegador quando
              você visita um site. Eles permitem reconhecer o dispositivo em
              acessos seguintes e registrar informações sobre a navegação.
            </p>
            <p>Este site pode utilizar as seguintes categorias:</p>
            <ul className="space-y-2 pt-1">
              <Item>
                <Destaque>Necessários</Destaque> — indispensáveis para carregar e
                exibir as páginas corretamente.
              </Item>
              <Item>
                <Destaque>Analíticos</Destaque> — medem visitas, origem do
                tráfego e comportamento de navegação, de forma agregada.
              </Item>
              <Item>
                <Destaque>Marketing e remarketing</Destaque> — permitem mensurar
                campanhas e exibir anúncios em plataformas do Google e da Meta.
              </Item>
            </ul>
            <p className="pt-1">
              Você pode bloquear ou excluir cookies a qualquer momento nas
              configurações do seu navegador, geralmente no menu de privacidade e
              segurança. Também é possível navegar em modo anônimo. Bloquear
              cookies necessários pode comprometer o funcionamento de partes do
              site.
            </p>
          </Secao>

          <Secao titulo="5. Compartilhamento com terceiros">
            <p>
              Não vendemos dados pessoais. O compartilhamento ocorre apenas com
              os provedores de tecnologia necessários à operação e à divulgação
              do site:
            </p>
            <ul className="space-y-2 pt-1">
              <Item>
                <Destaque>Google LLC</Destaque> — Google Tag Manager, Google
                Analytics, Google Ads e Google Maps.
              </Item>
              <Item>
                <Destaque>Meta Platforms, Inc.</Destaque> — Meta Pixel, Facebook,
                Instagram e WhatsApp.
              </Item>
              <Item>
                <Destaque>Provedor de hospedagem do site</Destaque> — responsável
                por manter as páginas disponíveis na internet.
              </Item>
            </ul>
            <p className="pt-1">
              <Destaque>Transferência internacional de dados.</Destaque> Esses
              provedores estão sediados fora do Brasil e podem armazenar e
              processar dados em servidores localizados no exterior, inclusive
              nos Estados Unidos. A transferência ocorre nos termos dos arts. 33
              e seguintes da LGPD, com base nas garantias e cláusulas contratuais
              adotadas por cada fornecedor.
            </p>
          </Secao>

          <Secao titulo="6. Por quanto tempo os dados são mantidos">
            <p>
              Os dados de navegação são mantidos pelos prazos definidos em cada
              ferramenta de análise e publicidade, conforme a configuração
              vigente. Registros de acesso a aplicações de internet são mantidos
              pelo prazo de 6 (seis) meses, conforme o art. 15 da Lei nº
              12.965/2014 (Marco Civil da Internet).
            </p>
            <p>
              As conversas iniciadas no WhatsApp são mantidas enquanto
              necessárias ao atendimento e ao relacionamento com o paciente, ou
              pelo prazo exigido para o cumprimento de obrigação legal ou
              regulatória, ou ainda para o exercício regular de direitos.
            </p>
          </Secao>

          <Secao titulo="7. Segurança da informação">
            <p>
              São adotadas medidas técnicas e administrativas para proteger os
              dados pessoais contra acessos não autorizados e situações
              acidentais ou ilícitas de destruição, perda, alteração ou difusão.
              Nenhum sistema, entretanto, é totalmente imune a incidentes, e não
              é possível garantir segurança absoluta.
            </p>
          </Secao>

          <Secao titulo="8. Dados de saúde e sigilo profissional">
            <p>
              Informações clínicas e dados de saúde não são coletados por este
              site. Esses dados são tratados exclusivamente no âmbito do
              atendimento presencial no consultório e estão protegidos pelo
              sigilo profissional previsto no Código de Ética Odontológica e
              pelas regras aplicáveis a dados pessoais sensíveis na LGPD.
            </p>
          </Secao>

          <Secao titulo="9. Seus direitos como titular">
            <p>
              O art. 18 da LGPD garante a você, a qualquer momento e mediante
              requisição, os seguintes direitos:
            </p>
            <ul className="space-y-2 pt-1">
              <Item>
                Confirmação da existência de tratamento dos seus dados;
              </Item>
              <Item>Acesso aos dados tratados;</Item>
              <Item>
                Correção de dados incompletos, inexatos ou desatualizados;
              </Item>
              <Item>
                Anonimização, bloqueio ou eliminação de dados desnecessários,
                excessivos ou tratados em desconformidade com a lei;
              </Item>
              <Item>Portabilidade dos dados a outro fornecedor;</Item>
              <Item>
                Eliminação dos dados tratados com base no consentimento, salvo as
                hipóteses de conservação previstas em lei;
              </Item>
              <Item>
                Informação sobre as entidades com as quais os dados foram
                compartilhados;
              </Item>
              <Item>
                Informação sobre a possibilidade de não fornecer consentimento e
                as consequências dessa recusa;
              </Item>
              <Item>Revogação do consentimento.</Item>
            </ul>
            <p className="pt-1">
              Para exercer qualquer desses direitos, escreva para{" "}
              <Destaque>[E-MAIL DE CONTATO]</Destaque> informando o seu pedido. A
              solicitação será respondida nos prazos previstos na legislação.
              Poderá ser necessário confirmar a sua identidade antes do
              atendimento do pedido.
            </p>
          </Secao>

          <Secao titulo="10. Alterações desta política">
            <p>
              Esta política pode ser atualizada a qualquer momento, para refletir
              mudanças nas nossas práticas, nas ferramentas utilizadas ou na
              legislação aplicável. A data da última atualização é sempre
              indicada no topo desta página. Recomendamos a consulta periódica.
            </p>
          </Secao>

          <Secao titulo="11. Legislação aplicável">
            <p>
              Esta política é regida pela legislação brasileira, em especial pela
              Lei nº 13.709/2018 (LGPD) e pela Lei nº 12.965/2014 (Marco Civil da
              Internet).
            </p>
            <p className="pt-2">
              Veja também os{" "}
              <Link
                href="/termos-de-uso"
                className="text-[#a38344] font-medium hover:underline"
              >
                Termos de Uso
              </Link>{" "}
              deste site.
            </p>
          </Secao>
        </div>
      </Container>
    </div>
  );
}
