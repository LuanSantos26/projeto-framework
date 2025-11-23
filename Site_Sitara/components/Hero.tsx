import { motion } from 'motion/react';
import { ArrowRight, Play } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 -z-10" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-20 right-20 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute bottom-20 left-20 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full mb-6"
            >
              ✨ Soluções Inteligentes para sua Empresa
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl mb-6 text-gray-900">
              Análise de Sistemas{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                de Software
              </span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 max-w-2xl">
              Transforme seus processos com nossa expertise em análise e otimização de sistemas. 
              Oferecemos soluções personalizadas que elevam sua empresa ao próximo nível.
            </p>

            <div className="flex flex-wrap gap-4">
              <motion.a
                href="#services"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
              >
                Conheça Nossas Soluções
                <ArrowRight className="w-5 h-5" />
              </motion.a>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-900 rounded-full border-2 border-gray-200 hover:border-blue-600 transition-colors"
              >
                <Play className="w-5 h-5" />
                Assistir Demo
              </motion.button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12">
              {[
                { value: '500+', label: 'Projetos' },
                { value: '98%', label: 'Satisfação' },
                { value: '24/7', label: 'Suporte' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  <div className="text-3xl text-blue-600">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1646153114001-495dfb56506d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2MjQxNzQwNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Tecnologia Moderna"
                className="w-full h-full object-cover"
              />
              
              {/* Floating Card */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-2xl">✓</span>
                  </div>
                  <div>
                    <div className="text-gray-900">Sistema Otimizado</div>
                    <div className="text-sm text-gray-600">Performance aumentada em 85%</div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-purple-500 rounded-full blur-2xl opacity-50" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-500 rounded-full blur-2xl opacity-50" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
