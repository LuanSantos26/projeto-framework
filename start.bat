@echo off
echo ========================================
echo    SITARA WEBSITE - Iniciando...
echo ========================================
echo.

REM Verifica se Node.js está instalado
where node >nul 2>nul
if %errorlevel% neq 0 (
    echo [ERRO] Node.js nao encontrado!
    echo Por favor, instale Node.js de https://nodejs.org/
    echo.
    pause
    exit /b 1
)

echo [OK] Node.js instalado: 
node --version
echo.

REM Verifica se node_modules existe
if not exist "node_modules\" (
    echo [INFO] Instalando dependencias pela primeira vez...
    echo Isso pode levar alguns minutos...
    echo.
    call npm install
    echo.
    if %errorlevel% neq 0 (
        echo [ERRO] Falha ao instalar dependencias!
        pause
        exit /b 1
    )
    echo [OK] Dependencias instaladas com sucesso!
    echo.
)

echo [INFO] Iniciando servidor de desenvolvimento...
echo O site abrira automaticamente no navegador.
echo.
echo Para parar o servidor, pressione Ctrl+C
echo ========================================
echo.

call npm run dev

pause
