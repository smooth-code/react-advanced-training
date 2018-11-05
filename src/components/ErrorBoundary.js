import React from 'react'
import styled from 'styled-components'

const ErrorStatus = styled.div`
  color: red;
  font-size: 20px;
  margin: 20px;
  text-align: center;
`

class ErrorBoundary extends React.Component {
  state = { hasError: false }

  componentDidCatch(error) {
    this.setState({ hasError: true })
  }

  render() {
    if (this.state.hasError) {
      return <ErrorStatus>Something went wrong.</ErrorStatus>
    }
    return this.props.children
  }
}

export default ErrorBoundary
