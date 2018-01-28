# Exercice 14 : Redux

## Instructions

Nous souhaitons ajouter Redux à notre application afin d'y stocker une liste de favoris qui sera centralisée dans toute l'application.

* Installer `redux`
* Créer un fichier `redux/ActionTypes.js` qui exposera les types action

  * Ajouter deux types d'actions : "LIKE", "UNLIKE"

* Créer un fichier `redux/ActionCreators.js` qui exposera les actions creator

  * Ajouter deux créateurs d'action : `like(movieId)` et `unlike(movieId)`

* Créer un fichier `redux/store.js` qui exposera le store Redux (voir aide)
* Faire en sorte que les tests passent `redux/store.test.js` (voir aide)

**Résultat attendu**

```
$ npm test
PASS  src/redux/store.test.js
 Redux store
   #like
     ✓ should set `movieLikes.{movieId}` to true (1ms)
   #unlike
     ✓ should set `movieLikes.{movieId}` to false
```

## Aide

```js
// store.js
import { createStore } from 'redux'
import { LIKE, UNLIKE } from './ActionTypes'

export const initialState = { movieLikes: {} }

export const reducer = (state, action) => {
  switch (action.type) {
    case LIKE:
    /* TODO */
    case UNLIKE:
    /* TODO */
    default:
      return state
  }
}

export default createStore(reducer, initialState)
```

```js
import { reducer } from './store'
import { like, unlike } from './ActionCreators'

describe('Redux store', () => {
  describe('#like', () => {
    it('should set `movieLikes.{movieId}` to true', () => {
      expect(reducer({ movieLikes: {} }, like(10))).toEqual({
        movieLikes: { '10': true },
      })
    })
  })

  describe('#unlike', () => {
    it('should set `movieLikes.{movieId}` to false', () => {
      expect(reducer({ movieLikes: {} }, unlike(10))).toEqual({
        movieLikes: { '10': false },
      })
    })
  })
})
```
