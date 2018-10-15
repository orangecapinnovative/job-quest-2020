import styled from 'styled-components'

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  
  font-size: 15px;
  line-height: 26px;
  padding: 4px 10px;
  border-radius: 3px;
  box-shadow: rgba(15, 15, 15, 0.1) 0px 0px 0px 1px inset,
    rgba(15, 15, 15, 0.1) 0px 1px 1px inset;
  background: rgb(255, 255, 255);
  cursor: text;
    margin-top: 4px;
    margin-bottom: 4px;
`;

export const InputWithoutBorder = styled.input`
  font-size: inherit;
  line-height: inherit;
  border: none;
  background: none;
  width: 100%;
  display: block;
  resize: none;
  padding: 0px;
  margin-right: 10px;
  &::placeholder {
    color: #b6b6b5;
    font-weight: 200;
  }
`;