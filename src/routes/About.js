import React from 'react'
import ReactDom from 'react-dom'
import styled from 'styled-components'

const Backdrop = styled('div')`
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Modal = styled('div')`
  font-size: 20px;
  text-align: center;
  color: white;
  width: 500px;
  background-color: #222;
  padding: 10px;
`

class About extends React.Component {
  constructor(props) {
    super(props)

    this.container = document.createElement('div')
    document.body.appendChild(this.container)

    // Block scroll
    document.body.style.overflow = 'hidden'
  }

  componentWillUnmount() {
    document.body.removeChild(this.container)

    // Restore scroll
    document.body.style.overflow = 'visible'
  }

  handleClick = () => this.props.history.push('/')

  render() {
    return ReactDom.createPortal(
      <Backdrop onClick={this.handleClick}>
        <Modal>
          This application was created by Greg Bergé during React Training @
          Smooth Code.
        </Modal>
      </Backdrop>,
      this.container,
    )
  }
}

export default About
