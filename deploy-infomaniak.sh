#!/bin/bash

# Script de déploiement Infomaniak
echo "🚀 Déploiement sur Infomaniak..."

# 1. Build de production
echo "📦 Build du projet..."
npm run build

if [ $? -ne 0 ]; then
  echo "❌ Erreur lors du build"
  exit 1
fi

# 2. Créer un package de déploiement
echo "📋 Création du package..."
mkdir -p deploy
cp -r .next/static deploy/
cp -r public/* deploy/
cp .htaccess deploy/ 2>/dev/null || echo "⚠️  Fichier .htaccess non trouvé"

# 3. Créer l'archive
echo "🗜️  Création de l'archive..."
tar -czf unleash-lab-deploy.tar.gz -C deploy .

echo "✅ Package prêt : unleash-lab-deploy.tar.gz"
echo ""
echo "📋 Étapes suivantes :"
echo "1. Uploader unleash-lab-deploy.tar.gz sur Infomaniak"
echo "2. Extraire dans le dossier racine du site"
echo "3. Configurer les variables d'environnement"
echo "4. Tester le site"

# 4. Nettoyage
rm -rf deploy/

echo "🎉 Terminé !"