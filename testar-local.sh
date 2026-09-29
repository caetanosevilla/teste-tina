#!/usr/bin/env bash
# Roda a landing com o editor TinaCMS no seu Mac (sem conta nenhuma).
#   cd ~/Documents/teste-tina && bash testar-local.sh
set -euo pipefail
cd "$(dirname "$0")"
echo "→ Instalando dependências (1ª vez leva ~1 min)..."
npm install --silent
echo
echo "→ Subindo o site + editor..."
echo "   Site:   http://localhost:3000"
echo "   Editor: http://localhost:3000/admin   (clique em 'Enter Edit Mode')"
echo "   Para parar: Ctrl+C"
echo
(sleep 25 && open "http://localhost:3000/admin" 2>/dev/null) &
npm run dev
