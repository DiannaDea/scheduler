import {takeEvery} from 'redux-saga/effects';

import {
    ADD_EVENT_REQUEST, DELETE_EVENT_REQUEST,
    GET_EVENTS_REQUEST, IMPORT_JSON_REQUEST
} from '../../constants/actionTypes';

import getEvents from './getEventsSaga';
import addEvent from './addEventSaga';
import deleteEvent from './deleteEventSaga';
import importJSON from './importJSON';

export default function* auth() {
    yield takeEvery(GET_EVENTS_REQUEST, getEvents);
    yield takeEvery(ADD_EVENT_REQUEST, addEvent);
    yield takeEvery(DELETE_EVENT_REQUEST, deleteEvent);
    yield takeEvery(IMPORT_JSON_REQUEST, importJSON);
}
