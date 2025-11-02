export default function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Entre em Contato</h2>
      <form className="contact-form">
        <input type="text" placeholder="Seu nome" required />
        <input type="email" placeholder="Seu e-mail" required />
        <textarea placeholder="Mensagem" rows="5" required></textarea>
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
}
