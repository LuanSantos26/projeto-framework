export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <h1>Soluções de Análise de Sistemas para Empresas</h1>
          <p className="hero-description">
            Transforme seus processos com metodologias avançadas de análise de software. 
            Otimize operações, reduza custos e aumente a eficiência com a Sitara.
          </p>
          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary">
              Agendar Demonstração
            </a>
            <a href="#about" className="btn btn-secondary">
              Saiba Mais
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 100px 0;
          text-align: center;
        }

        .hero-content {
          max-width: 800px;
          margin: 0 auto;
        }

        .hero h1 {
          color: white;
          font-size: 3rem;
          margin-bottom: 1.5rem;
          line-height: 1.2;
        }

        .hero-description {
          color: rgba(255, 255, 255, 0.95);
          font-size: 1.25rem;
          margin-bottom: 2rem;
          line-height: 1.6;
        }

        .hero-buttons {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .hero-buttons .btn-secondary {
          background-color: white;
          color: var(--primary-color);
          border: none;
        }

        .hero-buttons .btn-secondary:hover {
          background-color: rgba(255, 255, 255, 0.9);
        }

        @media (max-width: 768px) {
          .hero {
            padding: 80px 0;
          }

          .hero h1 {
            font-size: 2rem;
          }

          .hero-description {
            font-size: 1.125rem;
          }

          .hero-buttons {
            flex-direction: column;
            align-items: center;
          }

          .hero-buttons .btn {
            width: 100%;
            max-width: 300px;
          }
        }
      `}</style>
    </section>
  );
}
