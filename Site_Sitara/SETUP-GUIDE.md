# 📦 Guia de Setup Completo - Sitara Website

## 🎯 Objetivo

Este guia vai te ajudar a configurar e rodar o projeto Sitara Website no seu computador local usando Node.js.

## ⚡ Setup Rápido (5 minutos)

### Passo 1: Instalar Node.js

1. Acesse https://nodejs.org/
2. Baixe a versão LTS (recomendada)
3. Instale seguindo as instruções do instalador
4. Verifique a instalação abrindo o terminal e digitando:
   \`\`\`bash
   node --version
   npm --version
   \`\`\`

### Passo 2: Reorganizar Arquivos

**IMPORTANTE:** Você precisa mover os arquivos para dentro de uma pasta `src/`. Siga esta estrutura:

#### Estrutura ANTIGA (atual):
\`\`\`
projeto/
├── App.tsx
├── components/
├── styles/
└── ...
\`\`\`

#### Estrutura NOVA (necessária):
\`\`\`
sitara-website/
├── index.html          ← arquivo novo (já criado)
├── package.json        ← arquivo novo (já criado)
├── vite.config.ts      ← arquivo novo (já criado)
├── tsconfig.json       ← arquivo novo (já criado)
├── tsconfig.node.json  ← arquivo novo (já criado)
├── .gitignore          ← arquivo novo (já criado)
└── src/                ← CRIAR ESTA PASTA
    ├── main.tsx        ← arquivo novo (precisa criar)
    ├── App.tsx         ← MOVER PARA CÁ
    ├── components/     ← MOVER PARA CÁ
    │   ├── Header.tsx
    │   ├── Hero.tsx
    │   ├── Logo.tsx
    │   ├── Services.tsx
    │   ├── About.tsx
    │   ├── Contact.tsx
    │   ├── Footer.tsx
    │   ├── Chatbot.tsx
    │   ├── figma/
    │   └── ui/
    └── styles/         ← MOVER PARA CÁ
        └── globals.css
\`\`\`

### Passo 3: Criar o Arquivo de Entrada (main.tsx)

Crie o arquivo `src/main.tsx` com o seguinte conteúdo:

\`\`\`typescript
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/globals.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
\`\`\`

### Passo 4: Atualizar Imports nos Componentes

Depois de mover os arquivos para `src/`, você precisará atualizar os imports. Por exemplo:

**Antes:**
\`\`\`typescript
import { Header } from './components/Header';
\`\`\`

**Depois (em App.tsx):**
\`\`\`typescript
import { Header } from './components/Header';  // Mantém o mesmo se App.tsx está em src/
\`\`\`

**Nos componentes dentro de /components/:**
\`\`\`typescript
// Se estava:
import { Button } from './ui/button';

// Continua igual:
import { Button } from './ui/button';
\`\`\`

### Passo 5: Instalar Dependências

Abra o terminal na pasta raiz do projeto (onde está o package.json) e execute:

\`\`\`bash
npm install
\`\`\`

Aguarde a instalação (pode levar alguns minutos na primeira vez).

### Passo 6: Rodar o Projeto

\`\`\`bash
npm run dev
\`\`\`

Pronto! O site deve abrir automaticamente em `http://localhost:3000`

## 🔧 Comandos do Terminal

### Windows
- Abrir terminal: Pressione `Win + R`, digite `cmd` e Enter
- Navegar para pasta: `cd caminho\da\pasta`

### Mac/Linux
- Abrir terminal: Command + Space, digite "Terminal"
- Navegar para pasta: `cd caminho/da/pasta`

## 📋 Checklist de Verificação

Antes de rodar, certifique-se de que:

- [ ] Node.js está instalado (`node --version` funciona)
- [ ] Todos os arquivos estão na estrutura correta
- [ ] A pasta `src/` foi criada
- [ ] O arquivo `src/main.tsx` foi criado
- [ ] O arquivo `index.html` está na raiz
- [ ] O arquivo `package.json` está na raiz
- [ ] Você está na pasta raiz no terminal (onde está o package.json)
- [ ] Executou `npm install` com sucesso

## ❌ Problemas Comuns

### Erro: "Cannot find module './App'"
**Solução:** Verifique se o App.tsx está em `src/App.tsx`

### Erro: "Port 3000 is already in use"
**Solução:** Feche outros projetos rodando na porta 3000, ou edite `vite.config.ts` e mude o `port: 3000` para `port: 3001`

### Erro ao instalar dependências
**Solução:** 
1. Delete a pasta `node_modules` (se existir)
2. Delete o arquivo `package-lock.json` (se existir)
3. Execute novamente `npm install`

### Imports não funcionam
**Solução:** Verifique os caminhos dos imports. A partir de `src/`, use:
- `./components/Header` (mesmo nível ou subpasta)
- `../components/Header` (pasta acima)

## 🎨 Customização Rápida

### Mudar Porta do Servidor
Edite `vite.config.ts`:
\`\`\`typescript
server: {
  port: 3001,  // Mude para a porta desejada
  open: true
}
\`\`\`

### Mudar Cores do Site
Edite `src/styles/globals.css` nas variáveis CSS:
\`\`\`css
:root {
  --primary: #030213;  /* Cor primária */
  --background: #ffffff; /* Cor de fundo */
  /* ... outras cores */
}
\`\`\`

## 📱 Como Testar em Outros Dispositivos

1. Execute `npm run dev`
2. Anote o endereço de rede local que aparece (ex: `http://192.168.1.100:3000`)
3. Acesse esse endereço de outro dispositivo na mesma rede WiFi

## 🚀 Deploy para Produção

### Gerar Build
\`\`\`bash
npm run build
\`\`\`

Os arquivos otimizados estarão em `dist/`

### Hospedar em Serviços Gratuitos
- **Vercel:** https://vercel.com (recomendado para React)
- **Netlify:** https://netlify.com
- **GitHub Pages:** https://pages.github.com

## 📞 Precisa de Ajuda?

Se encontrar problemas:
1. Verifique o checklist acima
2. Leia a seção de "Problemas Comuns"
3. Verifique se todos os arquivos estão na estrutura correta
4. Certifique-se de que o Node.js está instalado corretamente

## 🎉 Próximos Passos

Após o site estar rodando:
1. Explore o código em `src/components/`
2. Faça modificações e veja as mudanças em tempo real
3. Personalize cores e conteúdo
4. Adicione novas funcionalidades

---

**Dica:** Mantenha o terminal aberto enquanto desenvolve. Ele mostrará erros e avisos em tempo real!
