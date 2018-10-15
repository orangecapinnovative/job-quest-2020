import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { CategoriesRoute, JokesRoute, NotFoundForm, SearchRoute } from '.'
import { Sidebar, Search } from '../containers'
import { Row, Column } from '../theme/Table'
const ContentRoute = () => (
  <div>
    <Row>
      <Column span='3'>1</Column>
      <Column span="1">4</Column>
      <Column span="1">5</Column>
      <Column span="1">6</Column>
      <Column span="1">7</Column>
      <Column span="1">8</Column>
      <Column span="1">9</Column>
      <Column span="1">10</Column>
      <Column span="1">11</Column>
      <Column span="1">12</Column>
    </Row>
    <Row>
      <Column span='3'>
        <Sidebar />
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
export default ContentRoute
