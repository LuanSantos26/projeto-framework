# 🌟 Sitara - Website

Site moderno e interativo para a empresa Sitara, especializada em soluções de análise de sistemas de software para empresas.

## 📋 Funcionalidades

- ✨ Design moderno com animações fluidas (Motion/Framer Motion)
- 🎨 Interface responsiva e atrativa
- 💬 Chatbot integrado para comunicação com visitantes
- 🔧 Seções especializadas em:
  - Performance
  - Segurança
  - Otimização
  - Revisão de Código
  - Arquitetura de Dados
  - Consultoria
- 📱 Totalmente responsivo
- 🎭 Efeitos visuais modernos

## 🚀 Como Rodar o Projeto

### Pré-requisitos

- Node.js (versão 18 ou superior) - [Download aqui](https://nodejs.org/)
- npm (vem com Node.js) ou yarn

### Passo a Passo

#### 1. Organize os Arquivos

Reorganize sua estrutura de arquivos da seguinte forma:

\`\`\`
sitara-website/
├── index.html
├── package.json
├── vite.config.ts
├── tsconfig.json
├── tsconfig.node.json
├── .gitignore
├── README.md
└── src/
    ├── main.tsx
    ├── App.tsx
    ├── components/
    │   ├── Header.tsx
    │   ├── Hero.tsx
    │   ├── Logo.tsx
    │   ├── Services.tsx
    │   ├── About.tsx
    │   ├── Contact.tsx
    │   ├── Footer.tsx
    │   ├── Chatbot.tsx
    │   ├── figma/
    │   │   └── ImageWithFallback.tsx
    │   └── ui/
    │       ├── (todos os componentes shadcn)
    │       └── ...
    └── styles/
        └── globals.css
\`\`\`

#### 2. Instale as Dependências

Abra o terminal na pasta raiz do projeto e execute:

\`\`\`bash
npm install
\`\`\`

Ou se preferir usar yarn:

\`\`\`bash
yarn install
\`\`\`

#### 3. Execute o Projeto

Para rodar em modo de desenvolvimento:

\`\`\`bash
npm run dev
\`\`\`

Ou com yarn:

\`\`\`bash
yarn dev
\`\`\`

O site será aberto automaticamente no navegador em `http://localhost:3000`

#### 4. Build para Produção

Para criar uma versão otimizada para produção:

\`\`\`bash
npm run build
\`\`\`

Os arquivos de produção serão gerados na pasta `dist/`

Para visualizar a versão de produção localmente:

\`\`\`bash
npm run preview
\`\`\`

## 🛠️ Tecnologias Utilizadas

- **React 18** - Framework JavaScript
- **TypeScript** - Tipagem estática
- **Vite** - Build tool ultra-rápido
- **Tailwind CSS v4** - Framework CSS
- **Motion (Framer Motion)** - Animações fluidas
- **Lucide React** - Ícones modernos
- **Radix UI** - Componentes acessíveis
- **Sonner** - Toast notifications

## 📁 Estrutura do Projeto

- **/src/components/** - Componentes React modulares
  - **Header.tsx** - Cabeçalho com navegação
  - **Hero.tsx** - Seção hero principal
  - **Logo.tsx** - Logo da Sitara com efeitos interativos
  - **Services.tsx** - Serviços oferecidos
  - **About.tsx** - Sobre a empresa
  - **Contact.tsx** - Formulário de contato
  - **Footer.tsx** - Rodapé
  - **Chatbot.tsx** - Widget de chat integrado
  - **/ui/** - Componentes shadcn/ui reutilizáveis

- **/src/styles/** - Estilos globais
  - **globals.css** - Variáveis CSS e configurações Tailwind

## 🎨 Personalização

Para personalizar cores e estilos, edite o arquivo `/src/styles/globals.css` onde estão definidas as variáveis CSS personalizadas.

## 📝 Scripts Disponíveis

- `npm run dev` - Inicia servidor de desenvolvimento
- `npm run build` - Gera build de produção
- `npm run preview` - Visualiza build de produção localmente
- `npm run lint` - Executa linter para verificar código

## 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto é proprietário da Sitara.

## 📧 Contato

Para mais informações, visite [www.sitara.com](https://www.sitara.com) ou entre em contato através do formulário no site.

---

Desenvolvido com ❤️ para Sitara
