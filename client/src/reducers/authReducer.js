import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT
} from '../constants/actionTypes';

const initialState = {
    data: {},
    error: {}
};

export default (state = initialState, { payload, type }) => {
    switch (type) {
        case LOGIN_REQUEST:
            return { ...state, isFetching: true };
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
        case LOGOUT:
            return { ...state };
        default:
            return state;
    }
};
