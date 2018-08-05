import {
    GET_EVENTS_SUCCESS,
    GET_EVENTS_FAILURE,
    GET_EVENTS_REQUEST
} from '../constants/actionTypes';

const initialState = {
    data: {},
    error: {}
};

export default (state = initialState, { payload, type }) => {
    switch (type) {
        case GET_EVENTS_REQUEST:
            return {
                ...state,
                isFetching: true
            };
        case GET_EVENTS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                data: payload,
                error: {}
            };
        case GET_EVENTS_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: payload,
                data: {}
            };
        default:
            return state;
    }
};
