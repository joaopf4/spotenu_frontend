import axios from 'axios';
import { routes } from '../containers/Router'
import { push } from 'connected-react-router'

const baseUrl = "https://u8c0wfyum6.execute-api.us-east-1.amazonaws.com/dev"


////////////assíncronas
////////////action de cadastro de usuário
export const signUp = (name, email, nickname, password, role, description_band) => async (dispatch) => {
    const body = {name, email, nickname, password, role, description_band}
    try {
        console.log(body)
        const response = await axios.post(
            `${baseUrl}/user/signup`,
            body 
            );
        const token = response.data.Access_token
        const userRole = response.data.role
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

