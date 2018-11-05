# Exercice 4 : React Router

## Instructions

Nous souhaitons pouvoir accéder au détail d'un film. Pour cela nous allons mettre en place du routing afin d'avoir une page "Home" et une page "MovieDetail".

### Installation

- Installer `react-router-dom`
- Mettre en place le `BrowserRouter` dans `index.js`

### Route "/"

- Créer un dossier `src/routes`
- Déplacer le composant `RecommendedMovies` dans `src/routes` et le renommer en `Home`
- Mettre en place la route "/" pointant sur `Home` dans `App`
- Ajouter un lien vers "/" sur le header de l'application

### Route "/movies/:movieId"

- Créer un composant `MovieDetail` dans le dossier `src/routes`
- Mettre en place la route "/movies/:movieId" pointant sur `MovieDetail` dans `App`
- Faire en sorte que `MovieDetail` affiche le détail d'un film à l'aide de l'API (`https://api.themoviedb.org/3/movie/MOVIE_ID?api_key=c5742978852b8f695a61e22a33a8196c`). Pour afficher le film, vous pourrez utiliser le composant `MovieCard`.
- Modifier le composant `Home` afin d'ajouter des liens sur chacun des films

**Résultat attendu**

- En arrivant sur "http://localhost:3000/" j'ai accès à la liste des films
- Lorsque je clique sur un film j'ai accès au détail du film
- Je peux retourner sur la liste des films en cliquant sur le header "Smoothflix"

## Aide

```js
// Mise en place de BrowserRouter
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root'),
)
```

```js
// Mise en place des routes
import { Route } from 'react-router-dom'

const MyApp = () => (
  <div>
    <header>Fixed header</header>
    <Route exact path="/" component={Home} />
    <Route path="/users/:userId" component={UserDetail} />
  </div>
)
```

```js
// Récupération du détail d'un film
async componentDidMount() {
  try {
    const result = await axios.get(
      `https://api.themoviedb.org/3/movie/${
        this.props.match.params.movieId
      }?api_key=c5742978852b8f695a61e22a33a8196c`,
    )
    this.setState({ result })
  } catch (error) {
    this.setState({ error })
  }
}
```
