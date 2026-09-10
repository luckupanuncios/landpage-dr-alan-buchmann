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
    title: "Dr. Alan Buchmann | Odontologia em Parobé - RS",
    description:
      "Agende sua avaliação pelo WhatsApp, acompanhe as redes sociais e veja como chegar ao consultório.",
    url: "/links",
    siteName: "Dr. Alan Buchmann — Odontologia em Parobé",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/images/dr-alan/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Dr. Alan Buchmann — Odontologia em Parobé - RS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Alan Buchmann | Odontologia em Parobé - RS",
    description:
      "Agende sua avaliação pelo WhatsApp, acompanhe as redes sociais e veja como chegar ao consultório.",
    images: ["/images/dr-alan/og-image.jpg"],
  },
};

export default function LinksPage() {
  return <LinksTree />;
}
