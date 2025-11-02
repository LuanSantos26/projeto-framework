<<<<<<< HEAD
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./globals.css";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
=======
"use client";

import { useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!login || !senha) {
      alert("Preencha todos os campos!");
      return;
    }

    console.log("Login:", login);
    console.log("Senha:", senha);
  }

  return (
    <div className={styles.page}>
      <div className={styles.formContainer}>
        <h1 className={styles.title}>Primeiro Teste</h1>

        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="login" className={styles.label}>
              Login
            </label>
            <input
              id="login"
              type="text"
              placeholder="Digite seu login"
              value={login}
              onChange={(e) => setLogin(e.target.value)}
              className={styles.input}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="senha" className={styles.label}>
              Senha
            </label>
            <input
              id="senha"
              type="password"
              placeholder="Digite sua senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              className={styles.input}
            />
          </div>

          <button type="submit" className={styles.button}>
            Salvar
          </button>
        </form>
      </div>
    </div>
>>>>>>> parent of 85b3b09 (Funcionalidade part 1 do projeto)
  );
}
