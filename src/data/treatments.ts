export interface Treatment {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  badge?: string;
}

// Tratamentos confirmados pelo Dr. Alan Buchmann (clínico geral).
// Não incluir procedimentos fora desta lista sem confirmação prévia.
export const TREATMENTS_DATA: Treatment[] = [
  {
    id: "limpeza-prevencao",
    title: "Limpeza e Prevenção",
    subtitle: "Profilaxia e saúde bucal",
    description:
      "Limpeza profissional e orientação preventiva para manter a saúde dos dentes e da gengiva ao longo do tempo.",
    features: [
      "Remoção de placa e tártaro",
      "Orientação de higiene personalizada",
      "Acompanhamento periódico",
    ],
  },
  {
    id: "restauracoes",
    title: "Restaurações Dentárias",
    subtitle: "Recuperação da forma e da função",
    description:
      "Tratamento de cáries e reconstrução de dentes fraturados ou desgastados, devolvendo função e aparência natural.",
    features: [
      "Avaliação individual de cada caso",
      "Materiais restauradores adequados ao dente",
    ],
  },
  {
    id: "resina-direta",
    title: "Resina Direta em Consultório",
    subtitle: "Restauração em sessão única",
    description:
      "Restauração em resina composta modelada diretamente na boca, concluída na própria consulta quando o caso permite.",
    features: [
      "Realizada em uma única sessão",
      "Escultura e acabamento em consultório",
    ],
  },
  {
    id: "resina-laboratorio",
    title: "Resina Confeccionada em Laboratório",
    subtitle: "Peças produzidas sob medida",
    description:
      "Peças em resina produzidas em laboratório a partir de moldagem, indicadas para casos que exigem maior controle de forma e acabamento.",
    features: [
      "Confecção laboratorial personalizada",
      "Indicada conforme avaliação clínica",
    ],
  },
  {
    id: "facetas-resina",
    title: "Facetas Estéticas em Resina",
    subtitle: "Ajuste de forma e cor",
    description:
      "Aplicação de resina na face visível dos dentes para corrigir forma, cor ou pequenas irregularidades.",
    features: [
      "Planejamento do sorriso com mock-up, quando indicado",
      "Abordagem conservadora quando indicada",
    ],
  },
  {
    id: "facetas-lentes-ceramica",
    title: "Facetas e Lentes de Contato em Cerâmica",
    subtitle: "Laminados cerâmicos personalizados",
    description:
      "Laminados de cerâmica confeccionados sob medida para ajustar formato, cor e proporção dos dentes.",
    features: [
      "Planejamento do sorriso com mock-up, quando indicado",
      "Trabalho conduzido com auxílio de lupa",
      "Cerâmica personalizada para cada paciente",
    ],
  },
  {
    id: "clareamento",
    title: "Clareamento Dental",
    subtitle: "Clareamento supervisionado",
    description:
      "Protocolo de clareamento acompanhado pelo dentista, com avaliação prévia das condições dos dentes e da gengiva.",
    features: [
      "Avaliação prévia de cada caso",
      "Acompanhamento durante o tratamento",
    ],
  },
  {
    id: "tratamento-canal",
    title: "Tratamento de Canal",
    subtitle: "Endodontia",
    description:
      "Tratamento endodôntico para dentes com comprometimento da polpa, com o objetivo de preservar o dente na boca.",
    features: [
      "Diagnóstico clínico e radiográfico",
      "Preservação do dente sempre que possível",
    ],
  },
  {
    id: "coroas",
    title: "Coroas Dentárias",
    subtitle: "Proteção e reconstrução",
    description:
      "Coroas que recobrem o dente comprometido, devolvendo forma, resistência e função mastigatória.",
    features: [
      "Indicação definida em avaliação clínica",
      "Ajuste individualizado da peça",
    ],
  },
  {
    id: "proteses",
    title: "Próteses Dentárias",
    subtitle: "Reposição de dentes ausentes",
    description:
      "Próteses planejadas conforme o caso de cada paciente para repor dentes ausentes e restabelecer a mastigação.",
    features: [
      "Planejamento individualizado",
      "Ajustes e acompanhamento após a instalação",
    ],
  },
  {
    id: "extracoes",
    title: "Extrações Dentárias",
    subtitle: "Procedimento cirúrgico",
    description:
      "Remoção de dentes quando há indicação clínica, com orientação completa sobre o pós-operatório.",
    features: [
      "Indicação avaliada caso a caso",
      "Orientações de cuidado após o procedimento",
    ],
  },
  {
    id: "reabilitacao-oral",
    title: "Reabilitação Oral",
    subtitle: "Tratamento integrado",
    description:
      "Planejamento que reúne diferentes procedimentos para restabelecer função, saúde e aparência do sorriso como um conjunto.",
    features: [
      "Avaliação completa antes de iniciar",
      "Etapas definidas junto com o paciente",
    ],
  },
];
