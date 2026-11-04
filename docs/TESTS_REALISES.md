# Vérifications techniques du 3 novembre 2026

Tests effectués localement dans Chromium, à partir du HTML et de ressources intégrées au rendu de test, pour contourner les restrictions d'ouverture de fichiers du navigateur d'automatisation.

| Vérification | Résultat |
|---|---|
| Largeurs testées | 1440 px, 768 px et 390 px |
| Débordement horizontal | Aucun dans ces trois configurations |
| Images locales de la page d'accueil | Toutes chargées pendant le test |
| Erreurs JavaScript | Aucune remontée par le navigateur |
| Filtre Pipelines | 2 cartes visibles |
| Filtre IA & RAG | 1 carte visible |
| Filtre Tous | 4 cartes visibles |
| Attribut `aria-pressed` | Mis à jour correctement |
| Pages de projets | 4 pages testées |
| Ressources locales liées | Aucun chemin manquant détecté |
| Attributs `alt` des images | Présents |
| Texte U+2014 interdit | Aucun détecté dans les fichiers texte |

## Limites des vérifications

Ces tests ne sont ni un audit d'accessibilité complet, ni un test Lighthouse, ni une vérification de l'accessibilité des liens externes. La validation des preuves des autres projets et la réception du CV PDF restent nécessaires.
