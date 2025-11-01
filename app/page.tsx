import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { Solutions } from "../components/Solutions";
import { Services } from "../components/Services";
import { About } from "../components/About";
import { Features } from "../components/Features";
import { Team } from "../components/Team";
import { Testimonials } from "../components/Testimonials";
import { CTA } from "../components/CTA";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Solutions />
        <Services />
        <About />
        <Features />
        <Team />
        <Testimonials />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
