import {
    GET_EVENTS_REQUEST,
    GET_EVENTS_SUCCESS,
    GET_EVENTS_FAILURE,
    ADD_EVENT_REQUEST,
    ADD_EVENT_SUCCESS,
    ADD_EVENT_FAILURE,
    DELETE_EVENT_REQUEST,
    DELETE_EVENT_SUCCESS,
    DELETE_EVENT_FAILURE,
    IMPORT_JSON_REQUEST,
    IMPORT_JSON_SUCCESS,
    IMPORT_JSON_FAILURE
} from '../constants/actionTypes';


export const getEvents = () => ({
    type: GET_EVENTS_REQUEST,
    payload: null
});

export const getEventsSuccess = events => ({
    type: GET_EVENTS_SUCCESS,
    payload: {
        events
    }
});

export const getEventsFailure = (message, status) => ({
    type: GET_EVENTS_FAILURE,
    payload: {
        message, status
    }
});

export const addEvent = (start, title, duration) => ({
    type: ADD_EVENT_REQUEST,
    payload: {
        start, title, duration
    }
});

export const addEventSuccess = event => ({
    type: ADD_EVENT_SUCCESS,
    payload: {
        event
    }
});

export const addEventFailure = (message, status) => ({
    type: ADD_EVENT_FAILURE,
    payload: {
        message, status
    }
});

export const deleteEvent = id => ({
    type: DELETE_EVENT_REQUEST,
    payload: {
        id
    }
});

export const deleteEventSuccess = id => ({
    type: DELETE_EVENT_SUCCESS,
    payload: {
        id
    }
});

export const deleteEventFailure = (message, status) => ({
    type: DELETE_EVENT_FAILURE,
    payload: {
        message, status
    }
});

export const importJSON = () => ({
    type: IMPORT_JSON_REQUEST,
    payload: null
});

export const importJSONSuccess = () => ({
    type: IMPORT_JSON_SUCCESS,
    payload: null
});

export const importJSONFailure = (message, status) => ({
    type: IMPORT_JSON_FAILURE,
    payload: {
        message, status
    }
});
