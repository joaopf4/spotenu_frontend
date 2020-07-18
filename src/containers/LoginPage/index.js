import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Imagem from '../../imgs/logospotenu.png'
import {Body, ContainerLogin, Form, ImgLogo} from './styled'
import {Header} from '../../components/Header/index'

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
      <Body>
        <Header/>
        <ImgLogo src={Imagem}/>

        <ContainerLogin>
        <Form onSubmit={this.handleLogin}>
          <TextField
          width= "50%"
          name="email"
          required
          type="email"
          label="Email"
          onChange={this.handleFieldChange}
          value={email} 
          />
          <TextField
          width= "50%"
          name="password"
          required
          type="password"
          label="Senha"            
          onChange={this.handleFieldChange}
          value={password} 
          />
          <br/>
        
          <br/>
          <Button 
          variant="contained"
          color="secondary"
          type="submit"
          >Entrar</Button>
          <br/>
          <Button 
          variant="contained"
          color="primary"
          onClick={goToFormRegister}>Cadastrar</Button>
        </Form>
          
       

        </ContainerLogin>
      </Body>
    );
  }
}


export default LoginPage;

