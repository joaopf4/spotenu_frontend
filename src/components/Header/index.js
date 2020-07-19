import React, { Component } from "react";
import Imagem from '../../imgs/logospotenu.png'
import { HeaderComp, ImgLogo} from './styled'

export class Header extends Component {
    render() {
      return (
        <HeaderComp>
             <ImgLogo src={Imagem}/>
            {this.props.showTitle && <h1>Spotenuzen</h1>}
       
        </HeaderComp>
      );
    }
  }
  