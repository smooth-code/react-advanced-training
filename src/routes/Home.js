import React from 'react'
import styled from 'styled-components'
import { Route, Link } from 'react-router-dom'
import fetchMovieDb from '../hoc/fetchMovieDb'
import About from './About'
import MovieList from '../components/MovieList'
import MovieCard from '../components/MovieCard'

const Loading = styled('div')`
  font-size: 20px;
  color: #888;
  margin: 20px;
  text-align: center;
`

const Home = ({ error, result }) => {
  if (error) return <div>Oups!</div>
  if (result)
    return (
      <React.Fragment>
        <MovieList>
          {result.data.results.map(movie => (
            <Link to={`/movies/${movie.id}`} key={movie.id}>
              <MovieCard movie={movie} />
            </Link>
          ))}
        </MovieList>
        <Route path="/about" component={About} />
      </React.Fragment>
    )
  return <Loading>Loading...</Loading>
}

export default fetchMovieDb('/discover/movie')(Home)
