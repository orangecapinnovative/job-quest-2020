import styled from 'styled-components'
import { media } from './media'
export const Form = styled.form`
    padding: 16px;
    display: inline-block;
    justify-content: flex-end;
    ${media.giant`
        flex-direction: column;
        align-items: flex-end;
    `}
    ${media.desktop`
        flex-direction: column;
    `}
    ${media.tablet`
        flex-direction: column;
    `}
    ${media.phone`
        flex-direction: column;
        align-items: flex-end;
    `}    
`;

export const FormRow = styled.div`
&::after {
    content: "";
    display: table;
    clear: both;
    }
`;

export const FormColumn = styled.div`
    display: inline-block;
    margin-right: 20px;
`;
export const Label = styled.label`
    text-align: left;
`;


