import React from 'react'
import styled from 'styled-components'
import fetchMovieDb from '../hoc/fetchMovieDb'
import MovieCard from '../components/MovieCard'

const Loading = styled('div')`
  font-size: 20px;
  color: #888;
  margin: 20px;
  text-align: center;
`

const MovieDetail = ({ error, result }) => {
  if (error) return <div>Oups!</div>
  if (result) return <MovieCard movie={result.data} />
  return <Loading>Loading...</Loading>
}

export default fetchMovieDb(props => `/movie/${props.match.params.movieId}`)(
  MovieDetail,
)
