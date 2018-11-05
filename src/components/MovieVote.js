import React from 'react'
import styled from 'styled-components'

const Count = styled('span')`
  font-size: 0.8em;
`

const MovieVote = ({ movie }) => (
  <>
    {movie.vote_average} / 10 <Count>({movie.vote_count} votes)</Count>
  </>
)
export default MovieVote
