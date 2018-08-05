import axios from 'axios';
import { put, call } from 'redux-saga/effects';

import { addEventFailure, addEventSuccess } from '../../actions/eventsActions';
import { BASE_URL } from '../../constants/baseUrl';


export default function* addEvent({ payload }) {
    try {
        const token = localStorage.getItem('token');

        const res = yield call(axios, {
            url: `${BASE_URL}/events`,
            method: 'POST',
            data: JSON.stringify(payload),
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-type': 'application/json'
            }
        });

        const event = res.data;

        yield put(addEventSuccess(event));
    } catch (error) {
        yield put(addEventFailure(error));
    }
}
