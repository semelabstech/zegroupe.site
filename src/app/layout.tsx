import type { Metadata } from "next";
import { Inter, Playfair_Display, Noto_Kufi_Arabic } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const notoKufi = Noto_Kufi_Arabic({
  variable: "--font-arabic",
  subsets: ["arabic"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "ZEG | Zaytunat Essaadaoui Group",
  description:
    "LE MARKETING SANS STRATÉGIE N'EST QUE DU BRUIT. Architecture de Marque • Stratégie • Technologie.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${inter.variable} ${playfair.variable} ${notoKufi.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-transparent text-foreground relative z-0">
        {children}
      </body>
    </html>
  );
}
