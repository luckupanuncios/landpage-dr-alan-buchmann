export interface Treatment {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  badge?: string;
}

// DADOS TÉCNICOS DE TRATAMENTOS (Marcados para validação posterior do Dr. Alan)
export const TREATMENTS_DATA: Treatment[] = [
  {
    id: "lentes-facetas",
    title: "Lentes de Contato & Facetas",
    subtitle: "Estética dental de alta precisão",
    description:
      "Lâminas ultrafinas de cerâmica personalizadas para alinhar formato, cor e proporção dos dentes com naturalidade ímpar.",
    features: [
      "Planejamento digital do sorriso",
      "Mínimo desgastes e máxima preservação",
      "Alta durabilidade e brilho natural",
    ],
    badge: "Mais Procurado",
  },
  {
    id: "alinhadores-invisiveis",
    title: "Alinhadores Invisíveis",
    subtitle: "Ortodontia moderna e discreta",
    description:
      "Alinhamento dentário com placas transparentes feitas sob medida. Conforto e estética durante todo o tratamento sem braquetes metálicos.",
    features: [
      "Removíveis para comer e higienizar",
      "Praticamente invisíveis ao falar",
      "Previsibilidade de resultados",
    ],
  },
  {
    id: "implantes-reabilitacao",
    title: "Implantes & Reabilitação Oral",
    subtitle: "Saúde, mastigação e estética renovadas",
    description:
      "Substituição segura de dentes ausentes com pinos de titânio de última geração, devolvendo a função mastigatória e a harmonia facial.",
    features: [
      "Técnicas cirúrgicas guiadas e indolores",
      "Bio-integração de alta performance",
      "Próteses com acabamento hiper-realista",
    ],
  },
  {
    id: "clareamento-estetico",
    title: "Clareamento Odontológico",
    subtitle: "Brilho e luminosidade natural",
    description:
      "Protocolo de clareamento supervisionado para conquistar um sorriso radiante de forma segura, minimizando a sensibilidade dentária.",
    features: [
      "Técnicas combinadas em consultório e caseiro",
      "Proteção do esmalte e gengiva",
      "Resultados rápidos e duradouros",
    ],
  },
  {
    id: "restauracoes-esteticas",
    title: "Restaurações em Resina",
    subtitle: "Escultura e reconstrução pontual",
    description:
      "Reconstrução minuciosa de dentes fraturados ou desgastados com resinas compostas de alta resistência e mimetismo com o dente natural.",
    features: [
      "Procedimento realizado em sessão única",
      "Textura e estratificação anatômica",
      "Bio-compatibilidade total",
    ],
  },
  {
    id: "periodontia-prevencao",
    title: "Odontologia Preventiva & Saúde",
    subtitle: "Manutenção da saúde bucal",
    description:
      "Check-up preventivo completo, profilaxia de alta precisão e cuidados com a saúde gengival para garantir a longevidade dos seus dentes.",
    features: [
      "Remoção de tártaro e manchas",
      "Diagnóstico precoce de lesões",
      "Orientação personalizada de higiene",
    ],
  },
];
