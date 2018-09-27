import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Categories, Jokes, NotFound } from './'
import { Sidebar, Search } from '../containers'

const Content = () => (
  <div>
    <div className='row'>
      <Sidebar />
      <div className='col-8'>
        <Search />
        <Switch>
          <Route path='/categories' component={Categories} />
          <Route path='/jokes' component={Jokes} />
          <Route exac component={NotFound} />
        </Switch>
      </div>
    </div>
  </div>

)
export default Content
