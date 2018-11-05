import React from 'react'
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
    expect(wrapper.contains('It')).toBe(true)
    expect(wrapper.contains('Come on Georgie! Pop pop pop!')).toBe(true)
    expect(wrapper.find('MovieVote').prop('movie')).toBe(movie)
  })
})
