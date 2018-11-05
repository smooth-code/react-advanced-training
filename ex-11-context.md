# Exercice 11 : Context

## Instructions

Le HOC créé dans l'exercice précédent comporte un défaut, la clef de l'API est incluse dans le code. Nous ne souhaitons pas la passer à chaque appel, grâce au contexte nous allons pouvoir la renseigner une seule fois.

- Créer un composant `FetchProvider` dans `fetchMovieDb.js` qui s'utilisera de la manière suivante :

```js
ReactDOM.render(
  <FetchProvider apiKey="c5742978852b8f695a61e22a33a8196c">
    <App />
  </FetchProvider>
  document.getElementById('root'),
)
```

Il aura pour effet d'ajouter l'entrée `apiKey` au contexte.

- Modifier le hoc `fetchMovieDb` pour qu'il aille chercher la clef d'API dans le contexte (ce sera le consumer)

**Résultat attendu**

L'application doit fonctionner comme auparavant.

## Aide

```js
// Exemple de création de contexte
import React from 'react'
import PropTypes from 'prop-types'

// Création d'un contexte avec pour couleur par défaut "black"
const Context = React.createContext({ color: 'black' })

// Exemple de provider
const ColorProvider = ({ color, children }) => (
  <Context.Provider value={{ color }}>{children}</Context.Provider>
)

// Exemple de consumer
const ColoredText = ({ children }) => (
  <Context.Consumer>
    {({ color }) => <div style={{ color }}>{children}</div>}
  </Context.Consumer>
)
```
