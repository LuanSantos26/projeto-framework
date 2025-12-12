import { Button } from "@/components/ui/button";
import { ArrowRight, Play, CheckCircle } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import heroImage from "@/assets/hero-office.jpg";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    { value: "500+", label: "Projetos" },
    { value: "98%", label: "Satisfação" },
    { value: "24/7", label: "Suporte" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="inicio"
      ref={sectionRef}
      className="min-h-screen pt-20 flex items-center bg-background relative overflow-hidden"
    >
      {/* Background gradient decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-accent/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div
            className={`space-y-8 transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <span className="text-lg">✨</span>
              <span className="text-sm font-medium text-primary">
                Soluções Inteligentes para sua Empresa
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Análise de
              <br />
              Sistemas{" "}
              <span className="gradient-text">de Software</span>
            </h1>

            {/* Description */}
            <p className="text-lg text-muted-foreground max-w-lg">
              Transforme seus processos com nossa expertise em análise e
              otimização de sistemas. Oferecemos soluções personalizadas que
              elevam sua empresa ao próximo nível.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button
                onClick={() => scrollToSection("#servicos")}
                size="lg"
                className="gradient-bg hover:opacity-90 transition-all group"
              >
                Conheça Nossas Soluções
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="group hover:bg-secondary"
              >
                <Play className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                Assistir Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={`transition-all duration-700 delay-${index * 100}`}
                  style={{
                    transitionDelay: `${index * 150 + 300}ms`,
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? "translateY(0)" : "translateY(20px)",
                  }}
                >
                  <p className="text-2xl md:text-3xl font-bold gradient-text">
                    {stat.value}
                  </p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div
            className={`relative transition-all duration-700 delay-300 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={heroImage}
                alt="Escritório moderno Sitara"
                className="w-full h-auto object-cover"
              />

              {/* Floating Card */}
              <div className="absolute bottom-6 left-6 right-6 bg-background/95 backdrop-blur-sm rounded-xl p-4 shadow-lg animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">
                      Sistema Otimizado
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Performance aumentada em 85%
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -z-10 -top-4 -right-4 w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
