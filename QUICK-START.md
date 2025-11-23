# ⚡ Quick Start - Sitara Website

## 🎯 Configuração em 3 Passos

### ✅ Passo 1: Instalar Node.js (se ainda não tiver)
```bash
# Baixe e instale de: https://nodejs.org/
# Escolha a versão LTS (recomendada)

# Depois, verifique se instalou corretamente:
node --version
npm --version
```

### ✅ Passo 2: Instalar Dependências
```bash
# No terminal, navegue até a pasta do projeto:
cd caminho/para/sitara-website

# Instale todas as dependências:
npm install
```

### ✅ Passo 3: Rodar o Projeto
```bash
# Inicie o servidor de desenvolvimento:
npm run dev
```

**Pronto!** O site abrirá automaticamente em `http://localhost:3000` 🎉

---

## 📁 Estrutura de Arquivos Necessária

Certifique-se de que seus arquivos estão organizados assim:

```
sitara-website/
├── 📄 index.html           ← Na RAIZ
├── 📄 package.json         ← Na RAIZ  
├── 📄 vite.config.ts       ← Na RAIZ
├── 📄 main.tsx             ← Na RAIZ
├── 📄 App.tsx              ← Na RAIZ
├── 📁 components/          ← Na RAIZ
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
└── 📁 styles/              ← Na RAIZ
    └── globals.css
```

---

## 🔥 Comandos Principais

| Comando | O que faz |
|---------|-----------|
| `npm install` | Instala todas as dependências (fazer 1x) |
| `npm run dev` | Inicia o servidor (para desenvolvimento) |
| `npm run build` | Cria versão de produção |
| `npm run preview` | Visualiza versão de produção |

---

## 💡 Dicas Rápidas

### Fazer alterações no código:
1. Deixe `npm run dev` rodando no terminal
2. Edite os arquivos em `components/`
3. Salve o arquivo
4. O navegador atualiza automaticamente! ✨

### Parar o servidor:
Pressione `Ctrl + C` no terminal

### Ver o site em outros dispositivos:
1. Anote o IP que aparece no terminal (ex: `http://192.168.1.100:3000`)
2. Acesse esse endereço de outro dispositivo na mesma WiFi

---

## ❌ Problemas?

### "Command not found: npm"
→ Node.js não está instalado. Volte ao Passo 1.

### "Cannot find module"
→ Execute `npm install` novamente.

### "Port 3000 already in use"
→ Feche outros projetos ou mude a porta em `vite.config.ts`.

### Site não carrega
→ Verifique se o terminal está rodando `npm run dev`.

---

## 📚 Documentação Completa

- **SETUP-GUIDE.md** - Guia detalhado passo a passo
- **README.md** - Informações gerais do projeto

---

**Tudo funcionando?** Agora é só desenvolver! 🚀
