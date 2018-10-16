import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { CategoriesRoute, JokesRoute, NotFoundForm, SearchRoute } from '.'
import { Sidebar, Search } from '../containers'
import PropTypes from 'prop-types'
import {
  getContext,
  compose
} from 'recompose'
import { Row, Column } from '../theme/Table'
const ContentRoute = ({ store }) => (
  <div>
    <Row>
      <Column span='3'>
        <Sidebar  />
      </Column>
      <Column span='1'>
        &nbsp;
      </Column>
      <Column span="8">
        <Search />
        <Switch>
          <Route path='/categories' component={CategoriesRoute} />
          <Route path='/jokes' component={JokesRoute} />
          <Route path='/search' component={SearchRoute} />
          <Route exac component={NotFoundForm} />
        </Switch>
      </Column>
    </Row>
  </div>
)
export default compose(
  getContext({
    store: PropTypes.object
  })
)(ContentRoute)
