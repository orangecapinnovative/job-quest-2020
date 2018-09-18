import React, { Component } from 'react'
import logo from '../logo.svg'

class FormComponent extends Component {
  render () {
    return (
      <div>
        <table className='titleBar'>
          <tbody>
            <tr>
              <td>
                <img alt='logo' width='50' src={logo} className='App-logo' />
              </td>
              <td width='8' />
              <td>
                <h1>Chuck Norris</h1>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default FormComponent
