import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Users, Award, Target, TrendingUp } from "lucide-react";
import teamImage from "@/assets/team-celebration.jpg";

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({
    clients: 0,
    years: 0,
    success: 0,
    projects: 0,
  });
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Start counter animation
          animateCounters();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const animateCounters = () => {
    const duration = 2000;
    const targets = { clients: 500, years: 10, success: 98, projects: 1000 };
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic

      setCounters({
        clients: Math.floor(targets.clients * eased),
        years: Math.floor(targets.years * eased),
        success: Math.floor(targets.success * eased),
        projects: Math.floor(targets.projects * eased),
      });

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  };

  const stats = [
    {
      icon: <Users className="w-6 h-6" />,
      value: `${counters.clients}+`,
      label: "Clientes Atendidos",
    },
    {
      icon: <Award className="w-6 h-6" />,
      value: `${counters.years}+`,
      label: "Anos de Experiência",
    },
    {
      icon: <Target className="w-6 h-6" />,
      value: `${counters.success}%`,
      label: "Taxa de Sucesso",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      value: `${counters.projects}+`,
      label: "Projetos Entregues",
    },
  ];

  return (
    <section
      id="sobre"
      ref={sectionRef}
      className="py-20 lg:py-32 bg-secondary/30"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div
            className={`relative transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src={teamImage}
                alt="Equipe Sitara celebrando"
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -z-10 -bottom-4 -left-4 w-full h-full bg-gradient-to-tr from-primary/20 to-accent/20 rounded-2xl" />
          </div>

          {/* Content */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Sobre a Sitara
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Somos especialistas em transformar desafios tecnológicos em
              oportunidades de crescimento. Com mais de uma década de
              experiência, ajudamos empresas a otimizar seus sistemas e
              processos através de análises profundas e soluções inovadoras.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Nossa missão é fornecer insights valiosos que impulsionam a
              eficiência operacional, reduzem custos e aumentam a
              competitividade no mercado. Combinamos expertise técnica com visão
              estratégica para entregar resultados mensuráveis.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="p-4 bg-card rounded-xl border border-border"
                  style={{
                    transitionDelay: `${index * 100 + 400}ms`,
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? "translateY(0)" : "translateY(20px)",
                    transition: "all 0.5s ease-out",
                  }}
                >
                  <div className="text-primary mb-2">{stat.icon}</div>
                  <p className="text-2xl md:text-3xl font-bold text-foreground">
                    {stat.value}
                  </p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>

            <Button
              size="lg"
              className="gradient-bg hover:opacity-90 transition-opacity"
            >
              Trabalhe Conosco
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
