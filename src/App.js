import React, { Component } from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { globalStyle } from '@smooth-ui/core-sc'
import movies from './movies.json'
import MovieList from './components/MovieList'
import MovieCard from './components/MovieCard'

const GlobalStyle = createGlobalStyle`
  ${globalStyle()}

  body {
    background-color: #141414;
  }
`

const Header = styled.header`
  font-size: 40px;
  font-weight: 800;
  text-align: center;
  background-color: black;
  color: #d32f27;
  padding: 20px;
  text-transform: uppercase;
`

class App extends Component {
  render() {
    return (
      <div>
        <GlobalStyle />
        <Header>Smoothflix</Header>
        <MovieList>
          {movies.map(movie => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </MovieList>
      </div>
    )
  }
}

export default App
