import styled from 'styled-components';

export const ButtonsComp = styled.button `
  width: 300px;
  height: 60px;
  min-width: fit-content;
  background-color: #00E2BA;
  outline: none;
  border: 2px solid black;
  box-shadow: rgba(0.7, 0.7, 0.7, 0.7) 20px 20px ;
  box-sizing: border-box;
  border-radius: 8px;
  margin: 18px 0px;
  :hover {
    background-color: #fff;
    box-shadow: rgba(1, 1, 1, 1) 20px 20px ;
    color: #000;
    cursor: pointer;

  }

  :active::after {
    padding: 0;
    margin: 0;
    opacity: 1;
    transition: 0s;

  }
  
`

