import { useEffect, useRef, useState } from "react";
import { Award, Lightbulb, Eye } from "lucide-react";

const ValuesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const values = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Excelência",
      description: "Compromisso com a qualidade em cada projeto e entrega.",
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Inovação",
      description: "Sempre buscando as melhores e mais modernas soluções.",
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Transparência",
      description: "Comunicação clara e honesta em todas as etapas.",
    },
  ];

  return (
    <section ref={sectionRef} className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Nossos Valores
          </h2>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {values.map((value, index) => (
            <div
              key={index}
              className="p-8 bg-card rounded-xl border border-border text-center card-hover"
              style={{
                transitionDelay: `${index * 150}ms`,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(30px)",
                transition: "all 0.6s ease-out",
              }}
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                {value.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                {value.title}
              </h3>
              <p className="text-muted-foreground">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
