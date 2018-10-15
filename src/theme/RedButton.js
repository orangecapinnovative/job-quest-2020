import styled from 'styled-components'
import { media } from './media'
export const RedButton = styled.button`
  align-items: center;
  user-select: none;
  display: inline-flex;
  padding: 6px 16px;
  justify-content: center;
  flex-shrink: 0;
  border-radius: 3px;
 
  background: rgba(235, 87, 87, 0.03);
  color: rgb(235, 87, 87);
  border: 1px solid rgb(249, 200, 200);
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px;
  width: 100%;
  cursor: pointer;
  &:hover {
    background-color: #f3edeb;
    
  }
  ${media.giant`
    font-size: 22px;
    margin-top: 32px;
  `}
  ${media.desktop`
    font-size: 20px;
    margin-top: 32px;
  `}
  ${media.tablet`
    font-size: 18px;
    margin-top: 32px;
  `}
  ${media.phone`
    font-size: 15px;
    margin-top: 20px;
  `}
`;

// export const RedButton = styled.button`
//   align-items: center;
//   user-select: none;
//   display: inline-flex;
//   padding: 6px 16px;
//   justify-content: center;
//   flex-shrink: 0;
//   border-radius: 3px;
 
//   background: rgba(235, 87, 87, 0.03);
//   color: rgb(235, 87, 87);
//   border: 1px solid rgb(249, 200, 200);
//   box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px;
//   width: 100%;
//   cursor: pointer;
//   &:hover {
//     background-color: #f3edeb;
    
//   }
// `;