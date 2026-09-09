import type { Metadata } from "next";
import { LinksTree } from "@/components/sections/links-tree";

export const metadata: Metadata = {
  title: "Links | Dr. Alan Buchmann — Odontologia em Parobé - RS",
  description:
    "Agende sua avaliação pelo WhatsApp, acompanhe o trabalho do Dr. Alan Buchmann nas redes sociais e veja como chegar ao consultório em Parobé - RS.",
  alternates: {
    canonical: "/links",
  },
  openGraph: {
    title: "Links | Dr. Alan Buchmann",
    description:
      "Agendamento, redes sociais e localização do consultório do Dr. Alan Buchmann em Parobé - RS.",
    url: "/links",
    type: "website",
  },
};

export default function LinksPage() {
  return <LinksTree />;
}
