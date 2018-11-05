import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { globalStyle } from '@smooth-ui/core-sc'
import { Route, Switch, Link } from 'react-router-dom'
import ErrorBoundary from './components/ErrorBoundary'
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

const Nav = styled('nav')`
  margin: 10px;
`

const NavLink = styled(Link)`
  color: white;

  &:hover {
    text-decoration: underline;
  }
`

const App = () => (
  <div>
    <GlobalStyle />
    <Header>
      <Link to="/">Smoothflix</Link>
    </Header>
    <Nav>
      <NavLink to="/about">About</NavLink>
    </Nav>
    <ErrorBoundary>
      <Switch>
        <Route path="/movies/:movieId" component={MovieDetail} />
        <Route path="/" component={Home} />
      </Switch>
    </ErrorBoundary>
  </div>
)

export default App
