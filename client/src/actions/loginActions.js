import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT
} from '../constants/actionTypes';

export const login = (email, password, history) => ({
    type: LOGIN_REQUEST,
    payload: {
        email, password, history
    }
});

export const loginSuccess = token => ({
    type: LOGIN_SUCCESS,
    payload: {
        token
    }
});

export const loginFailure = ({ response }) => {
    const { message } = response.data;
    const { status } = response;

    return {
        type: LOGIN_FAILURE,
        payload: {
            message, status
        }
    };
};

export const logout = () => ({
    type: LOGOUT,
    payload: null
});
