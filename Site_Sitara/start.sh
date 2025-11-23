#!/bin/bash

echo "========================================"
echo "   SITARA WEBSITE - Iniciando..."
echo "========================================"
echo ""

# Verifica se Node.js está instalado
if ! command -v node &> /dev/null; then
    echo "[ERRO] Node.js não encontrado!"
    echo "Por favor, instale Node.js de https://nodejs.org/"
    echo ""
    exit 1
fi

echo "[OK] Node.js instalado:"
node --version
echo ""

# Verifica se node_modules existe
if [ ! -d "node_modules" ]; then
    echo "[INFO] Instalando dependências pela primeira vez..."
    echo "Isso pode levar alguns minutos..."
    echo ""
    npm install
    if [ $? -ne 0 ]; then
        echo "[ERRO] Falha ao instalar dependências!"
        exit 1
    fi
    echo "[OK] Dependências instaladas com sucesso!"
    echo ""
fi

echo "[INFO] Iniciando servidor de desenvolvimento..."
echo "O site abrirá automaticamente no navegador."
echo ""
echo "Para parar o servidor, pressione Ctrl+C"
echo "========================================"
echo ""

npm run dev
