import { createStore } from 'redux'
import { LIKE, UNLIKE } from './ActionTypes'

export const initialState = { movieLikes: {} }

export const reducer = (state, action) => {
  switch (action.type) {
    case LIKE:
      return {
        ...state,
        movieLikes: { ...state.movieLikes, [action.movieId]: true },
      }
    case UNLIKE:
      return {
        ...state,
        movieLikes: { ...state.movieLikes, [action.movieId]: false },
      }
    default:
      return state
  }
}

export default createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)
