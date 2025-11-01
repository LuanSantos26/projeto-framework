// src/app/components/Hero.jsx
import styles from "../page.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroInner + " container"}>
        <div className={styles.content}>
          <h1 className={styles.title}>Construa interfaces com clareza e velocidade</h1>
          <p className={styles.lead}>
            Um ponto de partida leve em Next.js com organização de componentes e estilos simples para crescer com o seu projeto.
          </p>

          <div className={styles.actions}>
            <a className={styles.btnPrimary} href="#get-started">Começar</a>
            <a className={styles.btnOutline} href="#features">Ver recursos</a>
          </div>
        </div>

        <div className={styles.visual} role="img" aria-label="Ilustração do produto" />
      </div>
    </section>
  );
}