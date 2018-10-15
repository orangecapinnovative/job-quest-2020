import React, { Component } from 'react'
import { CardWrapper, CardHeader, CardHeading, CardBody, NavItem, NavLinkItem } from '../theme/CardWrapper'

class SidebarContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: []
    }
  }

  componentDidMount() {
    fetch('/categories')
      .then(res => res.json())
      .then(({ value }) => this.setState({ value }))
  }
  render() {
    return (
      <div>
        <CardWrapper>
          <CardHeader>
            <CardHeading>Chuck Norris</CardHeading>
          </CardHeader>
          <CardBody>
            <NavItem>
              {this.state.value.map((item, index) => (
                <NavLinkItem
                  key={index}
                  to={`/categories/${item}/jokes`}>
                  <li>
                    {item}
                  </li>
                </NavLinkItem>
              ))}
            </NavItem>
          </CardBody>
        </CardWrapper>
      </div>
    )
  }
}
export default SidebarContainer
