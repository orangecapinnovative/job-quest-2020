import React from 'react'
import { Route } from 'react-router-dom'
import { Joke } from '../containers'

const Jokes = () => (
  <div>
    <Route path='/jokes/:id' component={Joke} />
  </div>
)

export default Jokes
