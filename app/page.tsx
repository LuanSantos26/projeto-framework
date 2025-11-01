// CORREÇÃO: Removidas as chaves {} para usar a exportação padrão (default)
import Header from "../components/Header";
import Hero from "../components/Hero";
import Services from "../components/Services";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

// Os componentes abaixo foram comentados porque os arquivos não foram encontrados.
// Se você os tiver, apenas descomente as linhas.
// import { Solutions } from "../components/Solutions";
// import { Features } from "../components/Features";
// import { Team } from "../components/Team";
// import { Testimonials } from "../components/Testimonials";
// import { CTA } from "../components/CTA";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        {/* <Solutions /> */}
        <Services />
        <About />
        {/* <Features /> */}
        {/* <Team /> */}
        {/* <Testimonials /> */}
        {/* <CTA /> */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
}