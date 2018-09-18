import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { Content, Header } from './'
import '../App.css'
class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className='container'>
          <Route component={Content} />
        </div>
      </div>

    )
  }
}

export default App
