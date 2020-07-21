import React, { Component, Fragment } from "react";
import {ContainerLogin, Form, SignUpText, Label} from './styled';
import {Header} from '../../components/Header/index';
import {BodyComp, BodyPage} from '../../components/Body/styled';
import {InputsComp, ButtonsComp, Links} from '../../components/Smallers/styled';
import { push } from "connected-react-router";
import { routes } from '../Router';
import { loginUser } from '../../actions/user';
import { connect } from "react-redux";

class LoginPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    };
  };

  handleLogin = (event) => {
    event.preventDefault()
    this.props.loginUser(this.state.email, this.state.password)
  };

  handleInputChange = (event) => {
    const {name, value} = event.target;
    this.setState ({
      [name] : value
    });
  };

  handleFieldChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    const { email, password } = this.state
    const { goToFormRegister } = this.props
    return (
      <BodyComp>
        <Header showTitle/>
          <ContainerLogin>
            <Form onSubmit={this.handleLogin}>
              <Label for="email">Email ou username</Label>
              <InputsComp 
                name="email"
                required
                type="email"
                id="email"
                onChange={this.handleFieldChange}
                value={email} 
                placeholder="email ou username"
              />
              <Label for="senha">Senha</Label>
              <InputsComp
                name="password"
                required
                type="password"
                id="senha"           
                onChange={this.handleFieldChange}
                value={password} 
                placeholder="senha"
              />
              <br/>
              <ButtonsComp type="submit"> 
                Entrar
              </ButtonsComp>
              <SignUpText>
                Ainda não tem seu cadastro?  
                <Links
                  onClick={goToFormRegister}
                >  Clique aqui! 
                </Links>
              </SignUpText>
            </Form>
          </ContainerLogin>
      </BodyComp>
    );
  }
}

const mapDispatchToProps = dispatch => ({ 
  goToFormRegister: () => dispatch(push(routes.signup)),
  loginUser: (email, password) => dispatch(loginUser(email, password)),
})

export default connect (
  null, 
  mapDispatchToProps
)(LoginPage);
