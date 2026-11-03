# Portfolio privé de formation | Hassna El-Bousiydy

Brouillon v0.1 du portfolio de formation Data Engineer OpenClassrooms (2025-2026).

## Ouvrir localement

Ouvrir `index.html` dans le navigateur. Aucun framework, serveur, installation ou accès Internet nécessaire pour le rendu.

Alternative PowerShell depuis le dossier extrait :

```powershell
Start-Process .\index.html
```

## Fichiers

- `index.html`: structure du contenu (intro, projets, navigation)
- `assets/styles.css`: identité visuelle, couleurs et responsive
- `assets/app.js`: boutons de filtrage des projets
- `docs/`: emplacement pour les fiches, livrables et preuves vérifiées

## Confidentialité

Ne PAS activer GitHub Pages avant validation : un site GitHub Pages peut être publiquement accessible même si son dépôt est privé. Le site reste actuellement un brouillon local.

En cas de dépôt GitHub : créer un dépôt neuf en visibilité **Private**, vérifier la visibilité avant toute publication, ne pas activer Pages, ne pas inclure de secrets ni de données privées.

## Contenu restant à vérifier

Le dépôt Puls-Events RAG et ses chiffres sont accessibles publiquement. Les autres cartes sont des descriptions de travail fondées sur le parcours déjà évoqué, non encore étayées par leurs liens et preuves. Compléter chaque projet avec une fiche et son dépôt ou un livrable vérifié. Ne pas prétendre qu'une mission conçue est déjà déployée.

## Comment ajouter un projet

1. Copier un bloc `<article class="project-card" ...>` dans `index.html`.
2. Modifier le titre, le besoin, les technologies, les preuves et la catégorie `data-cat`.
3. Remplacer le libellé `Preuves à relier` et ajouter un lien uniquement lorsque le dépôt ou le livrable est vérifié.
4. Ne pas publier de documents confidentiels.

## Evolution future

Ajouter après la formation une section indépendante `Recherche & projets professionnels`, sans modifier les projets de formation. Aucune réalisation doctorale n'est présentée dans cette version.

## Sources et design

Conception originale inspirée uniquement par l'organisation de références partagées (sans reprise de code ni d'images): https://nonodata.github.io/ et https://minervarose.github.io/.

Documentation GitHub Pages : https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site
