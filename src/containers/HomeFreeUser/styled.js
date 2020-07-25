import styled from 'styled-components';
import Background from '../../imgs/undraw_music_home.png'

export const Form = styled.form `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

`
export const SignUpText = styled.p `
  font-family: 'proxima_nova_rgbold', Helvetica, Arial, sans-serif;
  font-size: 0.9rem;
  margin-top: 8px;
`
export const HomeBody = styled.div `
  background-image: url(${Background});
  background-repeat: no-repeat;
  background-size: contain;
  opacity: 0.75;
  width: 100vw;
  height: 100vh; 
  @media(max-width: 320px){
  }
`
export const BgImg = styled.img `

`