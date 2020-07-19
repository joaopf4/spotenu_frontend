import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import {BodyComp, ContainerLogin, Form} from './styled';
import {Header} from '../../components/Header/index';
import {Inputs} from '../../components/Inputs/index';
import {Buttons} from '../../components/Buttons/index';


class LoginPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: 'email ou username',
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
          <Inputs
            name="email"
            required
            type="email"
            label="Email"
            onChange={this.handleFieldChange}
            value={email} 
            placeholder="email ou username"//fazer isso funcionar
          />
          <Inputs
            name="password"
            required
            type="password"
            label="Senha"            
            onChange={this.handleFieldChange}
            value={password} 
            placeholder="senha"//fazer isso funcionar
          />
          <br/>
        
          <br/>
          <Buttons type="submit"> 
            Entrar
          </Buttons>
          <br/>
          <Button 
          variant="contained"
          color="primary"
          onClick={goToFormRegister}>Cadastrar</Button>
        </Form>
          
       

        </ContainerLogin>
      </BodyComp>
    );
  }
}


export default LoginPage;

