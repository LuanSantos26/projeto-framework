import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  /* Reset and Base Styles */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    /* Colors */
    --color-primary: #4f46e5;
    --color-primary-dark: #4338ca;
    --color-secondary: #7c3aed;
    --color-background: #ffffff;
    --color-foreground: #0f172a;
    --color-foreground-muted: rgba(15, 23, 42, 0.7);
    --color-foreground-light: rgba(15, 23, 42, 0.6);
    --color-border: rgba(0, 0, 0, 0.1);
    --color-card: #ffffff;
    --color-gray-50: #f8fafc;
    --color-gray-100: #f1f5f9;
    --color-gray-200: #e2e8f0;
    --color-gray-800: #1e293b;
    --color-gray-900: #0f172a;
    --color-indigo-50: #eef2ff;
    --color-indigo-100: #e0e7ff;
    --color-indigo-600: #4f46e5;
    --color-indigo-700: #4338ca;
    --color-purple-50: #faf5ff;
    --color-slate-300: #cbd5e1;
    --color-slate-800: #1e293b;
    --color-slate-900: #0f172a;

    /* Spacing */
    --spacing-xs: 0.5rem;
    --spacing-sm: 1rem;
    --spacing-md: 1.5rem;
    --spacing-lg: 2rem;
    --spacing-xl: 3rem;
    --spacing-2xl: 4rem;
    --spacing-3xl: 6rem;

    /* Typography */
    --font-base: 16px;
    --font-weight-normal: 400;
    --font-weight-medium: 500;
    --font-weight-semibold: 600;
    --font-weight-bold: 700;

    /* Border Radius */
    --radius-sm: 0.375rem;
    --radius-md: 0.5rem;
    --radius-lg: 0.625rem;
    --radius-xl: 1rem;
    --radius-2xl: 1.5rem;
    --radius-full: 9999px;

    /* Shadows */
    --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
    --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
    --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
    --shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
    --shadow-2xl: 0 25px 50px -12px rgb(0 0 0 / 0.25);
  }

  html {
    font-size: var(--font-base);
    scroll-behavior: smooth;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: var(--color-foreground);
    background-color: var(--color-background);
    line-height: 1.5;
    min-height: 100vh;
  }

  /* Typography */
  h1 {
    font-size: 2.25rem;
    font-weight: var(--font-weight-bold);
    line-height: 1.2;
    letter-spacing: -0.025em;
  }

  h2 {
    font-size: 1.875rem;
    font-weight: var(--font-weight-bold);
    line-height: 1.3;
    letter-spacing: -0.025em;
  }

  h3 {
    font-size: 1.25rem;
    font-weight: var(--font-weight-semibold);
    line-height: 1.4;
  }

  h4 {
    font-size: 1.125rem;
    font-weight: var(--font-weight-semibold);
    line-height: 1.4;
  }

  p {
    font-size: 1rem;
    font-weight: var(--font-weight-normal);
    line-height: 1.6;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  /* Container */
  .container {
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 1rem;
  }

  /* Buttons */
  .btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 0.625rem 1.25rem;
    font-size: 1rem;
    font-weight: var(--font-weight-medium);
    line-height: 1.5;
    border-radius: var(--radius-md);
    border: none;
    cursor: pointer;
    transition: all 0.2s;
    white-space: nowrap;
  }

  .btn svg {
    width: 1rem;
    height: 1rem;
  }

  .btn-primary {
    background-color: var(--color-primary);
    color: white;
  }

  .btn-primary:hover {
    background-color: var(--color-primary-dark);
  }

  .btn-secondary {
    background-color: white;
    color: var(--color-foreground);
  }

  .btn-secondary:hover {
    background-color: var(--color-gray-100);
  }

  .btn-ghost {
    background-color: transparent;
    color: var(--color-foreground);
  }

  .btn-ghost:hover {
    background-color: var(--color-gray-100);
  }

  .btn-outline {
    background-color: transparent;
    color: var(--color-foreground);
    border: 1px solid var(--color-border);
  }

  .btn-outline:hover {
    background-color: var(--color-gray-50);
  }

  .btn-outline-white {
    background-color: transparent;
    color: white;
    border: 1px solid white;
  }

  .btn-outline-white:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  .btn-lg {
    padding: 0.875rem 1.75rem;
    font-size: 1.125rem;
  }

  .btn-full {
    width: 100%;
  }

  /* Badge */
  .badge {
    display: inline-block;
    padding: 0.5rem 1rem;
    background-color: var(--color-indigo-100);
    color: var(--color-indigo-700);
    border-radius: var(--radius-full);
    font-size: 0.875rem;
    font-weight: var(--font-weight-medium);
  }

  /* Responsive Design */
  @media (min-width: 768px) {
    h1 {
      font-size: 3rem;
    }

    h2 {
      font-size: 2.25rem;
    }

    .container {
      padding: 0 2rem;
    }
  }

  @media (min-width: 1024px) {
    h1 {
      font-size: 3.75rem;
    }
  }

  /* Utility Classes */
  .text-center {
    text-align: center;
  }

  .flex {
    display: flex;
  }

  .items-center {
    align-items: center;
  }

  .gap-1 {
    gap: 0.25rem;
  }

  .gap-2 {
    gap: 0.5rem;
  }

  .gap-4 {
    gap: 1rem;
  }
`;

export default GlobalStyles;