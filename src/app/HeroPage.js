// src/pages/HeroPage.js
import React from 'react';
import StyledHero from '../components/StyledHero';
import { CheckCircle, ArrowRight } from '@lucide/react';

function HeroPage() {
  return (
    <StyledHero>
      <div className="container hero-grid">
        <div className="hero-content">
          <h1>Transforme sua presença digital</h1>
          <p className="hero-description">
            Soluções modernas para impulsionar seu negócio online com design e tecnologia de ponta.
          </p>

          <div className="hero-features">
            <div className="hero-feature">
              <CheckCircle color="#4f46e5" />
              <span>Design responsivo e elegante</span>
            </div>
            <div className="hero-feature">
              <CheckCircle color="#4f46e5" />
              <span>Integração com ferramentas modernas</span>
            </div>
            <div className="hero-feature">
              <CheckCircle color="#4f46e5" />
              <span>Performance otimizada</span>
            </div>
          </div>

          <button className="btn btn-primary" style={{ marginTop: '2rem' }}>
            Começar Agora <ArrowRight />
          </button>
        </div>
      </div>
    </StyledHero>
  );
}

export default HeroPage;