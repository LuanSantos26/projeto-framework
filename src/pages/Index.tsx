import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import CTABanner from "@/components/CTABanner";
import AboutSection from "@/components/AboutSection";
import ValuesSection from "@/components/ValuesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ChatButton from "@/components/ChatButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <CTABanner />
        <AboutSection />
        <ValuesSection />
        <ContactSection />
      </main>
      <Footer />
      <ChatButton />
    </div>
  );
};

export default Index;
