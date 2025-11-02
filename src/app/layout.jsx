import './globals.css'; // Importa o CSS global aqui

export const metadata = {
  title: 'Sitara',
  description: 'Análise e engenharia de software',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      {/* Adiciona o suppressHydrationWarning para evitar o erro de extensão do navegador */}
      <body suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  )
}