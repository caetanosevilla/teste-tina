#!/usr/bin/env bash
# Envia o projeto para o GitHub (branch main).
#   cd ~/Documents/teste-tina && bash enviar-github.sh https://github.com/SEU-USUARIO/teste-tina
set -euo pipefail
cd "$(dirname "$0")"
REPO="${1:?Informe o endereço do repositório: bash enviar-github.sh https://github.com/.../teste-tina}"
git add -A
git commit -qm "Conteúdo e ajustes" || true
git branch -M main
git remote remove origin 2>/dev/null || true
git remote add origin "$REPO"
echo "→ Enviando para $REPO ..."
echo "  (se pedir usuário/senha: usuário do GitHub + um token em github.com/settings/tokens, não a senha)"
git push -u origin main
echo "✓ Código no GitHub. Volte na Tina Cloud e confira se o projeto aparece como indexado."
