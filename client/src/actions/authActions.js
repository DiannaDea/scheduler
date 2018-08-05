import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT_REQUEST,
    LOGOUT_FAILURE,
    LOGOUT_SUCCESS
} from '../constants/actionTypes';

export const login = (email, password) => ({
    type: LOGIN_REQUEST,
    payload: {
        email, password
    }
});

export const loginSuccess = token => ({
    type: LOGIN_SUCCESS,
    payload: {
        token
    }
});

export const loginFailure = (message, status) => ({
    type: LOGIN_FAILURE,
    payload: {
        message, status
    }
});

export const logout = () => ({
    type: LOGOUT_REQUEST,
    payload: null
});

export const logoutSuccess = () => ({
    type: LOGOUT_SUCCESS,
    payload: null
});

export const logoutFailure = (message, status) => ({
    type: LOGOUT_FAILURE,
    payload: {
        message, status
    }
});


