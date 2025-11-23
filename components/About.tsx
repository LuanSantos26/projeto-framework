import { motion } from 'motion/react';
import { Award, Users, Target, TrendingUp } from 'lucide-react';

export function About() {
  const stats = [
    { icon: Users, value: '500+', label: 'Clientes Atendidos' },
    { icon: Award, value: '10+', label: 'Anos de Experiência' },
    { icon: Target, value: '98%', label: 'Taxa de Sucesso' },
    { icon: TrendingUp, value: '1000+', label: 'Projetos Entregues' },
  ];

  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1576267423048-15c0040fec78?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMGJ1c2luZXNzfGVufDF8fHx8MTc2MjQxMTIxNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Equipe Sitara"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl -z-10" />
          </motion.div>

          {/* Right Content - Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl mb-6 text-gray-900">
              Sobre a Sitara
            </h2>

            <p className="text-xl text-gray-600 mb-6">
              Somos especialistas em transformar desafios tecnológicos em oportunidades de crescimento. 
              Com mais de uma década de experiência, ajudamos empresas a otimizar seus sistemas e 
              processos através de análises profundas e soluções inovadoras.
            </p>

            <p className="text-lg text-gray-600 mb-8">
              Nossa missão é fornecer insights valiosos que impulsionam a eficiência operacional, 
              reduzem custos e aumentam a competitividade no mercado. Combinamos expertise técnica 
              com visão estratégica para entregar resultados mensuráveis.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="p-6 bg-white rounded-xl shadow-sm"
                  >
                    <Icon className="w-8 h-8 text-blue-600 mb-3" />
                    <div className="text-3xl text-gray-900 mb-1">{stat.value}</div>
                    <div className="text-gray-600">{stat.label}</div>
                  </motion.div>
                );
              })}
            </div>

            <div className="mt-8">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block px-8 py-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
              >
                Trabalhe Conosco
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24"
        >
          <h3 className="text-3xl text-center mb-12 text-gray-900">
            Nossos Valores
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Excelência',
                description: 'Compromisso com a qualidade em cada projeto e entrega.',
              },
              {
                title: 'Inovação',
                description: 'Sempre buscando as melhores e mais modernas soluções.',
              },
              {
                title: 'Transparência',
                description: 'Comunicação clara e honesta em todas as etapas.',
              },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 bg-white rounded-2xl shadow-sm text-center"
              >
                <h4 className="text-2xl mb-4 text-gray-900">{value.title}</h4>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
