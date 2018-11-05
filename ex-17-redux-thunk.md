# Exercice 17 : Redux Thunk

## Instructions

Nous souhaitons mettre également les films dans Redux afin d'éviter les requêtes multiples. Nous allons stocker les requêtes dans le state dans un objet `fetchStates`, la clef sera le `path` et la valeur sera l'état : `{ progress, result, error }`.

- Créer un nouveau `ActionType` : `FETCH_STATE`
- Créer un nouveau `ActionCreator` : `fetchApi(path, apiKey)`, cette action sera responsable du fetching des données, elle dispatchera trois actions :

  - Une avant de lancer la requête : `{ type: FETCH_STATE, path, state: { progress: true } }`
  - Une si la requête est en succès : `{ type: FETCH_STATE, path, state: { result } }`
  - Une si la requête est en erreur : `{ type: FETCH_STATE, path, state: { error } }`

- Mettre à jour le store afin de gérer l'action `FETCH_STATE`
- Modifier le hoc `fetchMovieDb` pour qu'il émette l'action `fetchApi()` et récupère les données depuis le store

**Résultat attendu**

Il n'y a qu'une seule requête, même au changement de page.

## Aide

```js
// Installation de redux-thunk
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

const store = createStore(
  reducer,
  initialState,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : f => f,
  ),
)
```

```js
// fetchMovieDb.js
import React from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import { connect } from 'react-redux'
import { fetchApi } from '../redux/ActionCreators'

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component'
}

export class FetchProvider extends React.Component {
  static childContextTypes = {
    apiKey: PropTypes.string.isRequired,
  }

  getChildContext() {
    return { apiKey: this.props.apiKey }
  }

  render() {
    return this.props.children
  }
}

const fetchMovieDb = path => Component => {
  class MovieDbFetcher extends React.Component {
    static contextTypes = {
      apiKey: PropTypes.string.isRequired,
    }

    componentWillMount() {
      if (!this.props.fetchState.result)
        this.props.onFetchApi(this.context.apiKey)
    }

    render() {
      const { fetchState, ...props } = this.props
      return <Component {...props} {...fetchState} />
    }
  }
  MovieDbFetcher.displayName = `fetchMovieDb(${getDisplayName(Component)})`
  return connect(
    (state, ownProps) => {
      const resolvedPath = typeof path === 'function' ? path(ownProps) : path
      return {
        fetchState: state.fetchStates[resolvedPath] || { progress: true },
        resolvedPath,
      }
    },
    null,
    ({ resolvedPath, fetchState }, { dispatch }, ownProps) => ({
      onFetchApi: apiKey => dispatch(fetchApi(resolvedPath, apiKey)),
      fetchState,
      ...ownProps,
    }),
  )(MovieDbFetcher)
}

export default fetchMovieDb
```
