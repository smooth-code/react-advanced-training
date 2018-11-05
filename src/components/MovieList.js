import React from 'react'
import { Row, Col } from '@smooth-ui/core-sc'

const MovieList = ({ children }) => (
  <Row>
    {React.Children.map(children, (child, index) => (
      <Col md={4} key={index}>
        {child}
      </Col>
    ))}
  </Row>
)

export default MovieList
