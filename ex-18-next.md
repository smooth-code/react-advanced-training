# Exercice 18 : Next

## Instructions

Nous souhaitons essayer [Next](https://github.com/zeit/next.js/).

* Installer `next`
* Créer un dossier `pages` et un composant dans `pages/index.js`
* Lancer Next : `npx next`

**Résultat attendu**

Votre composant s'affiche, en inspectant la page vous voyez également le résultat.

## Aide

```js
// index.js
export default () => (
  <div>
    <p>Hello world!</p>
    <style jsx>{`
      p {
        font-size: 40px;
      }
    `}</style>
  </div>
)
```
