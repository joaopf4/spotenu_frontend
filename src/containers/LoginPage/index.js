import React, { Component } from "react";
import {ContainerLogin, Form, SignUpText} from './styled';
import Header from '../../components/Header/index';
import {BodyComp, BodyPage} from '../../components/Body/styled';
import {InputsComp, ButtonsComp, Links, Label, EyeIcon, NakeInput} from '../../components/Smallers/styled';
import { push } from "connected-react-router";
import { routes } from '../Router';
import { loginUser } from '../../actions/user';
import { connect } from "react-redux";

class LoginPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isPasswordShown: false,
      email: '',
      password: ''
    };
  };

  togglePasswordVisibility = () => {
    const {isPasswordShown} = this.state;
    this.setState({ isPasswordShown: !isPasswordShown });
  }

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
    const { email, password, isPasswordShown } = this.state
    const { goToFormRegister } = this.props
    return (
      <BodyComp>
        <Header showTitleLink/>
          <ContainerLogin>
            <Form onSubmit={this.handleLogin}>
              <Label for="email">Email ou username</Label>
              <InputsComp>              
              <NakeInput 
                name="email"
                required
                type="text"
                id="email"
                onChange={this.handleFieldChange}
                value={email} 
                placeholder="email ou username"
              />
              </InputsComp>
              
              <Label for="senha">Senha</Label>
              <InputsComp>              
              <NakeInput
                name="password"
                required
                type={(isPasswordShown)?"text" : "password" }
                id="senha"           
                onChange={this.handleFieldChange}
                value={password} 
                placeholder="senha"
              /> <EyeIcon><i onClick={this.togglePasswordVisibility} 
              className={`fa ${isPasswordShown ? "fa-eye-slash" : "fa-eye"} password-icon`}>
                </i></EyeIcon>
              </InputsComp>
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
