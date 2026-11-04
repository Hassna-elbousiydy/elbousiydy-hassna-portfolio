# Contrôle qualité de la refonte

Ce document reprend les demandes de l'audit remis le 3 novembre 2026, en distinguant ce qui est accompli et ce qui demande encore des pièces de preuve.

| Demande de l'audit | Traitement dans cette version |
|---|---|
| Remplacer le thème trop foncé | Palette claire ivoire, rose, lavande, sauge, dégradés discrets |
| Donner une place aux photos réelles | Deux photos intégrées et optimisées en WebP sans retouche stylistique |
| Métier et proposition de valeur immédiatement visibles | Titre et introduction « Data Engineering & Applied AI » |
| Projets rapidement accessibles | Projets immédiatement après le bloc d'accueil |
| Corriger les filtres | Script externe `assets/js/main.js`, état `aria-pressed` et annonces des résultats |
| Ajouter de vraies études de cas | Quatre pages internes, avec contexte, architecture, décisions, validation et limites |
| Présenter le POC RAG et sa ground truth correctement | Page RAG avec métriques sourcées, limites, spécificité de l'évaluation et q08 |
| Ne pas confondre POC et MVP | Distinction explicite dans la fiche RAG |
| Limiter les cartes vides | Toutes les cartes ouvrent une page technique; aucune carte « en préparation » |
| Donner des accès aux preuves | Liens externes vers code, rapports et captures pour RAG; demandes de livrables pour les trois autres |
| Inclure contact, LinkedIn et CV | Email, LinkedIn, GitHub fonctionnels; CV demandé par email tant que PDF absent |
| Améliorer tailles typographiques | Texte courant à 16 px, corps des cartes proche de 16 px, titres hiérarchisés |
| Améliorer mobile et clavier | Grilles responsive, focus visible, lien « aller au contenu », contrôles natifs |
| Gérer les animations réduites | Media query `prefers-reduced-motion` |
| Organiser la base de code | HTML par page, CSS, JS, images et documentation séparés |
| Préserver une architecture évolutive | Modèle Markdown d'étude de cas; sections distinctes |
| Aucun projet de doctorat ou ancien projet d'infrastructure | Non affichés |
| Retirer les étiquettes de brouillon sur le site | Aucune étiquette de statut du prototype dans l'interface |

## Travaux de preuve encore nécessaires

- Obtenir les dépôts ou rapports de projets météo, MongoDB et Kestra pour vérifier indépendamment les descriptions et ajouter leurs captures réelles.
- Recevoir le CV PDF définitif pour remplacer le lien email de demande de CV.
- Vérifier le lien LinkedIn dans un navigateur authentifié.
- Tester les liens externes en ligne au moment d'une éventuelle diffusion.
- Contrôler la présentation sur les principaux navigateurs et passer Lighthouse / axe avant diffusion.

Ces points ne sont pas déclarés validés sans preuve. Aucun changement de visibilité du dépôt ou publication externe n'est effectué avec cet archive.
