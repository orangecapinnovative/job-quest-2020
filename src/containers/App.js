import React, { Component } from 'react'
import { ContentRoute, HeaderForm } from '../components'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from '../reducers'
import { Container } from '../theme/grid'
// import ReallySmoothScroll from 'really-smooth-scroll'
// ReallySmoothScroll.shim();
const store = createStore(rootReducer)
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <HeaderForm />
          <Container>
            <ContentRoute  />
          </Container>
        </div>
      </Provider>

    )
  }
}

export default App
