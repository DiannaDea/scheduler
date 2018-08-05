import axios from 'axios';
import { put, call } from 'redux-saga/effects';

import { getEventsFailure, getEventsSuccess } from '../../actions/eventsActions';
import { BASE_URL } from '../../constants/baseUrl';


export default function* getEvents({ payload }) {
    try {
        const token = localStorage.getItem('token');

        const res = yield call(axios, {
            url: `${BASE_URL}/events`,
            method: 'GET',
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-type': 'application/json'
            }
        });

        const  events  = res.data;

        yield put(getEventsSuccess(events));
    } catch (error) {
        yield put(getEventsFailure(error));
    }
}
