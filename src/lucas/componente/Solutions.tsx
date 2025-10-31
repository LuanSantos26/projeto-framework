import { Card } from "./ui/card";
import { BarChart3, Code, Database, Layers, Settings, TrendingUp } from "lucide-react";

const solutions = [
  {
    icon: BarChart3,
    title: "Análise de Desempenho",
    description: "Monitore e otimize a performance de seus sistemas com métricas detalhadas e relatórios em tempo real.",
  },
  {
    icon: Code,
    title: "Revisão de Código",
    description: "Análise profunda da qualidade do código, identificando vulnerabilidades e oportunidades de melhoria.",
  },
  {
    icon: Database,
    title: "Arquitetura de Dados",
    description: "Modelagem e otimização de banco de dados para máxima eficiência e escalabilidade.",
  },
  {
    icon: Layers,
    title: "Integração de Sistemas",
    description: "Conecte e integre sistemas legados e modernos para criar um ecossistema tecnológico coeso.",
  },
  {
    icon: Settings,
    title: "Automação de Processos",
    description: "Identifique e automatize processos manuais para aumentar produtividade e reduzir erros.",
  },
  {
    icon: TrendingUp,
    title: "Consultoria Estratégica",
    description: "Orientação especializada para transformação digital e modernização de infraestrutura.",
  },
];

export function Solutions() {
  return (
    <section id="solucoes" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-4">Nossas Soluções</h2>
          <p className="text-lg text-foreground/70">
            Metodologias avançadas de análise de sistemas para empresas que buscam excelência tecnológica
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="mb-3">{solution.title}</h3>
                <p className="text-foreground/70">{solution.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
