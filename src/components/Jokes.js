import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Joke, SearchResults } from '../containers'

const Jokes = () => (
  <div>
    <Switch>
      <Route exact path='/jokes/:id' component={Joke} />
      <Route path='/jokes/Search/firstName=:firstName&lastName=:lastName' component={SearchResults} />
    </Switch>
  </div>
)

export default Jokes
