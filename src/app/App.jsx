import React from 'react';
import GlobalStyles from './GlobalStyles.js';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Solutions from './Solutions';
import Features from './Features';
import CTA from './CTA';
import Footer from './Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <main>
        <Hero />
        <Solutions />
        <Features />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;