import React, { Component, Fragment, } from "react";
import {ContainerLogin, Form, SingupInput} from './styled';
import Header from '../../components/Header/index';
import {BodyComp} from '../../components/Body/styled';
import {ButtonsComp, Select, Label, EyeIcon, NakeInput} from '../../components/Smallers/styled';
import { push, replace } from "connected-react-router";
import { routes } from "../Router";
import { signUp } from '../../actions/user';
import { connect } from "react-redux"


class SignUpPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isPasswordShown: false,
      name: '',
      email: '',
      username: '',
      description_band: '',
      password: '',
      confirmPassword: '',  
      selectedSignup: ""
  };
};

  renderDescriptionField = (newSignUp) => {
    this.setState({ selectedSignup: newSignUp})
  }

  onChangeSelect = (event) => {
    this.renderDescriptionField(event.target.value)
  }
  
  togglePasswordVisibility = () => {
    this.setState({ isPasswordShown: !this.state.isPasswordShown });
  }

  handleInputChange = (event) => {
    const {name, value} = event.target;
    this.setState ({ [name]: value })
  }

  handleSubmmit = (event) => {
    event.preventDefault();
    const { name, email, username, password, confirmPassword, description_band, selectedSignup } = this.state

    if (password !== confirmPassword) {
    } else {
      this.props.signUp(name, email, username, password, selectedSignup, description_band);
    }
  }

  render() { 
    
    const { name, email, username, password, confirmPassword, isPasswordShown, description_band } = this.state;

     const renderDescriptionBand = this.state.selectedSignup === "BANDA" ? (
    <Fragment>
      <Label>Descreva aqui a sua banda!</Label>
        <SingupInput>
          <NakeInput
            onChange={this.handleInputChange}
            name="description_band"
            required
            type="text" 
            value={description_band}
            placeholder="Descreva aqui a sua banda!"
            title="Essa descrição vai aparecer para quem acessar o seu perfil no app"
          />
        </SingupInput>
    </Fragment>
     ) : (<></>)
  

    return (
      <BodyComp>
        <Header showTitleLink/>
        <ContainerLogin>
            <Select value={this.state.selectedSignup}
              onChange={this.onChangeSelect}
              selectedSignup={this.state.selectedSignup}
              renderDescriptionField={this.alter}
            >
              <option value="" disabled selected>Escolha o seu tipo de cadastro</option>
              <option value="BANDA">Banda|Cantor(a)</option>
              <option value="OUVINTE_NAO_PAGANTE">Ouvinte 0800</option> //ao selecionar o role, enviar o role pro estado da aplicação
              <option value="OUVINTE_PAGANTE">Ouvinte Premium</option>
            </Select>
            
          <Form onSubmit={this.handleSubmmit}>
            <Label>Nome e sobrenome</Label>
            <SingupInput>
              <NakeInput 
                onChange={this.handleInputChange}
                name="name"
                required
                type="text"
                pattern = "[A-Za-z ãéÁáêõÕÓóÊíÍçÇÚúüÜ]{5,}"
                value={name}
                placeholder="Nome e Sobrenome"
                title="O nome/sobrenome deve conter no mínimo 5 letras."
              />
            </SingupInput>
            <Label>Email</Label>
            <SingupInput>              
              <NakeInput
                onChange={this.handleInputChange}
                name="email"
                required
                type="email"
                value={email}
                placeholder="email@email.com"
              />
            </SingupInput>
            <Label>Username</Label>
            <SingupInput>
              <NakeInput
                onChange={this.handleInputChange}
                name="username"
                required
                type="text"
                pattern="[a-z-_]{3,}"   
                value={username}
                placeholder="username"
                title="Mínimo de 3 caracteres minúsculos, sem espaços ou caracteres especiais =)"
              />
            </SingupInput>
            {renderDescriptionBand}
            <Label>Senha</Label>
            <SingupInput> 
              <NakeInput
                onChange={this.handleInputChange}
                name="password"
                required
                type={(isPasswordShown)?"text" : "password" }      
                value={password}
                title="Mínimo de 6 caracteres"
                placeholder="Mínimo 6 caracteres"
                pattern="[A-Za-z 123456789!@#$%¨&*]{6,}"
              />
            <EyeIcon><i onClick={this.togglePasswordVisibility} 
            className={`fa ${isPasswordShown ? "fa-eye-slash" : "fa-eye"} password-icon`}></i></EyeIcon>
            </SingupInput>

            <Label>Confirmação da senha</Label>
            <SingupInput>              
              <NakeInput
                onChange={this.handleInputChange}
                name="confirmPassword"
                required
                type={(isPasswordShown)?"text" : "password" }         
                value={confirmPassword}
                title="Mínimo de 6 caracteres"
                placeholder="Confirme a senha anterior"
                pattern="[A-Za-z 123456789!@#$%¨&*]{6,}"
              />
              <EyeIcon><i onClick={this.togglePasswordVisibility} 
              className={`fa ${isPasswordShown ? "fa-eye-slash" : "fa-eye"} password-icon`}></i></EyeIcon> 
            </SingupInput>

            <ButtonsComp type="submit"> 
              Enviar!
            </ButtonsComp>
          </Form>
        </ContainerLogin>
      </BodyComp>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  signUp: (name, email, nickname, password, role, description_band) => dispatch(signUp(name, email, nickname, password, role, description_band))
})

export default connect(null, mapDispatchToProps)(SignUpPage);

