import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { Route, Link } from 'react-router-dom'
import About from './About'
import MovieList from '../components/MovieList'
import MovieCard from '../components/MovieCard'

const Loading = styled('div')`
  font-size: 20px;
  color: #888;
  margin: 20px;
  text-align: center;
`

class RecommendedMovies extends React.Component {
  state = { error: null, result: null }

  async componentDidMount() {
    try {
      const result = await axios.get(
        'https://api.themoviedb.org/3/discover/movie?api_key=c5742978852b8f695a61e22a33a8196c',
      )
      this.setState({ result })
    } catch (error) {
      this.setState({ error })
    }
  }

  render() {
    if (this.state.error) return <div>Oups!</div>
    if (this.state.result)
      return (
        <>
          <MovieList>
            {this.state.result.data.results.map(movie => (
              <Link to={`/movies/${movie.id}`} key={movie.id}>
                <MovieCard movie={movie} />
              </Link>
            ))}
          </MovieList>
          <Route path="/about" component={About} />
        </>
      )
    return <Loading>Loading...</Loading>
  }
}

export default RecommendedMovies
