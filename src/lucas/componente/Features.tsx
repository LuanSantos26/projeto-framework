import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Badge } from "./ui/badge";

export function Features() {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 via-white to-indigo-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="order-2 md:order-1">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50JTIwdGVhbXxlbnwxfHx8fDE3NjA0MjMxNTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Equipe de desenvolvimento"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="space-y-6 order-1 md:order-2">
            <Badge variant="secondary" className="mb-2">Metodologias Avançadas</Badge>
            <h2>Análise Completa do Ecossistema de Software</h2>
            <p className="text-lg text-foreground/70">
              Nossa equipe de especialistas utiliza as metodologias mais modernas para 
              analisar cada aspecto do seu sistema, desde a arquitetura até a experiência do usuário.
            </p>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center flex-shrink-0">
                  1
                </div>
                <div>
                  <h4>Diagnóstico Profundo</h4>
                  <p className="text-foreground/70">Identificamos pontos críticos e oportunidades de melhoria</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center flex-shrink-0">
                  2
                </div>
                <div>
                  <h4>Plano Estratégico</h4>
                  <p className="text-foreground/70">Desenvolvemos roadmap personalizado para sua transformação</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center flex-shrink-0">
                  3
                </div>
                <div>
                  <h4>Implementação Guiada</h4>
                  <p className="text-foreground/70">Acompanhamento completo durante toda a jornada</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Badge variant="secondary" className="mb-2">Tecnologia de Ponta</Badge>
            <h2>Ferramentas Modernas para Análise Precisa</h2>
            <p className="text-lg text-foreground/70">
              Utilizamos as melhores ferramentas e frameworks do mercado para garantir 
              análises precisas e recomendações baseadas em dados concretos.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="text-3xl text-indigo-600 mb-2">98%</div>
                <div className="text-sm text-foreground/70">Taxa de Satisfação</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="text-3xl text-indigo-600 mb-2">40%</div>
                <div className="text-sm text-foreground/70">Redução de Custos</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="text-3xl text-indigo-600 mb-2">24/7</div>
                <div className="text-sm text-foreground/70">Suporte Disponível</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="text-3xl text-indigo-600 mb-2">500+</div>
                <div className="text-sm text-foreground/70">Projetos Entregues</div>
              </div>
            </div>
          </div>

          <div>
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1759661966728-4a02e3c6ed91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHlzaXMlMjBkYXNoYm9hcmR8ZW58MXx8fHwxNzYwNDAxMDg0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Dashboard de análise"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
