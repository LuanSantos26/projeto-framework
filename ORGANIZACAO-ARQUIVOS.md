# 📂 Como Organizar os Arquivos do Projeto

## 🎯 Estrutura Final Necessária

Seu projeto precisa estar organizado **EXATAMENTE** assim:

```
sitara-website/                    ← Pasta raiz do projeto
│
├── 📄 index.html                  ✅ Já criado automaticamente
├── 📄 package.json                ✅ Já criado automaticamente
├── 📄 vite.config.ts              ✅ Já criado automaticamente
├── 📄 tsconfig.json               ✅ Já criado automaticamente
├── 📄 tsconfig.node.json          ✅ Já criado automaticamente
├── 📄 .gitignore                  ✅ Já criado automaticamente
├── 📄 README.md                   ✅ Já criado automaticamente
├── 📄 SETUP-GUIDE.md              ✅ Já criado automaticamente
├── 📄 QUICK-START.md              ✅ Já criado automaticamente
├── 📄 start.bat                   ✅ Script para Windows
├── 📄 start.sh                    ✅ Script para Mac/Linux
├── 📄 main.tsx                    ✅ Já criado automaticamente
├── 📄 App.tsx                     ⚠️ Seu arquivo (já existe)
│
├── 📁 components/                 ⚠️ Sua pasta (já existe)
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── Logo.tsx
│   ├── Services.tsx
│   ├── About.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   ├── Chatbot.tsx
│   │
│   ├── 📁 figma/
│   │   └── ImageWithFallback.tsx
│   │
│   └── 📁 ui/
│       ├── accordion.tsx
│       ├── alert-dialog.tsx
│       ├── button.tsx
│       ├── dialog.tsx
│       ├── input.tsx
│       ├── label.tsx
│       └── ... (todos os outros componentes UI)
│
├── 📁 styles/                     ⚠️ Sua pasta (já existe)
│   └── globals.css
│
└── 📁 node_modules/               🔵 Será criada automaticamente ao rodar npm install
    └── ... (dependências)
```

---

## ✅ Checklist de Verificação

Antes de executar `npm install`, verifique:

### ✔️ Arquivos na RAIZ do projeto:
- [ ] `index.html`
- [ ] `package.json`
- [ ] `vite.config.ts`
- [ ] `tsconfig.json`
- [ ] `main.tsx`
- [ ] `App.tsx`

### ✔️ Pastas na RAIZ do projeto:
- [ ] `components/` (com todos os arquivos .tsx dentro)
- [ ] `styles/` (com globals.css dentro)

### ✔️ Dentro de `components/`:
- [ ] Header.tsx
- [ ] Hero.tsx
- [ ] Logo.tsx
- [ ] Services.tsx
- [ ] About.tsx
- [ ] Contact.tsx
- [ ] Footer.tsx
- [ ] Chatbot.tsx
- [ ] Pasta `figma/` com ImageWithFallback.tsx
- [ ] Pasta `ui/` com todos os componentes shadcn

### ✔️ Dentro de `styles/`:
- [ ] globals.css

---

## 🔄 Se Seus Arquivos Estão Desorganizados

### Cenário 1: Arquivos estão em lugares diferentes
**Solução:** Mova manualmente cada arquivo para a estrutura acima.

### Cenário 2: Tudo está dentro de uma pasta `src/`
**Solução:** Mova TUDO de dentro de `src/` para a raiz do projeto. Delete a pasta `src/` vazia.

### Cenário 3: Arquivos de configuração não existem
**Solução:** Os arquivos de configuração já foram criados automaticamente (package.json, vite.config.ts, etc.)

---

## 📌 Importante!

### ⚠️ NÃO crie uma pasta `src/`
Este projeto está configurado para funcionar **SEM** a pasta `src/`. Os arquivos devem ficar na raiz.

### ✅ Arquivos que DEVEM estar na raiz:
- App.tsx
- main.tsx
- components/ (pasta)
- styles/ (pasta)

### ❌ NÃO faça:
```
❌ Errado:
sitara-website/
└── src/
    ├── App.tsx
    └── components/
```

### ✅ FAÇA:
```
✅ Correto:
sitara-website/
├── App.tsx
├── main.tsx
└── components/
```

---

## 🎬 Passo a Passo de Organização

### 1️⃣ Crie a pasta do projeto
```bash
# Windows
mkdir sitara-website
cd sitara-website

# Mac/Linux
mkdir sitara-website
cd sitara-website
```

### 2️⃣ Coloque TODOS os arquivos na raiz
- Copie App.tsx para a raiz
- Copie a pasta components/ para a raiz
- Copie a pasta styles/ para a raiz
- Os arquivos de configuração já foram criados

### 3️⃣ Verifique a estrutura
Use `dir` (Windows) ou `ls` (Mac/Linux) para ver os arquivos:

**Windows:**
```cmd
dir
```

**Mac/Linux:**
```bash
ls -la
```

Você deve ver:
- Vários arquivos .tsx, .json, .ts
- Pasta components/
- Pasta styles/

### 4️⃣ Pronto para instalar!
Agora você pode executar:
```bash
npm install
```

---

## 🚨 Erros Comuns e Soluções

### Erro: "Cannot find module './App'"
**Causa:** App.tsx não está no lugar certo  
**Solução:** Mova App.tsx para a raiz do projeto

### Erro: "Cannot find module './components/Header'"
**Causa:** Pasta components/ não está no lugar certo  
**Solução:** Mova a pasta components/ para a raiz do projeto

### Erro: "Cannot find module './styles/globals.css'"
**Causa:** Pasta styles/ não está no lugar certo  
**Solução:** Mova a pasta styles/ para a raiz do projeto

### Erro: "Cannot find module 'react'"
**Causa:** Dependências não foram instaladas  
**Solução:** Execute `npm install`

---

## 🎯 Atalho Rápido

### Windows:
1. Clique duas vezes no arquivo `start.bat`
2. Ele verificará tudo e iniciará o projeto automaticamente!

### Mac/Linux:
1. Dê permissão de execução:
   ```bash
   chmod +x start.sh
   ```
2. Execute:
   ```bash
   ./start.sh
   ```

---

## ✨ Resultado Final

Quando tudo estiver correto, você verá no terminal:

```
  VITE v5.3.4  ready in XXX ms

  ➜  Local:   http://localhost:3000/
  ➜  Network: http://192.168.X.X:3000/
  ➜  press h to show help
```

E o site abrirá automaticamente no navegador! 🎉

---

**Dúvidas?** Consulte o arquivo `SETUP-GUIDE.md` para instruções mais detalhadas.
