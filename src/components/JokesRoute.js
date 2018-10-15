import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Joke } from '../containers'

const JokesRoute = () => (
  <div>
    <Switch>
      <Route exact path='/jokes/:id' component={Joke} />
    </Switch>
  </div>
)

export default JokesRoute
