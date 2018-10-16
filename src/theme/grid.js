import styled from 'styled-components'
import { media } from './media'

export const Container = styled.div`
padding: 15px 120px 15px;
${media.giant`
padding: 15px 70px 15px;
`}
${media.desktop`
padding: 15px 50px 15px;
`}
${media.tablet`
padding: 15px 30px 15px;
`}
${media.phone`
padding: 15px 10px 15px;
`}
`;