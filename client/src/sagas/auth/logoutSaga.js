import axios from 'axios';

import {put, call} from 'redux-saga/effects';
import {NotificationManager} from 'react-notifications';

import {history} from '../../router';
import {logoutFailure, logoutSuccess} from '../../actions/authActions';

import {BASE_URL} from '../../constants/baseUrl';
import {LOGOUT_SUCCESS_MSG, LOGOUT_ERROR_MSG} from '../../constants/messages';

export default function* logout({payload}) {
    try {
        const token = localStorage.getItem('token');

        yield call(axios, {
            url: `${BASE_URL}/auth/logout`,
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'content-type': 'application/json'
            }
        });

        localStorage.removeItem('token');
        NotificationManager.success('', LOGOUT_SUCCESS_MSG, 5000);

        yield put(logoutSuccess());
        yield history.push('/');

    } catch ({response}) {
        NotificationManager.error(response.data.message, LOGOUT_ERROR_MSG, 5000);
        yield put(logoutFailure(response.data.message, response.status));
    }
}
