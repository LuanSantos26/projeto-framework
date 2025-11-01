import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Menu, X } from '@lucide/react';

const StyledHeader = styled.header`
  border-bottom: 1px solid var(--color-border);
  background-color: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  position: sticky;
  top: 0;
  z-index: 50;
`;

const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0;
`;

const Logo = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.25rem;
  font-weight: var(--font-weight-semibold);
  letter-spacing: -0.025em;
  color: var(--color-foreground);
`;

const NavDesktop = styled.nav`
  display: none;
  gap: 2rem;

  a {
    color: var(--color-foreground-muted);
    transition: color 0.2s;
    font-weight: var(--font-weight-medium);
  }

  a:hover {
    color: var(--color-foreground);
  }

  @media (min-width: 768px) {
    display: flex;
  }
`;

const NavActions = styled.div`
  display: none;
  gap: 1rem;

  @media (min-width: 768px) {
    display: flex;
  }
`;

const MenuToggle = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  color: var(--color-foreground);

  svg {
    width: 24px;
    height: 24px;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

const MobileMenu = styled.div`
  display: ${({ isActive }) => (isActive ? 'block' : 'none')};
  background-color: white;
  border-top: 1px solid var(--color-border);
  padding: 1rem 0;

  nav {
    display: flex;
    flex-direction: column;
  }

  .mobile-menu-item {
    padding: 0.75rem 1rem;
    color: var(--color-foreground-muted);
    transition: color 0.2s;
    font-weight: var(--font-weight-medium);
  }

  .mobile-menu-item:hover {
    color: var(--color-foreground);
  }

  .mobile-menu-actions {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 1rem;
  }
`;

function Header() {
  const [isMobileMenuActive, setIsMobileMenuActive] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuActive(!isMobileMenuActive);
  };

  const closeMenu = () => {
    setIsMobileMenuActive(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('.header');
      if (window.scrollY > 100) {
        header.style.boxShadow = '0 1px 3px 0 rgb(0 0 0 / 0.1)';
      } else {
        header.style.boxShadow = 'none';
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <StyledHeader className="header">
      <div className="container">
        <HeaderContent>
          <Logo href="#">
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="18" cy="18" r="18" fill="url(#gradient)" />
              <path d="M12 14L18 10L24 14V22L18 26L12 22V14Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              <circle cx="18" cy="18" r="3" fill="white" />
              <defs>
                <linearGradient id="gradient" x1="0" y1="0" x2="36" y2="36" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#4F46E5" />
                  <stop offset="1" stopColor="#7C3AED" />
                </linearGradient>
              </defs>
            </svg>
            <span>Sitara</span>
          </Logo>

          <NavDesktop>
            <a href="#solucoes">Soluções</a>
            <a href="#sobre">Sobre</a>
            <a href="#contato">Contato</a>
          </NavDesktop>

          <NavActions>
            <button className="btn btn-ghost">Entrar</button>
            <button className="btn btn-primary">Começar Agora</button>
          </NavActions>

          <MenuToggle onClick={toggleMenu}>
            {isMobileMenuActive ? <X /> : <Menu />}
          </MenuToggle>
        </HeaderContent>

        <MobileMenu isActive={isMobileMenuActive}>
          <nav>
            <a href="#solucoes" className="mobile-menu-item" onClick={closeMenu}>Soluções</a>
            <a href="#sobre" className="mobile-menu-item" onClick={closeMenu}>Sobre</a>
            <a href="#contato" className="mobile-menu-item" onClick={closeMenu}>Contato</a>
            <div className="mobile-menu-actions">
              <button className="btn btn-ghost btn-full">Entrar</button>
              <button className="btn btn-primary btn-full">Começar Agora</button>
            </div>
          </nav>
        </MobileMenu>
      </div>
    </StyledHeader>
  );
}

export default Header;