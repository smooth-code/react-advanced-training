import axios from 'axios'
import { LIKE, UNLIKE, FETCH_STATE } from './ActionTypes'

export const like = movieId => ({ type: LIKE, movieId })
export const unlike = movieId => ({ type: UNLIKE, movieId })
export const fetchApi = (path, apiKey) => async dispatch => {
  dispatch({ type: FETCH_STATE, path, state: { progress: true } })
  try {
    const result = await axios.get(
      `https://api.themoviedb.org/3${
        typeof path === 'string' ? path : path(this.props)
      }?api_key=${apiKey}`,
    )
    dispatch({ type: FETCH_STATE, path, state: { result } })
  } catch (error) {
    dispatch({ type: FETCH_STATE, path, state: { error } })
  }
}
