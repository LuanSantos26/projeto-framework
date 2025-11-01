// CORREÇÃO: Caminhos atualizados para "../src/components/"
import Header from "../src/components/Header";
import Hero from "../src/components/Hero";
import Services from "../src/components/Services";
import About from "../src/components/About";
import Contact from "../src/components/Contact";
import Footer from "../src/components/Footer";

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