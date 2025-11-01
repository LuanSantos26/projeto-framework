export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2>Sobre a Sitara</h2>
            <p>
              A Sitara é referência em análise de sistemas de software, oferecendo soluções 
              especializadas para empresas que buscam excelência tecnológica e inovação contínua.
            </p>
            <p>
              Com anos de experiência no mercado, nossa equipe de especialistas combina 
              conhecimento técnico profundo com visão estratégica de negócios para entregar 
              resultados mensuráveis e sustentáveis.
            </p>

            <div className="stats">
              <div className="stat-item">
                <h3>15+</h3>
                <p>Anos de Experiência</p>
              </div>
              <div className="stat-item">
                <h3>500+</h3>
                <p>Projetos Entregues</p>
              </div>
              <div className="stat-item">
                <h3>98%</h3>
                <p>Clientes Satisfeitos</p>
              </div>
            </div>
          </div>

          <div className="about-image">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop" 
              alt="Equipe Sitara"
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        .about {
          background: white;
        }

        .about-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        .about-text h2 {
          color: var(--text-color);
          margin-bottom: 1.5rem;
        }

        .about-text p {
          color: var(--text-light);
          margin-bottom: 1.5rem;
          font-size: 1.125rem;
          line-height: 1.8;
        }

        .stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          margin-top: 2rem;
        }

        .stat-item {
          text-align: center;
          padding: 1.5rem;
          background: var(--bg-gray);
          border-radius: 12px;
        }

        .stat-item h3 {
          color: var(--primary-color);
          font-size: 2rem;
          margin-bottom: 0.5rem;
        }

        .stat-item p {
          color: var(--text-light);
          font-size: 0.875rem;
          margin: 0;
        }

        .about-image img {
          width: 100%;
          height: auto;
          border-radius: 12px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }

        @media (max-width: 768px) {
          .about-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .stats {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
