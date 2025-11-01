import type { Metadata } from "next";
import "../globals.css";
// CORREÇÃO: Usando o atalho "@/" para consistência
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: "Sitara - Soluções de Análise de Sistemas",
  description:
    "Transforme seus processos com metodologias avançadas de análise de software. Otimize operações, reduza custos e aumente a eficiência com a Sitara.",
  keywords: [
    "análise de sistemas",
    "análise de software",
    "consultoria tecnológica",
    "revisão de código",
    "arquitetura de dados",
    "integração de sistemas",
  ],
  authors: [{ name: "Sitara" }],
  openGraph: {
    title: "Sitara - Soluções de Análise de Sistemas",
    description:
      "Soluções empresariais de análise de sistemas para empresas que buscam excelência tecnológica",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}