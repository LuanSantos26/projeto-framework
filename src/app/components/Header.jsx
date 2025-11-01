// src/app/components/Header.jsx
export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <div className="brand">PROJETO FRAMEWORK</div>

        <nav className="nav" aria-label="Menu principal">
          <a href="#features">Recursos</a>
          <a href="#about" style={{ marginLeft: 16 }}>Sobre</a>
          <a href="#contact" style={{ marginLeft: 16 }}>Contato</a>
        </nav>
      </div>
    </header>
  );
}