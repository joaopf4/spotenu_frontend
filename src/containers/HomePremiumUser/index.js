import React, { Component, Fragment } from "react";
import {ContainerLogin, Form, SignUpText} from './styled';
import {Header} from '../../components/Header/index';
import {BodyComp, BodyPage} from '../../components/Body/styled';
import {InputsComp, ButtonsComp, Links} from '../../components/Smallers/styled';
import { push } from "connected-react-router";
import { routes } from '../Router';
import { loginUser } from '../../actions/user';
import { connect } from "react-redux";

class HomePremiumUser extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    };
  };

  render() {

    return (
      <BodyComp>
        <Header showTitle/>

      </BodyComp>
    );
  }
}



export default HomePremiumUser;
