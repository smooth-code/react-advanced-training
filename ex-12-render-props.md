# Exercice 12 : Render props

## Instructions

Nous souhaitons faire un compte à rebours au chargement de la page d'accueil. Pour cela nous allons créer un composant générique à l'aide du pattern "render props".

* Créer un composant `Countdown` acceptant trois propriétés :

  * `render`, la fameuse render props appelée avec le `count` courant
  * `delay`, le délai entre chaque tick
  * `initialValue`, la valeur à laquelle le compte à rebours commence

* Utiliser ce composant dans `Home` pour afficher un compte à rebours avant d'afficher les films

**Résultat attendu**

![Résultat](ex-12-result.gif)

## Aide

```js
// Countdown.js
import React from 'react'

class Countdown extends React.Component {
  constructor(props) {
    super(props)
    this.state = { value: this.props.initialValue }
  }

  componentDidMount() {
    this.tick()
  }

  tick() {
    setTimeout(() => {
      if (this.state.value === 0) return
      this.setState(/* TODO */)
      this.tick()
    }, this.props.delay)
  }

  render() {
    /* TODO */
  }
}

export default Countdown
```
