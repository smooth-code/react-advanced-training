# Exercice 11 : Context

## Instructions

Le hoc créé dans l'exercice précédent comporte un défaut, la clef de l'API est incluse dans le code. Nous ne souhaitons pas la passer à chaque appel, grâce au contexte nous allons pouvoir la renseigner une seule fois.

* Créer un composant `FetchProvider` dans `fetchMovieDb.js` qui s'utilisera de la manière suivante :

```js
ReactDOM.render(
  <FetchProvider apiKey="c5742978852b8f695a61e22a33a8196c">
    <App />
  </FetchProvider>
  document.getElementById('root'),
)
```

Il aura pour effet d'ajouter l'entrée `apiKey` au contexte.

* Modifier le hoc `fetchMovieDb` pour qu'il aille chercher la clef d'API dans le contexte (ce sera le consumer)

**Résultat attendu**

L'application doit fonctionner comme auparavant.

## Aide

```js
// Exemple de Provider / Consumer
import React from 'react'
import PropTypes from 'prop-types'

class Provider extends React.Component {
  static childContextTypes = { color: PropTypes.string }

  getChildContext() {
    return { color: 'purple' }
  }

  render() {
    return this.props.children
  }
}

class Consumer extends React.Component {
  static contextTypes = { color: PropTypes.string }

  render() {
    return <div style={{ color: this.context.color }}>Hello</div>
  }
}
```
