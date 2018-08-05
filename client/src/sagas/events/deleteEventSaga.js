import axios from 'axios';

import { put, call } from 'redux-saga/effects';
import {NotificationManager} from "react-notifications";

import { deleteEventFailure, deleteEventSuccess } from '../../actions/eventsActions';

import { BASE_URL } from '../../constants/baseUrl';
import {
    DELETE_EVENT_ERROR_MSG,
    DELETE_EVENT_SUCCESS_MSG
} from '../../constants/messages';


export default function* deleteEvent({ payload }) {
    try {
        const token = localStorage.getItem('token');

        yield call(axios, {
            url: `${BASE_URL}/events/${payload.id}`,
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-type': 'application/json'
            }
        });

        NotificationManager.success('', DELETE_EVENT_SUCCESS_MSG, 5000);

        yield put(deleteEventSuccess(payload.id));
    } catch ({response}) {
        NotificationManager.error(response.data.message, DELETE_EVENT_ERROR_MSG, 5000);
        yield put(deleteEventFailure(response.data.message, response.status));
    }
}
