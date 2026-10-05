# Portfolio de Nadira (HTML + CSS)

Site statique bilingue FR/EN, en HTML et CSS (un seul mini-script, `js/nav.js`, pour garder `#home` dans l'adresse), reproduisant la maquette Canva :
barre de navigation blanche, accueil rouge, bandeaux jaunes défilants, sections À propos / Projects / Contact.

Ouvrez `index.html` dans un navigateur (il redirige vers `fr/index.html`).

## Structure

```
index.html          redirige vers fr/index.html
css/style.css       tous les styles (couleurs en haut : --red, --yellow, --black)
js/nav.js           garde #home dans l'adresse quand on clique sur le menu
                    (pour revenir à du HTML/CSS pur : supprimez ce fichier et les
                    lignes <script src="../js/nav.js"> dans les pages ; les liens
                    fonctionneront, l'adresse affichera alors #about, #projects…)
assets/             logo.png, illustration.png, photo.jpg
fr/index.html       page principale en français
fr/project-1.html   détail du projet 1 (idem 2 et 3)
en/                 même contenu en anglais
```

## À faire pour finaliser

1. **Images** : `assets/logo.png`, `illustration.png` et `photo.jpg` ont été recadrées depuis vos captures d'écran, donc de qualité moyenne. Remplacez-les par vos fichiers originaux exportés depuis Canva (PNG, fond transparent pour le logo et l'illustration) en gardant les mêmes noms.
2. **Contact** : cherchez `votre.email@exemple.com` et `votre-profil` dans `fr/` et `en/` et remplacez par votre e-mail et votre URL LinkedIn.
3. **Projets** : remplacez les 3 projets d'exemple (titres, descriptions, lien GitHub) dans `fr/index.html`, `fr/project-N.html` et leurs équivalents `en/`. Pour en ajouter un, copiez un `project-N.html` et ajoutez un bloc `<a class="card" ...>` dans la section projets de `index.html`.
4. **Police** : Montserrat est chargée depuis Google Fonts (connexion internet requise, sinon une police système est utilisée).

## Mise en ligne

Site 100 % statique : GitHub Pages, Netlify, Vercel ou tout hébergeur de fichiers. Envoyez simplement le dossier complet.
