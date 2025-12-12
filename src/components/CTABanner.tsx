import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";

const CTABanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const scrollToContact = () => {
    const element = document.querySelector("#contato");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section ref={sectionRef} className="py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div
          className={`gradient-bg rounded-2xl p-8 md:p-12 lg:p-16 text-center transition-all duration-700 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">
            Não encontrou o que procurava?
          </h2>
          <p className="text-primary-foreground/90 max-w-2xl mx-auto mb-8 text-lg">
            Desenvolvemos soluções personalizadas para atender às necessidades
            específicas da sua empresa.
          </p>
          <Button
            onClick={scrollToContact}
            size="lg"
            variant="secondary"
            className="bg-background text-primary hover:bg-background/90 font-semibold"
          >
            Fale com um Especialista
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
