import styled from 'styled-components';
import {InputsComp} from '../../components/Smallers/styled';

export const SingupInput = styled(InputsComp) `
  min-width: 320px;
  width: 50vw;
  ::-ms-tooltip{
  visibility: hidden;
  width: 120px;
  background-color: #555;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  position: absolute;
  z-index: 1;
  bottom: 125%;
  left: 50%;
  margin-left: -60px;
  opacity: 0;
  transition: opacity 0.3s;
  }
`
export const ContainerLogin = styled.div `
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: fit-content;
  height: fit-content;
  margin: 5vh 0vh;
  box-sizing: border-box;
  background-color: white;
  border-radius: 8px;
`
export const Form = styled.form `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

`
export const SignUpText = styled.p `
  font-family: 'proxima_nova_rgbold', Helvetica, Arial, sans-serif;
  font-size: 0.9rem;
  
`