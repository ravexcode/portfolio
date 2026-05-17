#!/bin/bash
# Script de verificación antes de desplegar a Netlify

echo "🔍 Verificando configuración para Netlify..."
echo ""

# 1. Verificar Node.js version
echo "✓ Verificando Node.js..."
NODE_VERSION=$(node -v)
echo "  Versión instalada: $NODE_VERSION"
echo ""

# 2. Verificar package.json
echo "✓ Verificando package.json..."
if [ -f "package.json" ]; then
  echo "  ✓ package.json encontrado"
else
  echo "  ✗ package.json NO encontrado"
  exit 1
fi
echo ""

# 3. Verificar astro.config.mjs
echo "✓ Verificando astro.config.mjs..."
if [ -f "astro.config.mjs" ]; then
  echo "  ✓ astro.config.mjs encontrado"
else
  echo "  ✗ astro.config.mjs NO encontrado"
  exit 1
fi
echo ""

# 4. Verificar netlify.toml
echo "✓ Verificando netlify.toml..."
if [ -f "netlify.toml" ]; then
  echo "  ✓ netlify.toml encontrado"
else
  echo "  ✗ netlify.toml NO encontrado"
  exit 1
fi
echo ""

# 5. Verificar node_modules
echo "✓ Verificando dependencias..."
if [ ! -d "node_modules" ]; then
  echo "  Installing dependencies..."
  npm install
else
  echo "  ✓ node_modules encontrado"
fi
echo ""

# 6. Ejecutar build
echo "🚀 Ejecutando build..."
npm run build

if [ $? -eq 0 ]; then
  echo ""
  echo "✅ ¡Todo listo para Netlify!"
  echo ""
  echo "Próximos pasos:"
  echo "1. git push para sincronizar cambios"
  echo "2. Ve a https://app.netlify.com"
  echo "3. Conecta tu repositorio"
  echo "4. ¡Listo! Tu sitio se desplegará automáticamente"
else
  echo ""
  echo "❌ Error en el build"
  exit 1
fi
