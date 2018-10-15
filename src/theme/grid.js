import styled from 'styled-components'
import { media } from './media'

export const Container = styled.div`
padding: 15px 120px 15px;
border: 1px solid black;
${media.giant`
padding: 15px 70px 15px;
border: 1px solid green;
`}
${media.desktop`
padding: 15px 50px 15px;
border: 1px solid yellow;
`}
${media.tablet`
padding: 15px 30px 15px;
border: 1px solid blue;
`}
${media.phone`
padding: 15px 10px 15px;
border: 1px solid red;
`}
`;