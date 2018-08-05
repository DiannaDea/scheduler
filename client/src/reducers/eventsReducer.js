import {
    GET_EVENTS_SUCCESS,
    GET_EVENTS_FAILURE,
    GET_EVENTS_REQUEST,
    ADD_EVENT_SUCCESS,
    ADD_EVENT_FAILURE,
    ADD_EVENT_REQUEST,
    DELETE_EVENT_REQUEST,
    DELETE_EVENT_SUCCESS, DELETE_EVENT_FAILURE
} from '../constants/actionTypes';

const initialState = {
    data: {},
    error: {}
};

const addEvent = (events, event) => ({
    events: [...events, event]
});

const deleteEvent = (events, eventId) => {
    return {
        events: events.filter(event => event._id !== eventId)
    }
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
        case ADD_EVENT_REQUEST:
            return {
                ...state,
                isFetching: true
            };
        case ADD_EVENT_SUCCESS:
            return {
                ...state,
                isFetching: false,
                data: addEvent(state.data.events, payload.event),
                error: {}
            };
        case ADD_EVENT_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: payload,
                data: {}
            };
        case DELETE_EVENT_REQUEST:
            return {
                ...state,
                isFetching: true
            };
        case DELETE_EVENT_SUCCESS:
            return {
                ...state,
                isFetching: false,
                data: deleteEvent(state.data.events, payload.id),
                error: {}
            };
        case DELETE_EVENT_FAILURE:
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
