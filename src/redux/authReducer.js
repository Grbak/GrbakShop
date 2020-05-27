import {AuthAPI} from '../api/api';

const AUTH = 'AUTH';
const UNAUTH = 'UNAUTH';
const UPDATE_LOGIN_TEXT = 'UPDATE-LOGIN-TEXT';
const UPDATE_PASSWORD_TEXT = 'UPDATE-PASSWORD-TEXT';

let initialState = {
    isAuth: false,
    login: null,
    id: null,
    loginText: '',
    passwordText: '',
};

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case AUTH: 
            return {
                ...state,
                isAuth: true,
                login: action.login,
                id: action.id,
                loginText: '',
                passwordText: '',
            };

        case UNAUTH:
            return {
                ...state,
                isAuth: false,
                login: null,
                id: null,
            };

        case UPDATE_LOGIN_TEXT: 
            return {
                ...state,
                loginText: action.newLoginText,
            };
        
        case UPDATE_PASSWORD_TEXT: 
            return {
                ...state,
                passwordText: action.newPasswordText,
            };

        default: 
            return {...state};
    }
}

export const auth = (login, id) => ({type: AUTH, login, id});
export const unauth = () => ({type: UNAUTH});
export const updateLoginText = (newLoginText) => ({type: UPDATE_LOGIN_TEXT, newLoginText});
export const updatePasswordText = (newPasswordText) => {
    return {type: UPDATE_PASSWORD_TEXT, newPasswordText};
};

export default authReducer;

export const authThunk = (login, password) => {
    return (dispatch) => {
        AuthAPI.logIn(login, password)
        .then((data) => {  
            if(data.id) {
                console.log(data)
                dispatch(auth(data.login, data.id));
            }
        });
    };
};


