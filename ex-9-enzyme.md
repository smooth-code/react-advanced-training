# Exercice 9 : Enzyme

## Instructions

Nous souhaitons tester notre application à l'aide de [Enzyme](https://github.com/airbnb/enzyme).

* Installer `enzyme` et `enzyme-adapter-react-16`
* Configurer Enzyme dans `setupTests.js`
* Tester `MovieCard` avec enzyme :
  * Vérifier qu'il affiche le `title` du film
  * Vérifier qu'il affiche le `overview` du film
  * Vérifier qu'il contient un composant `MovieVote` avec une propriété `movie`

**Résultat attendu**

```
$ npm test

PASS  src/components/MovieCard.test.js
PASS  src/components/MovieVote.test.js
```

## Aide

```js
// setupTests.js
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import 'jest-styled-components'

configure({ adapter: new Adapter() })
```

```js
// MovieCard.test.js
import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'
import MovieCard from './MovieCard'

describe('MovieCard', () => {
  it('should render vote', () => {
    const movie = {
      title: 'It',
      overview: 'Come on Georgie! Pop pop pop!',
      vote_average: 7.1,
      vote_count: 6124,
      backdrop_path: '/tcheoA2nPATCm2vvXw2hVQoaEFD.jpg',
    }
    const wrapper = shallow(<MovieCard movie={movie} />)
    /* TODO expect(...) */
  })
})
```
