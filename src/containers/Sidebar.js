import React from 'react'
import { CardWrapper, CardHeader, CardHeading, CardBody, NavItem, NavLinkItem } from '../theme/CardWrapper'
import PropTypes from 'prop-types'
import {
  getContext,
  withState,
  lifecycle,
  compose
} from 'recompose'
import { fetchCategories } from '../actions'
import { connect } from 'react-redux'

const SidebarContainer = ({ value }) => (
  <div>
    <CardWrapper>
      <CardHeader>
        <CardHeading>Chuck Norris</CardHeading>
      </CardHeader>
      <CardBody>
        <NavItem>
          {
            value.map((item, index) => (
              <NavLinkItem
                key={index}
                to={`/categories/${item}/jokes`}>
                <li>
                  {item}
                </li>
              </NavLinkItem>
            ))
          }
        </NavItem>
      </CardBody>
    </CardWrapper>
  </div>
)

export default compose(
  getContext({
    store: PropTypes.object
  }),
  // connect(null
  //   dispatch => ({

  //   })),
  withState('value', 'setCategories', []),
  withState('subscription', 'setSubscription', null),
  lifecycle({
    componentDidMount() {
      //Start Redux
      this.props.store.dispatch(fetchCategories())
      //End Redux
      fetch('/categories')
        .then(res => res.json())
        .then(({ value }) => this.props.setCategories(value))

      const subscription = this.props.store.subscribe(
        () => this.forceUpdate()
      )

      this.props.setSubscription(() => subscription)
    }
  })
)(SidebarContainer)
