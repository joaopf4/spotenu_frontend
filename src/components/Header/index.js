import React, { Component, Fragment } from "react";
import Imagem from '../../imgs/logospotenublack.png'
import { HeaderComp, ImgLogo, Title, InputHeader, Search, HeadIcons, TitleHome} from './styled'
import { Link } from '../Smallers/styled'
import { push, replace } from "connected-react-router";
import { connect } from "react-redux"
import { routes } from "../../containers/Router";
import {NakeInput} from "../Smallers/styled"

class Header extends Component {
    render() {
      return (
        <HeaderComp>
            
             <ImgLogo src={Imagem}/>
            {this.props.showTitle && <TitleHome>Spotenu</TitleHome>}
            {this.props.showTitleLink && <Link><Title title="Voltar para Login" onClick={this.props.goToLoginScreen}>Spotenu</Title></Link>}
            {this.props.showSearch && <Fragment><InputHeader><NakeInput/><Search><i class="fa fa-search"></i></Search></InputHeader></Fragment>}
            {this.props.showProfileIcon && <HeadIcons><i class="fa fa-user"></i></HeadIcons>}
        </HeaderComp>
      );
    }
  }
const mapDispatchToProps = dispatch => ({
    goToLoginScreen: () => dispatch(push(routes.login))
  })

  export default connect(null, mapDispatchToProps)(Header);

