import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" });

export const metadata: Metadata = {
  title: "Reformas Costa Granada | Construcciones y Reformas en Motril",
  description:
    "Empresa de reformas y construcciones en Motril, Granada. Reformas integrales, cocinas, baños, pintura y más. Pide tu presupuesto gratis.",
  keywords:
    "reformas motril, construcciones motril, reformas integrales motril, empresa reformas granada, reformas baños motril, reforma cocina motril",
  openGraph: {
    title: "Reformas Costa Granada",
    description: "Tu empresa de reformas y construcciones en Motril, Granada",
    locale: "es_ES",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${inter.variable} ${montserrat.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
