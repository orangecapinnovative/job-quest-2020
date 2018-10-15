import React from 'react'
import { Route } from 'react-router-dom'
import { Jokes } from '../containers'

const CategoriesRoute = () => (
  <div>
    <div>
      <Route path='/categories/:categoryId/jokes'
        component={Jokes} />
    </div>
  </div>
)

export default CategoriesRoute
