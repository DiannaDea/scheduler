import axios from 'axios';

import { put, call } from 'redux-saga/effects';
import {NotificationManager} from "react-notifications";

import { addEventFailure, addEventSuccess } from '../../actions/eventsActions';

import { BASE_URL } from '../../constants/baseUrl';
import {ADD_EVENT_ERROR_MSG, ADD_EVENT_SUCCESS_MSG} from '../../constants/messages';


export default function* addEvent({ payload }) {
    try {
        const token = localStorage.getItem('token');

        const res = yield call(axios, {
            url: `${BASE_URL}/events`,
            method: 'POST',
            data: JSON.stringify(payload),
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-type': 'application/json'
            }
        });

        const event = res.data;
        NotificationManager.success('', ADD_EVENT_SUCCESS_MSG, 5000);

        yield put(addEventSuccess(event));

    } catch ({response}) {
        NotificationManager.error(response.data.message, ADD_EVENT_ERROR_MSG, 5000);

        yield put(addEventFailure(response.data.message, response.status));
    }
}
