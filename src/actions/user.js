import axios from 'axios';
import { routes } from '../containers/Router'
import { push } from 'connected-react-router'

const baseUrl = "http://localhost:3000"


////////////assíncronas
////////////action de cadastro de usuário
export const signUp = (name, email, username, password) => async (dispatch) => {
    const body = (name, email, username, password)
    try {
        const response = await axios.post(
            `${baseUrl}/user/signup`,
            body 
            );
        const token = response.data.result.Access_token
        const userRole = response.data.result.role
        localStorage.setItem("token", token)
        localStorage.setItem("userRole", userRole)
        dispatch(push(routes.homefree))
            console.log(response,"token", token,"role", userRole)
            alert("Cadstro feito com sucesso!")
    } catch (error) {
        alert("Verifique os campos. Não foi possível criar novo usuário.");
        console.error(error);
    }
}

////////////action de login
export const loginUser = (emailOrUsername, password) => async (dispatch) => {
    const body = { 
        emailOrUsername,
        password
    }
    try { const response = await axios.post (
        `${baseUrl}/user/login`, body
    ); 
    localStorage.setItem("token", response.data.result.Access_token)
    localStorage.setItem("role", response.data.result.role)
    dispatch(push(routes.homefree))
    } catch (error) {
        alert("Usuário ou senha inválidos. Tente novamente");
        console.error(error)
    }
}

