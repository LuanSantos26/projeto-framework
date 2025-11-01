/**
 * ⚠️ NOTA: Este arquivo não é mais usado no Next.js App Router
 * 
 * A página principal agora está em: /app/page.tsx
 * 
 * Este arquivo permanece aqui apenas para compatibilidade,
 * mas todo o conteúdo foi migrado para a estrutura Next.js.
 * 
 * Para desenvolvimento, use:
 * - npm run dev (inicia servidor Next.js)
 * - Edite /app/page.tsx para alterar a página inicial
 * 
 * Documentação:
 * - INICIO-RAPIDO.md - Como começar
 * - GUIA-NEXTJS.md - Guia completo
 */

import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Solutions } from "./components/Solutions";
import { Features } from "./components/Features";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";

// Este componente é mantido apenas para referência
// Use /app/page.tsx para desenvolvimento Next.js
export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Solutions />
        <Features />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
