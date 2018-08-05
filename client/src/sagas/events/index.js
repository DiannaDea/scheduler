import {takeEvery} from 'redux-saga/effects';

import {
    GET_EVENTS_REQUEST
} from '../../constants/actionTypes';

import getEvents from './getEventsSaga';

export default function* auth() {
    yield takeEvery(GET_EVENTS_REQUEST, getEvents);
}
