# Exercice 15 : React Redux

## Instructions

Nous souhaitons connecter notre store Redux à React afin d'ajouter / supprimer des favoris.

- Désactiver le countdown (démarrer à 0)
- Installer `react-redux`
- Provider le store dans `index.js`
- Ajouter un composant `Like` à votre `MovieCard` qui réagira à une propriété `active`, il changera de couleur par exemple
- Connecter `MovieCard` à votre store Redux

**Résultat attendu**

![Résultat](ex-15-result.png)

## Aide

```js
// Provider un store
import { Provider } from 'react-redux'
import store from './redux/store'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
)
```

```js
// Exemple de composant Like
const Like = styled('div')`
  color: ${p => (p.active ? `red` : 'rgba(0, 0, 0, 0)')};
  font-size: 25px;
  position: absolute;
  right: 10px;
  text-shadow: 0px 0px #fff;
`

<Like active onClick={...}>❤️</Like>
<Like active={false} onClick={...}>❤️</Like>
```

```js
// Export de MovieCard
export default connect(
  (state, ownProps) => ({
    /* TODO */
  }),
  (dispatch, ownProps) => ({
    /* TODO */
  }),
  (stateProps, dispatchProps, ownProps) => ({
    /* TODO */
  }),
)(MovieCard)
```
