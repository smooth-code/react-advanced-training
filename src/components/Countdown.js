import React from 'react'

class Countdown extends React.Component {
  state = { value: this.props.initialValue }

  componentDidMount() {
    this.tick()
  }

  tick() {
    setTimeout(() => {
      if (this.state.value === 0) return
      this.setState(previousState => ({ value: previousState.value - 1 }))
      this.tick()
    }, this.props.delay)
  }

  render() {
    return this.props.children(this.state)
  }
}

export default Countdown
