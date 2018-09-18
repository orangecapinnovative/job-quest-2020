import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class SidebarContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      value: []
    }
  }

  componentDidMount () {
    fetch('http://api.icndb.com/categories')
      .then(res => res.json())
      .then(({ value }) => this.setState({ value }))
  }
  render () {
    return (
      <div className='col-3'>
        <nav className='list-group'>
          {this.state.value.map((item, index) => (
            <NavLink
              key={index}
              to={`/categories/${item}/jokes`}
              className='list-group-item'
              activeClassName='active'>
              {item}
            </NavLink>
          ))}
        </nav>
      </div>
    )
  }
}
export default SidebarContainer
