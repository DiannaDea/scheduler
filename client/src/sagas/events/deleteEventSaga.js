import axios from 'axios';
import { put, call } from 'redux-saga/effects';

import { deleteEventFailure, deleteEventSuccess } from '../../actions/eventsActions';
import { BASE_URL } from '../../constants/baseUrl';


export default function* deleteEvent({ payload }) {
    try {
        const token = localStorage.getItem('token');

        const res = yield call(axios, {
            url: `${BASE_URL}/events/${payload.id}`,
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-type': 'application/json'
            }
        });


        yield put(deleteEventSuccess(payload.id));
    } catch (error) {
        yield put(deleteEventFailure(error));
    }
}
