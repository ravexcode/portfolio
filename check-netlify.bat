@echo off
REM Script de verificacion antes de desplegar a Netlify (Windows)

echo.
echo 🔍 Verificando configuracion para Netlify...
echo.

REM 1. Verificar Node.js version
echo ✓ Verificando Node.js...
FOR /F "tokens=*" %%i IN ('node -v') DO set NODE_VERSION=%%i
echo   Versión instalada: %NODE_VERSION%
echo.

REM 2. Verificar package.json
echo ✓ Verificando package.json...
if exist package.json (
  echo   ✓ package.json encontrado
) else (
  echo   ✗ package.json NO encontrado
  exit /b 1
)
echo.

REM 3. Verificar astro.config.mjs
echo ✓ Verificando astro.config.mjs...
if exist astro.config.mjs (
  echo   ✓ astro.config.mjs encontrado
) else (
  echo   ✗ astro.config.mjs NO encontrado
  exit /b 1
)
echo.

REM 4. Verificar netlify.toml
echo ✓ Verificando netlify.toml...
if exist netlify.toml (
  echo   ✓ netlify.toml encontrado
) else (
  echo   ✗ netlify.toml NO encontrado
  exit /b 1
)
echo.

REM 5. Verificar node_modules
echo ✓ Verificando dependencias...
if not exist node_modules (
  echo   Instalando dependencias...
  call npm install
) else (
  echo   ✓ node_modules encontrado
)
echo.

REM 6. Ejecutar build
echo 🚀 Ejecutando build...
call npm run build

if %errorlevel% equ 0 (
  echo.
  echo ✅ ¡Todo listo para Netlify!
  echo.
  echo Próximos pasos:
  echo 1. git push para sincronizar cambios
  echo 2. Ve a https://app.netlify.com
  echo 3. Conecta tu repositorio
  echo 4. ¡Listo! Tu sitio se desplegará automáticamente
) else (
  echo.
  echo ❌ Error en el build
  exit /b 1
)
