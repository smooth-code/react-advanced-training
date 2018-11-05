# Exercice 3 : Data fetching

## Instructions

Maintenant que nous avons une interface fonctionnelle, nous souhaitons récupérer les données à partir de l'API de [themoviedb.org](https://developers.themoviedb.org/3/discover/movie-discover).

- Installer `axios`
- Créer un composant `RecommendedMovies`
  - Pendant le chargement des films un message "Loading..." sera affiché
  - On affichera une erreur si le chargement échoue
  - Si tout se passe bien on affichera la liste des films

URL de l'API : `https://api.themoviedb.org/3/discover/movie?api_key=c5742978852b8f695a61e22a33a8196c`

- Afficher le composant `RecommendedMovies` dans `App`

**Résultat attendu**

![Résultat](ex-3-result.png)

## Aide

```js
// Exemple de data fetching en React
import React from 'react'
import axios from 'axios'

class Users extends React.Component {
  state = { error: null, result: null }

  async componentDidMount() {
    try {
      const result = await axios.get('/characters.json')
      this.setState({ result })
    } catch (error) {
      this.setState({ error })
    }
  }

  render() {
    if (this.state.error) return <div>Oups!</div>
    if (this.state.result)
      return (
        <div>
          {this.state.result.map(user => (
            <div key={user.id}>{user.name}</div>
          ))}
        </div>
      )
    return <div>Loading...</div>
  }
}
```
