# Exercice 10 : Higher Order Components

## Instructions

Nous souhaitons faire en sorte de réutiliser le maximum de code dans notre application. Nous allons factoriser le code en utilisant la puissance des Higher Order Components. Le but est de mettre la logique permettant de récupérer des données à un seul endroit.

* Créer un dossier `/src/hoc`
* Créer un Higher Order Component `fetchMovieDb.js` qui aura pour responsabilité d'aller récupérer des données sur [api.themoviedb.org](https://developers.themoviedb.org/)

  * Il pourra accepter un `path` sous forme de string ou sous forme de fonction :

```js
// Passage d'une url (Home)
fetchMovieDb('/discover/movie')(Home)

// Passage d'une fonction (MovieDetail)
fetchMovieDb(props => `/movie/${props.match.params.movieId}`)(MovieDetail)
```

* Il injectera trois propriétés : `error`, `result` et `progress` :

```js
fetchMovieDb('/discover/movie')(({ error, result, progress }) => {
  if (progress) return 'Loading..'
  if (result) return result.data.movies.map(/* ... */)
  if (error) return 'Error'
  return 'Impossible!'
})
```

* Utiliser `fetchMovieDb` dans `Home` et `MovieDetail`

**Résultat attendu**

Le projet doit fonctionner comme auparavant.

## Aide

```js
// fetchMovieDb.js
import React from 'react'
import axios from 'axios'

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component'
}

const fetchMovieDb = path => Component => {
  class MovieDbFetcher extends React.Component {
    /* TODO */
  }
  MovieDbFetcher.displayName = `fetchMovieDb(${getDisplayName(Component)})`
  return MovieDbFetcher
}

export default fetchMovieDb
```
