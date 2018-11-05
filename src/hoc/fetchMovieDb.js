import React from 'react'
import axios from 'axios'

const Context = React.createContext()

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component'
}

export const FetchProvider = ({ apiKey, children }) => (
  <Context.Provider value={{ apiKey }}>{children}</Context.Provider>
)

const fetchMovieDb = path => Component => {
  class MovieDbFetcher extends React.Component {
    static contextType = Context

    state = { error: null, result: null, progress: true }

    async componentDidMount() {
      try {
        const result = await axios.get(
          `https://api.themoviedb.org/3${
            typeof path === 'string' ? path : path(this.props)
          }?api_key=${this.context.apiKey}`,
        )
        this.setState({ result, progress: false })
      } catch (error) {
        this.setState({ error, progress: false })
      }
    }

    render() {
      return <Component {...this.props} {...this.state} />
    }
  }
  MovieDbFetcher.displayName = `fetchMovieDb(${getDisplayName(Component)})`
  return MovieDbFetcher
}

export default fetchMovieDb
