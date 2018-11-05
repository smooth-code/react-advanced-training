import React, { Component } from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { globalStyle } from '@smooth-ui/core-sc'
import { Route, Link } from 'react-router-dom'
import Home from './routes/Home'
import MovieDetail from './routes/MovieDetail'

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

  a {
    color: #d32f27;
  }
`

class App extends Component {
  render() {
    return (
      <div>
        <GlobalStyle />
        <Header>
          <Link to="/">Smoothflix</Link>
        </Header>
        <Route exact path="/" component={Home} />
        <Route path="/movies/:movieId" component={MovieDetail} />
      </div>
    )
  }
}

export default App
