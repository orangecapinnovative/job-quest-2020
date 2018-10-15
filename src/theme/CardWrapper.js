import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { media } from './media'
export const CardWrapper = styled.div`
padding: 0 0 32px;
margin: 48px auto 0;

font-family: Quicksand, arial, sans-serif;
border-radius: 3px;

`;
export const CardHeader = styled.header`
    padding-top: 32px;
    padding-bottom: 32px;
    background: #CE6A85;
    border-radius: 3px;
    ${media.giant`
            padding: 25px 0px;
      `}
      ${media.desktop`
          padding: 20px 0px;
      `}
      ${media.tablet`
          padding: 15px 0px;
      `}
      ${media.phone`
          padding: 10px 0px;
      `}
`;

export const CardHeading = styled.h1`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  background: #18d8a9;
  ${media.giant`
        font-size: 22px;
  `}
  ${media.desktop`
      font-size: 20px;
  `}
  ${media.tablet`
      font-size: 18px;
  `}
  ${media.phone`
      font-size: 15px;
  `}
`;
export const CardHeading2 = styled.h2`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  background: papayawhip;
  ${media.giant`
        font-size: 22px;
  `}
  ${media.desktop`
      font-size: 20px;
  `}
  ${media.tablet`
      font-size: 18px;
  `}
  ${media.phone`
      font-size: 15px;
  `}
`;


export const CardBody = styled.div`
  background: yellow;
  `;
export const NavItem = styled.nav`
    text-align: center;
    background-color: #f6f6f6;
`;
export const NavLinkItem = styled(NavLink)`
  font-size: 24px;
  cursor: pointer;
  font-weight: normal;

  &:hover {
    color: pink;
  }
  > li {
    color: palevioletred;
    list-style-type: none;
    border: 1px solid #ddd;
    margin-top: -1px; 
    background-color: #f6f6f6;
    padding: 12px;
    ${media.giant`
    font-size: 22px;
    `}
    ${media.desktop`
      font-size: 20px;
    `}
    ${media.tablet`
      font-size: 18px;
    `}
    ${media.phone`
      font-size: 15px;
    `}
  }

`;