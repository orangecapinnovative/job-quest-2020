import React from 'react'
import logo from '../logo.svg'

const HeaderComponent = () => {
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

export default HeaderComponent
