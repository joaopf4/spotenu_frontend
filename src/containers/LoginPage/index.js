import React, { Component } from "react";
import {ContainerLogin, Form, SignUpText} from './styled';
import {Header} from '../../components/Header/index';
import {BodyComp} from '../../components/Body/styled';
import {InputsComp, ButtonsComp, Links} from '../../components/Smallers/styled';



class LoginPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  }
  render() {
    const { email, password } = this.state
    const { goToFormRegister } = this.props
    return (
      <BodyComp>
        <Header showTitle/>
        <ContainerLogin>
          <Form onSubmit={this.handleLogin}>
            <InputsComp 
              name="email"
              required
              type="email"
              label="Email"
              onChange={this.handleFieldChange}
              value={email} 
               placeholder="email ou username"
            />
            <InputsComp
              name="password"
              required
              type="password"
              label="Senha"            
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
                variant="contained"
                color="primary"
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


export default LoginPage;

