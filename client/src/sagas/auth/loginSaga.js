import axios from 'axios';

import {put, call} from 'redux-saga/effects';
import {NotificationManager} from 'react-notifications';

import {loginSuccess, loginFailure} from '../../actions/authActions';
import {history} from '../../router';

import {BASE_URL} from '../../constants/baseUrl';
import {LOGIN_SUCCESS_MSG, LOGIN_ERROR_MSG} from '../../constants/messages';


export default function* login({payload}) {
    try {
        const res = yield call(axios, {
            url: `${BASE_URL}/auth/signin`,
            method: 'POST',
            data: JSON.stringify(payload),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });

        let {token} = res.data;

        localStorage.setItem('token', token);
        NotificationManager.success('', LOGIN_SUCCESS_MSG, 5000);

        yield put(loginSuccess(token));
        yield history.push('/schedule');

    } catch ({response}) {
        NotificationManager.error(response.data.message, LOGIN_ERROR_MSG, 5000);
        localStorage.removeItem('token');

        yield put(loginFailure(response.data.message, response.status));
    }
}
