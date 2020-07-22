import React, { Component } from "react";
import Imagem from '../../imgs/logospotenublack.png'
import { HeaderComp, ImgLogo, Title} from './styled'
import { Link } from '../Smallers/styled'
import { push, replace } from "connected-react-router";
import { connect } from "react-redux"
import { routes } from "../../containers/Router";

class Header extends Component {
    render() {
      return (
        <HeaderComp>
            
             <ImgLogo src={Imagem}/>
            {this.props.showTitle && <Title>Spotenu</Title>}
            {this.props.showTitleLink && <Link><Title title="Voltar para Login" onClick={this.props.goToLoginScreen}>Spotenu</Title></Link>}
        </HeaderComp>
      );
    }
  }
const mapDispatchToProps = dispatch => ({
    goToLoginScreen: () => dispatch(push(routes.login))
  })

  export default connect(null, mapDispatchToProps)(Header);

