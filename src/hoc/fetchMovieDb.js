import React from 'react'
import { connect } from 'react-redux'
import { fetchApi } from '../redux/ActionCreators'

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
      this.props.onFetchApi(this.context.apiKey)
    }

    render() {
      const { fetchState, ...props } = this.props
      return <Component {...props} {...fetchState} />
    }
  }

  MovieDbFetcher.displayName = `fetchMovieDb(${getDisplayName(Component)})`
  return connect(
    (state, ownProps) => {
      const resolvedPath = typeof path === 'function' ? path(ownProps) : path
      return {
        fetchState: state.fetchStates[resolvedPath] || { progress: true },
        resolvedPath,
      }
    },
    null,
    ({ resolvedPath, fetchState }, { dispatch }, ownProps) => ({
      onFetchApi: apiKey => dispatch(fetchApi(resolvedPath, apiKey)),
      fetchState,
      ...ownProps,
    }),
  )(MovieDbFetcher)
}

export default fetchMovieDb
