# Exercice 8 : Jest

## Instructions

Nous souhaitons tester notre application à l'aide de snapshots.

- Installer `react-test-renderer` et `jest-styled-components`
- Supprimer `App.test.js`
- Créer un fichier `src/setupTests.js` avec `import 'jest-styled-components'`
- Créer un fichier `MovieVote.test.js` qui testera le composant à l'aide de snapshots

**Résultat attendu**

```
$ npm test

PASS  src/components/MovieVote.test.js
 MovieVote
   ✓ should render vote (6ms)
```
