import React from 'react'
import axios from 'axios'

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component'
}

const fetchMovieDb = path => Component => {
  class MovieDbFetcher extends React.Component {
    state = { error: null, result: null, progress: true }

    async componentDidMount() {
      try {
        const result = await axios.get(
          `https://api.themoviedb.org/3${
            typeof path === 'string' ? path : path(this.props)
          }?api_key=c5742978852b8f695a61e22a33a8196c`,
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
