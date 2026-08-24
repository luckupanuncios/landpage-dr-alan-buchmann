import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { FloatingWhatsApp } from "@/components/ui/floating-whatsapp";
import { GTM_ID } from "@/lib/analytics";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dralanbuchmann.com.br"),
  title: "Dr. Alan Buchmann | Odontologia Estética em Parobé",
  description:
    "Conheça o trabalho do Dr. Alan Buchmann em Parobé e agende sua avaliação odontológica. Atendimento personalizado, cuidado e atenção em cada detalhe.",
  keywords: [
    "Dr. Alan Buchmann",
    "Odontologia Estética Parobé",
    "Dentista Parobé RS",
    "Lentes de Contato Dental Parobé",
    "Facetas de Cerâmica",
    "Alinhadores Invisíveis Parobé",
    "Implantes Dentários Parobé",
    "Reabilitação Oral",
  ],
  authors: [{ name: "Dr. Alan Geison Buchmann Machado" }],
  creator: "Dr. Alan Buchmann",
  openGraph: {
    title: "Dr. Alan Buchmann | Odontologia Estética em Parobé",
    description:
      "Conheça o trabalho do Dr. Alan Buchmann em Parobé e agende sua avaliação odontológica. Atendimento personalizado, cuidado e atenção em cada detalhe.",
    url: "https://dralanbuchmann.com.br",
    siteName: "Dr. Alan Buchmann — Odontologia Estética",
    images: [
      {
        url: "/images/dr-alan/capa-facebook-dr-alan.png",
        width: 1200,
        height: 630,
        alt: "Dr. Alan Buchmann — Odontologia Estética em Parobé",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://dralanbuchmann.com.br",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: "Dr. Alan Buchmann — Odontologia Estética",
    description:
      "Atendimento odontológico de alto padrão em Parobé - RS. Lentes de contato, facetas, alinhadores invisíveis e reabilitação oral.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "R. Lotário Raimundo, 59 - Sl 02 - Centro",
      addressLocality: "Parobé",
      addressRegion: "RS",
      postalCode: "95630-000",
      addressCountry: "BR",
    },
    telephone: "+555197805053",
    url: "https://dralanbuchmann.com.br",
    hasMap: "https://maps.app.goo.gl/zvSyshBKMffJGThp6",
    priceRange: "$$$",
  };

  return (
    <html lang="pt-BR" className={`${cormorant.variable} ${inter.variable}`}>
      <head>
        {/* Schema.org JSON-LD para SEO Local */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* Google Tag Manager (Script Head) */}
        {GTM_ID && (
          <Script id="gtm-script" strategy="afterInteractive">
            {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GTM_ID}');`}
          </Script>
        )}
      </head>
      <body className="font-sans text-[#171717] bg-[#fafaf8] antialiased">
        {/* Google Tag Manager (Noscript Body) */}
        {GTM_ID && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
        )}

        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
