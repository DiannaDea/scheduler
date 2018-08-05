import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT_REQUEST,
    LOGOUT_FAILURE,
    LOGOUT_SUCCESS
} from '../constants/actionTypes';

const initialState = {
    data: {},
    error: {}
};

export default (state = initialState, { payload, type }) => {
    switch (type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                isFetching: true
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                isFetching: false,
                data: payload,
                error : {}
            };
        case LOGIN_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: payload,
                data : {}
            };
        case LOGOUT_REQUEST:
            return {
                ...state,
                isFetching: true
            };
        case LOGOUT_SUCCESS:
            return {
                ...state,
                isFetching: false,
                data : {}
            };
        case LOGOUT_FAILURE:
            return {
                ...state,
                isFetching: false,
                error : payload
            };
        default:
            return state;
    }
};
