import React from 'react';
import styled from 'styled-components';
import { CheckCircle, ArrowRight } from '@lucide/react';

const StyledHero = styled.section`
  padding: 5rem 0 8rem;
  background: linear-gradient(135deg, var(--color-indigo-50) 0%, white 50%, var(--color-purple-50) 100%);

  .hero-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 3rem;
    align-items: center;
  }

  .hero-content {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .hero-description {
    font-size: 1.125rem;
    color: var(--color-foreground-muted);
  }

  .hero-features {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  .hero-feature {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;

export default StyledHero;