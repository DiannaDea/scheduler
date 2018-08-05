import {takeEvery} from 'redux-saga/effects';

import {
    ADD_EVENT_REQUEST, DELETE_EVENT_REQUEST,
    GET_EVENTS_REQUEST
} from '../../constants/actionTypes';

import getEvents from './getEventsSaga';
import addEvent from './addEventSaga';
import deleteEvent from './deleteEventSaga';

export default function* auth() {
    yield takeEvery(GET_EVENTS_REQUEST, getEvents);
    yield takeEvery(ADD_EVENT_REQUEST, addEvent);
    yield takeEvery(DELETE_EVENT_REQUEST, deleteEvent);
}
