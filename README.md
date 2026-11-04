# Hassna El-Bousiydy | Data Engineering & Applied AI

Portfolio professionnel statique en français, consacré dans cette version aux projets réalisés pendant la formation Data Engineer OpenClassrooms (2025-2026).

Cette version est indépendante du projet d'infrastructure précédent. Les travaux de doctorat et de recherche n'y sont pas intégrés, mais la structure permet d'ajouter d'autres études de cas par la suite.

## Voir le site sur son ordinateur

Ouvrir `index.html` dans Chrome, Firefox ou Edge. Aucun logiciel ni serveur n'est nécessaire, aucune clé API n'est utilisée.

## Structure du projet

```text
index.html
README.md
.gitignore
assets/
  css/styles.css
  js/main.js
  img/
    portrait-hassna.webp
    hassna-au-travail.webp
    favicon.svg
    rag-pipeline.svg
    weather-pipeline.svg
    mongo-pipeline.svg
    kestra-pipeline.svg
projets/
  puls-events-rag.html
  pipeline-meteo.html
  migration-mongodb.html
  orchestration-kestra.html
docs/
  CONTROLE_QUALITE.md
  MODELE_FICHE_PROJET.md
```

## Mettre à jour le dépôt GitHub existant

1. Faire une sauvegarde locale du dossier actuel, par exemple en le copiant ailleurs.
2. Télécharger et décompresser **Portfolio_Hassna_V2.zip**.
3. Copier **tout le contenu** du dossier extrait dans votre dossier Git local `Portfolio_HTML`. Accepter le remplacement de `index.html` et `README.md`. **Ne pas supprimer le dossier caché `.git` existant.**
4. Ouvrir PowerShell dans `Portfolio_HTML`, puis exécuter :

```powershell
git status --short
git add index.html README.md .gitignore assets projets docs
git diff --cached --check
git commit -m "Redesign portfolio with case studies and photos"
git push
```

Aucun réglage de publication GitHub Pages n'est requis pour cette étape. Le site peut rester en local et dans le dépôt existant. La diffusion du site relève d'une décision ultérieure de la propriétaire.

## Ajouter un nouveau projet

1. Dupliquer une page existante de `projets/`, puis changer le titre, la présentation, les décisions techniques et les preuves.
2. Ajouter une carte correspondante dans `index.html` et choisir `data-category="ia"`, `"pipeline"` ou `"database"`.
3. Mettre un lien réel vers le nouveau fichier `projets/xxx.html`.
4. Ajouter les captures ou diagrammes dans `assets/img/` et vérifier leur provenance.
5. Contrôler les liens, le mobile et les résultats avant de faire un nouveau commit.

Le fichier `docs/MODELE_FICHE_PROJET.md` fournit la grille de rédaction.

## Vérifications des contenus, à finaliser avec les livrables

- **Puls-Events RAG** : données et métriques issues du [README du dépôt de POC](https://github.com/Hassna-elbousiydy/Puls_Events_RAG). Snapshot du 21/09/2026 : 12 763 événements, 14 547 chunks, 74 tests réussis, MRR 0,9545, faithfulness 0,9160 et context recall 0,7740. Il s'agit de résultats de POC, non du MVP.
- **Pipeline météo, MongoDB et Kestra** : pages rédigées à partir des éléments de travail déjà évoqués dans le parcours. Leurs dépôts, captures, rapports et métriques finaux n'ont pas été joints à cette livraison. **Avant d'en faire un portfolio public, relire ces trois pages avec leurs livrables originaux et relier leurs preuves exactes.** Aucun chiffre de performance non vérifié n'a été inventé.
- **CV** : aucun fichier PDF de CV n'était joint. Le lien « Demander mon CV » ouvre donc un email réellement fonctionnel au lieu d'un téléchargement cassé. Pour proposer ensuite le CV en direct, ajouter un fichier `assets/CV_Hassna_ElBousiydy.pdf` et remplacer le lien dans `index.html`.
- **Photos** : les deux photos ont été fournies par la propriétaire. Elles ont été uniquement redimensionnées/compressées en WebP, sans modification de ses traits.
- **Contacts** : email, compte GitHub et lien LinkedIn tirés des coordonnées transmises par la propriétaire dans ses échanges professionnels. Contrôler le lien LinkedIn dans un navigateur avant toute diffusion externe.

## Guide de design

Palette claire ivoire, rose poudré, lavande et vert sauge, avec texte prune foncé et boutons à contraste marqué. Pas de thème cosmique sombre ni de bandeau « version privée » visible.

Les choix de contraste, de mise à l'échelle et de prise en compte des animations réduites se fondent sur [WCAG 2.2](https://www.w3.org/TR/WCAG22/). La direction éditoriale (projets proches de l'accueil, hiérarchie typographique, mise en avant des études de cas) est cohérente avec les usages documentés dans [Portfolio Design Trends 2026](https://elements.envato.com/learn/portfolio-trends) et l'[exemple de refonte de portfolio 2026](https://www.alexanderhorner.com/work/portfolio-2026). Il s'agit d'inspirations et non de garanties d'impact sur le recrutement.

## Dépendances

Aucune. HTML, CSS et JavaScript natifs. Le code est modifiable avec VS Code ou tout éditeur de texte.
