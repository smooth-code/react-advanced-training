import { reducer } from './store'
import { like, unlike } from './ActionCreators'

describe('Redux store', () => {
  describe('#like', () => {
    it('should set `movieLikes.{movieId}` to true', () => {
      expect(reducer({ movieLikes: {} }, like(10))).toEqual({
        movieLikes: { '10': true },
      })
    })
  })

  describe('#unlike', () => {
    it('should set `movieLikes.{movieId}` to false', () => {
      expect(reducer({ movieLikes: {} }, unlike(10))).toEqual({
        movieLikes: { '10': false },
      })
    })
  })
})
