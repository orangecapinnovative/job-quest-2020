import React, { Component } from 'react'
import { ContentRoute, HeaderForm } from './'
import { Container } from '../theme/grid'
import ReallySmoothScroll from 'really-smooth-scroll'
ReallySmoothScroll.shim();
class App extends Component {
  render() {
    return (
      <div>
        <HeaderForm />
        <Container>
          <ContentRoute />
        </Container>
      </div>

    )
  }
}

export default App
