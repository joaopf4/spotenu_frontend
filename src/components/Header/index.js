import React, { Component } from "react";
//import Imagem from '../imgs/logoHeader.png'
import { HeaderComp } from './styled'

export class Header extends Component {
    render() {
      return (
        <HeaderComp>
             {/* <ImgLogo src={Imagem}/> */}
            {this.props.showTitle && <h1>Página de cadastro</h1>}
       
        </HeaderComp>
      );
    }
  }
  