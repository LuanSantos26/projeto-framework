import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve.",
    });

    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "contato@sitara.com.br",
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Telefone",
      value: "+55 (11) 9999-9999",
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Endereço",
      value: "São Paulo - SP, Brasil",
    },
  ];

  return (
    <section
      id="contato"
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Entre em Contato
          </h2>
          <p className="text-lg text-primary">
            Pronto para transformar seus sistemas? Nossa equipe está aqui para
            ajudar.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left - Contact Info */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <h3 className="text-2xl font-bold mb-4">Fale com Nossa Equipe</h3>
            <p className="text-muted-foreground mb-8">
              Estamos prontos para discutir seu projeto e encontrar a melhor
              solução para suas necessidades. Entre em contato através de
              qualquer um dos canais abaixo.
            </p>

            {/* Contact Cards */}
            <div className="space-y-4 mb-8">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border card-hover"
                  style={{
                    transitionDelay: `${index * 100 + 300}ms`,
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? "translateX(0)" : "translateX(-20px)",
                    transition: "all 0.5s ease-out",
                  }}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    {info.icon}
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{info.label}</p>
                    <p className="text-muted-foreground">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* 24/7 Support Card */}
            <div
              className="gradient-bg rounded-xl p-6 text-primary-foreground"
              style={{
                transitionDelay: "600ms",
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(20px)",
                transition: "all 0.6s ease-out",
              }}
            >
              <div className="flex items-center gap-3 mb-2">
                <Clock className="w-6 h-6" />
                <h4 className="text-xl font-bold">Atendimento 24/7</h4>
              </div>
              <p className="text-primary-foreground/90">
                Nossa equipe de suporte está disponível a qualquer momento para
                ajudá-lo.
              </p>
            </div>
          </div>

          {/* Right - Contact Form */}
          <div
            className={`transition-all duration-700 delay-400 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Nome Completo <span className="text-destructive">*</span>
                </label>
                <Input
                  type="text"
                  placeholder="Seu nome"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  className="bg-card"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Email <span className="text-destructive">*</span>
                </label>
                <Input
                  type="email"
                  placeholder="seu@email.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  className="bg-card"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Telefone
                </label>
                <Input
                  type="tel"
                  placeholder="(11) 99999-9999"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="bg-card"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Empresa
                </label>
                <Input
                  type="text"
                  placeholder="Nome da sua empresa"
                  value={formData.company}
                  onChange={(e) =>
                    setFormData({ ...formData, company: e.target.value })
                  }
                  className="bg-card"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Mensagem <span className="text-destructive">*</span>
                </label>
                <Textarea
                  placeholder="Conte-nos sobre seu projeto..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                  rows={5}
                  className="bg-card resize-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full gradient-bg hover:opacity-90 transition-opacity"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Enviando..."
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Enviar Mensagem
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
