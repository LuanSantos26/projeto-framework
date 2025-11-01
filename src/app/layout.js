// src/app/layout.js
import "./globals.css";
import Header from "./components/Header";

export const metadata = {
  title: "PROJETO FRAMEWORK",
  description: "Framework minimal — organização, componentes e produtividade",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <div className="site">
          <Header />

          <main>{children}</main>

          <footer className="site-footer">
            <div className="container">© {new Date().getFullYear()} PROJETO FRAMEWORK</div>
          </footer>
        </div>
      </body>
    </html>
  );
}