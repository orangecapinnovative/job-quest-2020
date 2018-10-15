import React from 'react'
import logo from '../logo.svg'
import styled from 'styled-components'

const Outer = styled.div`
  text-align: center;
`
const Header = styled.div`
  background-color: papayawhip;
  display: block;
  height: 150px;
  color: white;
  padding-left: 16px;
  margin-bottom: 3%;
  
  > h2 {
    color: palevioletred;
  }
  `

const Logo = styled.img`
    animation: App-logo-spin infinite 20s linear;
    height: 80px;
  `
const HeaderForm = () => {
  return (
    <Outer>
      <Header >
        <Logo src={logo} />
        <h2>Chuck Norris</h2>
      </Header >
    </Outer>
  )
}

export default HeaderForm
