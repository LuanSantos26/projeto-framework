export default function Services() {
  const services = [
    {
      title: "Análise de Desempenho",
      description: "Monitore e otimize a performance de seus sistemas com métricas detalhadas e relatórios em tempo real.",
      icon: "📊"
    },
    {
      title: "Revisão de Código",
      description: "Análise profunda da qualidade do código, identificando vulnerabilidades e oportunidades de melhoria.",
      icon: "💻"
    },
    {
      title: "Arquitetura de Dados",
      description: "Modelagem e otimização de banco de dados para máxima eficiência e escalabilidade.",
      icon: "🗄️"
    },
    {
      title: "Integração de Sistemas",
      description: "Conecte e integre sistemas legados e modernos para criar um ecossistema tecnológico coeso.",
      icon: "🔗"
    },
    {
      title: "Automação de Processos",
      description: "Identifique e automatize processos manuais para aumentar produtividade e reduzir erros.",
      icon: "⚙️"
    },
    {
      title: "Consultoria Estratégica",
      description: "Orientação especializada para transformação digital e modernização de infraestrutura.",
      icon: "🎯"
    }
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-title">
          <h2>Nossos Serviços</h2>
          <p>Metodologias avançadas de análise de sistemas para empresas que buscam excelência tecnológica</p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .services {
          background-color: var(--bg-gray);
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .service-card {
          text-align: center;
          background: white;
        }

        .service-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
        }

        .service-card h3 {
          color: var(--text-color);
          margin-bottom: 1rem;
        }

        .service-card p {
          color: var(--text-light);
          line-height: 1.6;
        }

        @media (max-width: 768px) {
          .services-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
