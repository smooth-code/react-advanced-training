# Exercice 13 : Optimisations

## Instructions

Nous souhaitons optimiser notre application pour qu'elle soit toujours fluide. Pour cela nous allons utiliser le `PureComponent`.

* Transformer `MovieCard` en `PureComponent`

**Résultat attendu**

Aucun changement, votre application est plus fluide.

## Aide

```js
// Composant Home modifié afin de stresser l'application
// Toutes les 10ms, la liste est re-rendue
const Home = ({ error, result }) => (
  <Countdown
    initialValue={1000}
    delay={10}
    render={({ value }) => {
      // if (value !== 0) return <Count key={value}>{value}</Count>
      if (error) return <div>Oups!</div>
      if (result)
        return (
          <React.Fragment>
            <Count key={value}>{value}</Count>
            <MovieList>
              {result.data.results.map(movie => (
                <Link to={`/movies/${movie.id}`} key={movie.id}>
                  <MovieCard movie={movie} />
                </Link>
              ))}
            </MovieList>
            <Route path="/about" component={About} />
          </React.Fragment>
        )
      return <Loading>Loading...</Loading>
    }}
  />
)
```
