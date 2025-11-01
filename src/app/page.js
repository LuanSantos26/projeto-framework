// src/app/page.js
import Hero from "./components/Hero";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <Hero />

      <section id="features" className={"container " + styles.features}>
        <h2 className={styles.sectionTitle}>Recursos principais</h2>
        <div className={styles.grid}>
          <article className={styles.card}>
            <h3>Componentes organizados</h3>
            <p>Estruture em /src/app/components para reuso e manutenção fácil.</p>
          </article>
          <article className={styles.card}>
            <h3>CSS modular</h3>
            <p>Use CSS Modules para estilos com escopo e um globals.css para tokens.</p>
          </article>
          <article className={styles.card}>
            <h3>Roteamento pronto</h3>
            <p>Next.js cuida do roteamento; crie novas páginas em src/app.</p>
          </article>
        </div>
      </section>

      <section id="about" className={"container " + styles.about}>
        <h2 className={styles.sectionTitle}>Sobre o projeto</h2>
        <p className={styles.lead}>
          Projeto minimal pensado para prototipagem rápida: comece pequeno e escale com boas práticas.
        </p>
      </section>
    </>
  );
}