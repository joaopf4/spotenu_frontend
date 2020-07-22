import axios from 'axios';
import { routes } from '../containers/Router'
import { push } from 'connected-react-router'

const baseUrl = "http://localhost:3001"


////////////assíncronas
////////////action de cadastro de usuário
export const signUp = (name, email, username, password) => async (dispatch) => {
    const body = (name, email, username, password)
    try {
        const response = await axios.post(
            `${baseUrl}/user/signup`,
            body 
            );
        localStorage.setItem("token", response.data.token)
        dispatch(push(routes.listPosts))
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
    localStorage.setItem("token", response.data.token)
    dispatch(push(routes.homefree))
    } catch (error) {
        alert("Usuário ou senha inválidos. Tente novamente");
        console.error(error)
    }
}

