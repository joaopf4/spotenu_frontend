import styled from 'styled-components';
import { EyeIcon } from '../Smallers/styled'

export const HeaderComp = styled.div `
  width: 100vw;
  height: 80px;
  background-color:#00E2BA;
  display: flex;
  padding-left: 64px;
  align-items: center;
  box-sizing: border-box;

  @media(max-width: 600px) {
    height: fit-content;
    padding: 10px 0px;
    flex-wrap: wrap;
    min-width: 320px;
  }
`
export const ImgLogo = styled.img `
  height: 56px;
  margin-right: 16px;
  margin: aut0 0;
  @media(max-width: 600px){
    margin-left: 10vw;
    height: 40px;
  }
`
export const Title = styled.h1 `
  font-size:52px;
  margin: 0;
  @media(max-width: 600px){
    font-size:40px;
  }
`
export const InputHeader = styled.div `
  width: 260px;
  height: 50px;
  outline: none;
  background-color: white;
  border: 2px solid black;
  box-sizing: border-box;
  padding: 0 10px 0 20px;
  border-radius: 8px;
  margin: 0px 10px 0px 5vw ;
  align-items: center;
  justify-content: flex-end;
  display: flex;

  @media(max-width: 600px){
    margin-left: 10vw;
    width: 220px;
    height: 42px;
  }
`
export const Search = styled(EyeIcon) `
  font-size: 1.6rem;
  margin-left: 10px;
  cursor: pointer;
  align-self: left;
`
export const NakeInput = styled.input `
  border: none;
  width: 100%;
  font-size: 1.3rem;  
  ::placeholder,
  ::-webkit-input-placeholder {
    font-size: 1.3rem;
  }
`