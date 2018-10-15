import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
export const NavWrapper = styled.nav`
    display: flex;
    flex-wrap: wrap;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;

`;
export const NavList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
    flex-direction: column;
`;

export const NavItem = styled.li`
    list-style-type: none;
    display: block;
    padding: .75rem 1.25rem;
    border-top-left-radius: .25rem;
    border-top-right-radius: .25rem;
    border: 1px solid #ddd;
    margin-bottom: -1px;
    cursor: pointer;
    font-weight: normal;
    background-color: white;

    &:hover {
        color: palevioletred;
      }
`;
export const NavLinkItem = styled(NavLink)`
    list-style-type: none;
    display: block;
    padding: .75rem 1.25rem;
    border-top-left-radius: .25rem;
    border-top-right-radius: .25rem;
    border: 1px solid #ddd;
    margin-bottom: -1px;
    cursor: pointer;
    font-weight: normal;
    background-color: white;

    &:hover {
        color: palevioletred;
    }
`;
