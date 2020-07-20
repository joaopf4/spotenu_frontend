import React, { Component } from "react";
import {ContainerLogin, Form, SignUpText, SingupInput} from './styled';
import {Header} from '../../components/Header/index';
import {BodyComp} from '../../components/Body/styled';
import {ButtonsComp, Select} from '../../components/Smallers/styled';

class SignUpPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      form: {}
    }
  }
  render() {
    const {username, email, password} = this.state;
    return (
      <BodyComp>
        <Header showTitle/>
        <ContainerLogin>
        <Form onSubmit={this.handleLogin}>
         
          <Select>
          <option value="" disabled selected>Escolha o seu tipo de cadastro</option>
            <option value="Banda|Cantor(a)">Banda|Cantor(a)</option>
            <option value="Ouvinte 0800">Ouvinte 0800</option>
            <option value="Ouvinte Premium">Ouvinte Premium</option>
          </Select>
          <SingupInput 
             placeholder="Nome e Sobrenome"
          />
          <SingupInput
            placeholder="email@email.com"
          />
          <SingupInput
            placeholder="username"
            title="Apenas caracteres minúsculos, sem espaços ou caracteres especiais =)"
          />
          <SingupInput
            placeholder="Senha"
          />
          <SingupInput
            placeholder="Confirme a senha anterior"
          />

          <ButtonsComp type="submit"> 
            Enviar!
          </ButtonsComp>
        </Form>
        </ContainerLogin>
      </BodyComp>
    );
  }
}


export default SignUpPage;

