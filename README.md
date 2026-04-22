# Pilotage de projet IA & Big Data — ANSUT

Cours interactif Reveal.js — Formation IDSI Alumni + sessions internes ANSUT.  
Durée : **2H** · ~45 slides · 20 questions QCM auto-corrigées.

## Lancement local

```bash
cd cours-ia-bigdata
python -m http.server 8080
# Ouvrir : http://localhost:8080
```

Ou avec Node.js :
```bash
npx serve .
```

## Déploiement GitHub Pages

```bash
git init
git add .
git commit -m "Initial commit — cours IA Big Data ANSUT"
git branch -M main
git remote add origin https://github.com/VOTRE_USERNAME/cours-ia-bigdata.git
git push -u origin main
# Activer GitHub Pages : Settings → Pages → Branch: main / root
```

## Déploiement Vercel

```bash
npx vercel --prod
```

## Structure

```
cours-ia-bigdata/
├── index.html              # Présentation complète (seul fichier à modifier)
├── assets/
│   ├── css/
│   │   ├── theme-ansut.css # Thème ANSUT (couleurs, typo, layout)
│   │   └── quiz.css        # Styles du composant QCM
│   ├── js/
│   │   ├── quiz.js         # Moteur QCM (feedback, score, sessionStorage)
│   │   └── quiz-data.js    # 20 questions (modifier ici pour personnaliser)
│   └── images/             # Placer le logo ANSUT ici (logo-ansut.png)
└── README.md
```

## Ajouter une question QCM

Ouvrir `assets/js/quiz-data.js` et ajouter dans le bon chapitre :

```javascript
{
  id: "c1q4",                          // ID unique (chapitre + numéro)
  question: "Votre question ici ?",
  options: ["Option A", "Option B", "Option C", "Option D"],
  correct: 0,                          // Index (0=A, 1=B, 2=C, 3=D)
  explanation: "Explication pédagogique affichée après la réponse."
}
```

Puis ajouter la slide correspondante dans `index.html` :

```html
<section class="quiz-slide" data-quiz="c1q4">
  <div id="quiz-c1q4" class="quiz-container"></div>
</section>
```

## Raccourcis clavier

| Touche | Action |
|--------|--------|
| `→` / `Space` | Slide suivante |
| `←` | Slide précédente |
| `F` | Plein écran |
| `S` | Notes orateur |
| `ESC` | Vue d'ensemble |
| `Ctrl+F` | Recherche (plugin Search) |

## Logo ANSUT

Placer le fichier `logo-ansut.png` dans `assets/images/`, puis remplacer dans `index.html` :

```html
<!-- Remplacer le div .slide-logo par : -->
<img src="assets/images/logo-ansut.png" class="slide-logo" alt="ANSUT" style="height:32px;">
```

## Reset QCM

Le score QCM est stocké en `sessionStorage` (effacé à la fermeture de l'onglet).  
Pour réinitialiser manuellement, utiliser le bouton "Recommencer le QCM" sur la slide de score final,  
ou dans la console du navigateur : `QuizEngine.reset(); location.reload();`
