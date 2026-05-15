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

import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "El Chancho Gastrobar | Sabor Andino y Brasa en Vitoria-Gasteiz",
  description: "Descubre El Chancho en Vitoria: un gastrobar donde el fuego tiene alma. Sabores andinos, productos locales y brasas honestas en el corazón de la ciudad.",
  keywords: ["gastrobar vitoria", "restaurante vitoria-gasteiz", "cocina andina vitoria", "brasas vitoria", "comer en vitoria"],
  authors: [{ name: "El Chancho Gastrobar" }],
  openGraph: {
    title: "El Chancho Gastrobar | Sabor Andino y Brasa",
    description: "Sabor Andino y técnicas ancestrales en el corazón de Vitoria-Gasteiz. Una experiencia honesta alrededor de la brasa.",
    url: "https://elchanchogastrobar.com",
    siteName: "El Chancho Gastrobar",
    images: [
      {
        url: "https://elchanchogastrobar.com/assets/Foto-hero.webp",
        width: 1200,
        height: 630,
        alt: "El Chancho Gastrobar - Cocina con honestidad",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "El Chancho Gastrobar | Vitoria",
    description: "Brasas honestas y sabor andino en Vitoria-Gasteiz.",
    images: ["https://elchanchogastrobar.com/assets/Foto-hero.webp"],
  },
  icons: {
    icon: "/assets/Logo-Llama.svg",
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
      </body>
    </html>
  );
}
