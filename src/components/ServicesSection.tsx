import { useEffect, useRef, useState } from "react";
import {
  BarChart3,
  Shield,
  Zap,
  Code,
  Database,
  Users,
  ArrowRight,
} from "lucide-react";

interface Service {
  icon: React.ReactNode;
  iconBg: string;
  title: string;
  description: string;
  features?: string[];
}

const ServicesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const services: Service[] = [
    {
      icon: <BarChart3 className="w-6 h-6" />,
      iconBg: "icon-bg-blue",
      title: "Análise de Performance",
      description:
        "Identificamos gargalos e otimizamos a performance dos seus sistemas para máxima eficiência.",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      iconBg: "icon-bg-purple",
      title: "Auditoria de Segurança",
      description:
        "Proteja seu negócio com auditorias completas de segurança e conformidade.",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      iconBg: "icon-bg-green",
      title: "Otimização de Processos",
      description:
        "Automatize e otimize seus processos de negócio para aumentar a produtividade.",
    },
    {
      icon: <Code className="w-6 h-6" />,
      iconBg: "icon-bg-red",
      title: "Revisão de Código",
      description:
        "Análise profunda do código-fonte para garantir qualidade e manutenibilidade.",
    },
    {
      icon: <Database className="w-6 h-6" />,
      iconBg: "icon-bg-yellow",
      title: "Arquitetura de Dados",
      description:
        "Projete e otimize sua arquitetura de dados para escalabilidade e performance.",
    },
    {
      icon: <Users className="w-6 h-6" />,
      iconBg: "icon-bg-pink",
      title: "Consultoria Estratégica",
      description:
        "Orientação especializada para transformação digital e inovação tecnológica.",
      features: [
        "Planejamento estratégico",
        "Roadmap tecnológico",
        "Gestão de mudanças",
      ],
    },
  ];

  return (
    <section
      id="servicos"
      ref={sectionRef}
      className="py-20 lg:py-32 bg-background"
    >
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Nossas Soluções
          </h2>
          <p className="text-lg text-muted-foreground">
            Oferecemos uma gama completa de serviços especializados em análise
            de sistemas, desenvolvidos para impulsionar o sucesso da sua
            empresa.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group p-6 bg-card rounded-xl border border-border card-hover cursor-pointer transition-all duration-500`}
              style={{
                transitionDelay: `${index * 100}ms`,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(30px)",
              }}
            >
              {/* Icon */}
              <div
                className={`w-12 h-12 rounded-xl ${service.iconBg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
              >
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-4">{service.description}</p>

              {/* Features list (for consultoria) */}
              {service.features && (
                <ul className="space-y-2 mb-4">
                  {service.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              )}

              {/* Link */}
              <a
                href="#"
                className="inline-flex items-center text-primary font-medium group-hover:gap-2 transition-all"
              >
                Saiba mais
                <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
