import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { LIKE, UNLIKE, FETCH_STATE } from './ActionTypes'

export const initialState = { movieLikes: {}, fetchStates: {} }

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
    case FETCH_STATE:
      return {
        ...state,
        fetchStates: {
          ...state.fetchStates,
          [action.path]: action.state,
        },
      }
    default:
      return state
  }
}

export default createStore(
  reducer,
  initialState,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : f => f,
  ),
)
