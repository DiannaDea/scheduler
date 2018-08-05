import {
    GET_EVENTS_REQUEST,
    GET_EVENTS_SUCCESS,
    GET_EVENTS_FAILURE
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

export const getEventsFailure = ({ response }) => {
    const { message } = response.data;
    const { status } = response;

    return {
        type: GET_EVENTS_FAILURE,
        payload: { message, status }
    };
};
