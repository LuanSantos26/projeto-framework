'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <nav className="navbar">
          <div className="logo">
            <Link href="/">
              <h2>Sitara</h2>
            </Link>
          </div>

          <button 
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
            <li><a href="#home" onClick={() => setMenuOpen(false)}>Início</a></li>
            <li><a href="#services" onClick={() => setMenuOpen(false)}>Serviços</a></li>
            <li><a href="#about" onClick={() => setMenuOpen(false)}>Sobre</a></li>
            <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contato</a></li>
          </ul>
        </nav>
      </div>

      <style jsx>{`
        .header {
          background: white;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
          position: sticky;
          top: 0;
          z-index: 1000;
          padding: 1rem 0;
        }

        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo h2 {
          color: var(--primary-color);
          margin: 0;
          font-size: 1.75rem;
        }

        .logo a {
          text-decoration: none;
        }

        .nav-menu {
          display: flex;
          list-style: none;
          gap: 2rem;
          align-items: center;
        }

        .nav-menu li a {
          color: var(--text-color);
          text-decoration: none;
          font-weight: 500;
          transition: color 0.3s ease;
        }

        .nav-menu li a:hover {
          color: var(--primary-color);
        }

        .menu-toggle {
          display: none;
          flex-direction: column;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0;
        }

        .menu-toggle span {
          width: 25px;
          height: 3px;
          background: var(--text-color);
          margin: 3px 0;
          transition: 0.3s;
        }

        @media (max-width: 768px) {
          .menu-toggle {
            display: flex;
          }

          .nav-menu {
            position: fixed;
            left: -100%;
            top: 70px;
            flex-direction: column;
            background-color: white;
            width: 100%;
            text-align: center;
            transition: 0.3s;
            box-shadow: 0 10px 27px rgba(0, 0, 0, 0.05);
            padding: 2rem 0;
            gap: 1rem;
          }

          .nav-menu.active {
            left: 0;
          }
        }
      `}</style>
    </header>
  );
}
