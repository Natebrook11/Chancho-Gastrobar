import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

import { Analytics } from "@vercel/analytics/react";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "El Chancho Gastrobar | Fuego, Origen & Contraste en Vitoria-Gasteiz",
  description: "Descubre El Chancho Gastrobar en Vitoria-Gasteiz. Cocina honesta a la brasa, producto local y técnicas ancestrales. Reserva tu mesa para una experiencia gastronómica única.",
  keywords: ["Gastrobar Vitoria", "Restaurante Vitoria-Gasteiz", "Cocina a la brasa", "El Chancho", "Gastrobar Alava", "Mejores restaurantes Vitoria"],
  authors: [{ name: "El Chancho Gastrobar" }],
  metadataBase: new URL("https://elchanchogastrobar.com"),
  openGraph: {
    title: "El Chancho Gastrobar | Fuego, Origen & Contraste",
    description: "Cocina honesta a la brasa en el corazón de Vitoria. Producto local, técnicas globales y una honestidad brutal.",
    url: "https://elchanchogastrobar.com",
    siteName: "El Chancho Gastrobar",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "El Chancho Gastrobar - Vitoria-Gasteiz",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "El Chancho Gastrobar | Cocina a la Brasa",
    description: "Fuego, origen y contraste en Vitoria-Gasteiz.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/assets/Logo-Llama.svg",
  },
  alternates: {
    canonical: "https://elchanchogastrobar.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg-primary text-text-primary selection:bg-brand-gold selection:text-white">
        <JsonLd />
        <SmoothScroll>
          {children}
        </SmoothScroll>
        <Analytics />
      </body>
    </html>
  );
}
