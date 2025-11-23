#!/usr/bin/env node

// Script de diagnóstico para verificar se o projeto está configurado corretamente

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('═══════════════════════════════════════════════════════');
console.log('   🔍 DIAGNÓSTICO DO PROJETO SITARA WEBSITE');
console.log('═══════════════════════════════════════════════════════\n');

let errors = 0;
let warnings = 0;

// Função auxiliar para verificar arquivos
function checkFile(filePath, description, required = true) {
  const fullPath = path.join(__dirname, filePath);
  const exists = fs.existsSync(fullPath);
  
  if (exists) {
    console.log(`✅ ${description}: ${filePath}`);
    return true;
  } else {
    if (required) {
      console.log(`❌ ${description} NÃO ENCONTRADO: ${filePath}`);
      errors++;
    } else {
      console.log(`⚠️  ${description} não encontrado (opcional): ${filePath}`);
      warnings++;
    }
    return false;
  }
}

// Função auxiliar para verificar pastas
function checkFolder(folderPath, description, required = true) {
  const fullPath = path.join(__dirname, folderPath);
  const exists = fs.existsSync(fullPath) && fs.statSync(fullPath).isDirectory();
  
  if (exists) {
    console.log(`✅ ${description}: ${folderPath}/`);
    return true;
  } else {
    if (required) {
      console.log(`❌ ${description} NÃO ENCONTRADA: ${folderPath}/`);
      errors++;
    } else {
      console.log(`⚠️  ${description} não encontrada (opcional): ${folderPath}/`);
      warnings++;
    }
    return false;
  }
}

console.log('📋 Verificando arquivos de configuração...\n');
checkFile('package.json', 'Configuração do npm');
checkFile('vite.config.ts', 'Configuração do Vite');
checkFile('tsconfig.json', 'Configuração do TypeScript');
checkFile('index.html', 'Arquivo HTML principal');

console.log('\n📋 Verificando arquivos principais...\n');
checkFile('main.tsx', 'Arquivo de entrada React');
checkFile('App.tsx', 'Componente principal App');

console.log('\n📁 Verificando estrutura de pastas...\n');
const hasComponents = checkFolder('components', 'Pasta de componentes');
const hasStyles = checkFolder('styles', 'Pasta de estilos');

if (hasComponents) {
  console.log('\n📋 Verificando componentes...\n');
  checkFile('components/Header.tsx', 'Componente Header');
  checkFile('components/Hero.tsx', 'Componente Hero');
  checkFile('components/Logo.tsx', 'Componente Logo');
  checkFile('components/Services.tsx', 'Componente Services');
  checkFile('components/About.tsx', 'Componente About');
  checkFile('components/Contact.tsx', 'Componente Contact');
  checkFile('components/Footer.tsx', 'Componente Footer');
  checkFile('components/Chatbot.tsx', 'Componente Chatbot');
  
  console.log('\n📁 Verificando subpastas de componentes...\n');
  checkFolder('components/figma', 'Pasta Figma');
  checkFolder('components/ui', 'Pasta UI (shadcn)');
}

if (hasStyles) {
  console.log('\n📋 Verificando estilos...\n');
  checkFile('styles/globals.css', 'Estilos globais');
}

console.log('\n📦 Verificando dependências...\n');
const hasNodeModules = checkFolder('node_modules', 'Dependências instaladas', false);

if (!hasNodeModules) {
  console.log('ℹ️  Execute "npm install" para instalar as dependências');
}

// Verificar se há uma pasta src/ que não deveria existir
console.log('\n🔍 Verificando estrutura incorreta...\n');
if (fs.existsSync(path.join(__dirname, 'src')) && fs.statSync(path.join(__dirname, 'src')).isDirectory()) {
  console.log('⚠️  AVISO: Pasta "src/" encontrada!');
  console.log('   Este projeto está configurado para NÃO usar pasta src/');
  console.log('   Mova todos os arquivos de src/ para a raiz do projeto');
  warnings++;
}

// Resumo
console.log('\n═══════════════════════════════════════════════════════');
console.log('   📊 RESUMO DO DIAGNÓSTICO');
console.log('═══════════════════════════════════════════════════════\n');

if (errors === 0 && warnings === 0) {
  console.log('🎉 PERFEITO! Projeto configurado corretamente!');
  console.log('\n📝 Próximos passos:');
  if (!hasNodeModules) {
    console.log('   1. Execute: npm install');
    console.log('   2. Execute: npm run dev');
  } else {
    console.log('   1. Execute: npm run dev');
  }
} else {
  if (errors > 0) {
    console.log(`❌ ${errors} erro(s) crítico(s) encontrado(s)`);
    console.log('   Corrija os erros acima antes de prosseguir');
  }
  if (warnings > 0) {
    console.log(`⚠️  ${warnings} aviso(s) encontrado(s)`);
    console.log('   Recomendado corrigir os avisos');
  }
  
  console.log('\n📚 Consulte os guias:');
  console.log('   - ORGANIZACAO-ARQUIVOS.md - Como organizar os arquivos');
  console.log('   - SETUP-GUIDE.md - Guia completo de configuração');
  console.log('   - QUICK-START.md - Guia rápido');
}

console.log('\n═══════════════════════════════════════════════════════\n');

process.exit(errors > 0 ? 1 : 0);
