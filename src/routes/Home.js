import React from 'react'
import styled, { keyframes } from 'styled-components'
import { Route, Link } from 'react-router-dom'
import fetchMovieDb from '../hoc/fetchMovieDb'
import About from './About'
import MovieList from '../components/MovieList'
import MovieCard from '../components/MovieCard'
import Countdown from '../components/Countdown'

const Loading = styled('div')`
  font-size: 20px;
  color: #888;
  margin: 20px;
  text-align: center;
`

const expandAnimation = keyframes`
  from {
    transform: scale(1);
  }
  to {
    transform: scale(3);
  }
`

const Count = styled('div')`
  font-size: 60px;
  font-weight: 300;
  color: white;
  margin: 50px;
  text-align: center;
  animation: ${expandAnimation} 500ms;
`

const Home = ({ error, result }) => (
  <Countdown initialValue={3} delay={500}>
    {({ value }) => {
      if (value !== 0) return <Count key={value}>{value}</Count>
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
    }}
  </Countdown>
)

export default fetchMovieDb('/discover/movie')(Home)
