import styled from 'styled-components';

export const InputsComp = styled.input `
  width: 300px;
  height: 60px;
  min-width: fit-content;
  outline: none;
  border: 2px solid black;
  box-shadow: rgba(1, 1, 1, 1) 20px 20px;
  box-sizing: border-box;
  padding: 0 20px;
  border-radius: 8px;
  margin: 18px 0px;
  
  font-size: 1.3rem;
  ::placeholder,
  ::-webkit-input-placeholder {
    
    font-size: 1.3rem;
  }
`
export const ButtonsComp = styled.button `
  width: 300px;
  height: 60px;
  min-width: fit-content;
  background-color: #00E2BA;
  outline: none;
  border: 2px solid black;
  box-shadow: rgba(1, 1, 1, 1) 20px 20px ;
  box-sizing: border-box;
  border-radius: 8px;
  margin: 18px 0px;
  
  font-size: 1.3rem;
  :hover {
    background-color: #fff;
    box-shadow:  20px 20px #00E2BA ;
    color: #000;
    cursor: pointer;
  }
  :active {
    background-color: #00E2BA;
    box-shadow: 20px 20px #000 ;
    color: #fff;
    transition: 0s;
  }
`
export const Links = styled.a `
  
  font-size: inherit;
  
  :hover {
    cursor: pointer;
    color: #00E2BA;
    text-shadow: 1.5px 1.5px #000;
  }
  :active {
    color: #00000000;
    text-shadow: 1.5px 1.5px #00E2BA;
  }
`


