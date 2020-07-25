import styled from 'styled-components';
import { EyeIcon } from '../Smallers/styled'

export const HeaderComp = styled.div `
  width: 100vw;
  height: fit-content ;
  min-height: 80px;
  background-color:#00E2BA;
  display: flex;
  padding-left: 64px;
  align-items: center;
  box-sizing: border-box;
  flex-wrap: wrap;
  padding: 10px 0px 10px 64px;
  @media(max-width: 640px) {
    height: fit-content;
    min-height: fit-content;
    padding: 10px 0px 10px;
    flex-wrap: wrap;
    min-width: 320px;
  }
`
export const ImgLogo = styled.img `
  height: 56px;
  margin-right: 16px;
  margin: aut0 0;
  @media(max-width: 640px){
    margin-left: 10vw; 
  }
  @media(max-width: 460px){
    margin-left: 10vw; 
    height: 40px;
  }
`
export const Title = styled.h1 `
  font-size:52px;
  margin: 0;
  @media(max-width: 460px){
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
