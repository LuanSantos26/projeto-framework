import '../components/globals.css';

export const metadata = {
  title: 'Sitara - Soluções de Análise de Sistemas',
  description: 'Transforme seus processos com metodologias avançadas de análise de software.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
