import { LIKE, UNLIKE } from './ActionTypes'

export const like = movieId => ({ type: LIKE, movieId })
export const unlike = movieId => ({ type: UNLIKE, movieId })
