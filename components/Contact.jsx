'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Mensagem enviada! Entraremos em contato em breve.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-title">
          <h2>Entre em Contato</h2>
          <p>Estamos prontos para ajudar sua empresa a alcançar novos patamares de excelência tecnológica</p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-item">
              <h3>📧 E-mail</h3>
              <p>contato@sitara.com.br</p>
              <p>comercial@sitara.com.br</p>
            </div>

            <div className="info-item">
              <h3>📞 Telefone</h3>
              <p>(11) 3000-0000</p>
              <p>(11) 98000-0000</p>
            </div>

            <div className="info-item">
              <h3>📍 Endereço</h3>
              <p>Av. Paulista, 1000</p>
              <p>São Paulo - SP</p>
              <p>CEP: 01310-100</p>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Nome</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Mensagem</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary">
              Enviar Mensagem
            </button>
          </form>
        </div>
      </div>

      <style jsx>{`
        .contact {
          background: var(--bg-gray);
        }

        .contact-content {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 3rem;
        }

        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .info-item {
          background: white;
          padding: 1.5rem;
          border-radius: 12px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
        }

        .info-item h3 {
          color: var(--text-color);
          margin-bottom: 1rem;
          font-size: 1.25rem;
        }

        .info-item p {
          color: var(--text-light);
          margin: 0.25rem 0;
        }

        .contact-form {
          background: white;
          padding: 2rem;
          border-radius: 12px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
        }

        .form-group {
          margin-bottom: 1.5rem;
        }

        .form-group label {
          display: block;
          margin-bottom: 0.5rem;
          color: var(--text-color);
          font-weight: 500;
        }

        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 12px;
          border: 2px solid var(--border-color);
          border-radius: 8px;
          font-size: 1rem;
          font-family: inherit;
          transition: border-color 0.3s ease;
        }

        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: var(--primary-color);
        }

        .contact-form button {
          width: 100%;
        }

        @media (max-width: 768px) {
          .contact-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }
      `}</style>
    </section>
  );
}
