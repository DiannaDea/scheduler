import {put, call} from 'redux-saga/effects';

import axios from 'axios';
import {loginSuccess, loginFailure} from '../../actions/authActions';
import {NotificationManager} from "react-notifications";

import {BASE_URL} from '../../constants/baseUrl';
import {LOGIN_SUCCESS_MSG, LOGIN_ERROR_MSG} from '../../constants/messages';

import {history} from '../../router';

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

    }
    catch (error) {

        yield put(loginFailure(error));

        NotificationManager.error(error.response.data.message, LOGIN_ERROR_MSG, 5000);

        localStorage.removeItem('token');
    }
}
