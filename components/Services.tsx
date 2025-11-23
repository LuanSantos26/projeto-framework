import { motion } from 'motion/react';
import { BarChart3, Shield, Zap, Code, Database, Users } from 'lucide-react';
import { useState } from 'react';

const services = [
  {
    icon: BarChart3,
    title: 'Análise de Performance',
    description: 'Identificamos gargalos e otimizamos a performance dos seus sistemas para máxima eficiência.',
    color: 'blue',
    features: ['Monitoramento em tempo real', 'Relatórios detalhados', 'Otimização contínua'],
  },
  {
    icon: Shield,
    title: 'Auditoria de Segurança',
    description: 'Proteja seu negócio com auditorias completas de segurança e conformidade.',
    color: 'purple',
    features: ['Testes de penetração', 'Análise de vulnerabilidades', 'Compliance LGPD'],
  },
  {
    icon: Zap,
    title: 'Otimização de Processos',
    description: 'Automatize e otimize seus processos de negócio para aumentar a produtividade.',
    color: 'green',
    features: ['Automação inteligente', 'Fluxos otimizados', 'Redução de custos'],
  },
  {
    icon: Code,
    title: 'Revisão de Código',
    description: 'Análise profunda do código-fonte para garantir qualidade e manutenibilidade.',
    color: 'red',
    features: ['Code review especializado', 'Boas práticas', 'Refatoração orientada'],
  },
  {
    icon: Database,
    title: 'Arquitetura de Dados',
    description: 'Projete e otimize sua arquitetura de dados para escalabilidade e performance.',
    color: 'yellow',
    features: ['Modelagem de dados', 'Otimização de queries', 'Migração segura'],
  },
  {
    icon: Users,
    title: 'Consultoria Estratégica',
    description: 'Orientação especializada para transformação digital e inovação tecnológica.',
    color: 'pink',
    features: ['Planejamento estratégico', 'Roadmap tecnológico', 'Gestão de mudanças'],
  },
];

const colorClasses = {
  blue: {
    bg: 'bg-blue-100',
    text: 'text-blue-600',
    border: 'border-blue-200',
    hover: 'hover:border-blue-400',
  },
  purple: {
    bg: 'bg-purple-100',
    text: 'text-purple-600',
    border: 'border-purple-200',
    hover: 'hover:border-purple-400',
  },
  green: {
    bg: 'bg-green-100',
    text: 'text-green-600',
    border: 'border-green-200',
    hover: 'hover:border-green-400',
  },
  red: {
    bg: 'bg-red-100',
    text: 'text-red-600',
    border: 'border-red-200',
    hover: 'hover:border-red-400',
  },
  yellow: {
    bg: 'bg-yellow-100',
    text: 'text-yellow-600',
    border: 'border-yellow-200',
    hover: 'hover:border-yellow-400',
  },
  pink: {
    bg: 'bg-pink-100',
    text: 'text-pink-600',
    border: 'border-pink-200',
    hover: 'hover:border-pink-400',
  },
};

export function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 text-gray-900">
            Nossas Soluções
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferecemos uma gama completa de serviços especializados em análise de sistemas, 
            desenvolvidos para impulsionar o sucesso da sua empresa.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const colors = colorClasses[service.color as keyof typeof colorClasses];
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <motion.div
                  whileHover={{ y: -5 }}
                  className={`h-full p-8 bg-white rounded-2xl border-2 ${colors.border} ${colors.hover} transition-all duration-300 cursor-pointer`}
                >
                  <div className={`inline-flex p-4 ${colors.bg} rounded-xl mb-6`}>
                    <Icon className={`w-8 h-8 ${colors.text}`} />
                  </div>

                  <h3 className="text-2xl mb-4 text-gray-900">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 mb-6">
                    {service.description}
                  </p>

                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: hoveredIndex === index ? 'auto' : 0,
                      opacity: hoveredIndex === index ? 1 : 0,
                    }}
                    className="overflow-hidden"
                  >
                    <ul className="space-y-2 mb-4">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-gray-700">
                          <span className={`w-1.5 h-1.5 ${colors.bg} rounded-full`} />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </motion.div>

                  <button className={`${colors.text} hover:underline inline-flex items-center gap-2`}>
                    Saiba mais →
                  </button>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-block p-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl text-white">
            <h3 className="text-3xl mb-4">
              Não encontrou o que procurava?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl">
              Desenvolvemos soluções personalizadas para atender às necessidades específicas da sua empresa.
            </p>
            <a
              href="#contact"
              className="inline-block px-8 py-3 bg-white text-blue-600 rounded-full hover:bg-blue-50 transition-colors"
            >
              Fale com um Especialista
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
