import styled from 'styled-components';

export const ContainerLogin = styled.div `
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 0px 0px 0px 0px;
  box-sizing: border-box;
  background-color: white;
  border-radius: 8px;
  margin-top: 18vh;
  margin-bottom: 40px;
  @media(max-width: 460px){
    margin-top: 5vh;
  }
`
export const Form = styled.form `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

`
export const SignUpText = styled.p `
  font-size: 0.9rem;
  margin-top: 5px;
`
