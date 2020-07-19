import styled from 'styled-components';

export const InputsComp = styled.input `
  width: 300px;
  height: 60px;
  min-width: fit-content;
  outline: none;
  border: 2px solid black;
  box-shadow: rgba(1, 1, 1, 1) 20px 20px;
  box-sizing: border-box;
  border-radius: 8px;
  margin: 18px 0px;
  ::placeholder {
    color: black;
    font-family: 'proxima_nova_rgbold', Helvetica, Arial, sans-serif;
  }
`

