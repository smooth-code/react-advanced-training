import React from 'react'
import renderer from 'react-test-renderer'
import MovieVote from './MovieVote'

describe('MovieVote', () => {
  it('should render vote', () => {
    const component = renderer.create(
      <MovieVote movie={{ vote_average: 5.4, vote_count: 2123 }} />,
    )
    expect(component.toJSON()).toMatchSnapshot()
  })
})
