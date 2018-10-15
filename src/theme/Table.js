import styled from 'styled-components'

export const Row = styled.div`
&::after {
    content: "";
    display: table;
    clear: both;
    }
`;
export const Column = styled.div`
    display: inline-block;
    float: left;
    width: 100%;
    width: ${props => (props.span ? (props.span / 12) * 100 : "8.33")}%;
`;

