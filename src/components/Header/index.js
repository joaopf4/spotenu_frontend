import React, { Component } from "react";
import Imagem from '../../imgs/logospotenublack.png'
import { HeaderComp, ImgLogo, Title} from './styled'

export class Header extends Component {
    render() {
      return (
        <HeaderComp>
    
             <ImgLogo src={Imagem}/>
            {this.props.showTitle && <Title>Spotenu</Title>}
      
        </HeaderComp>
      );
    }
  }
  