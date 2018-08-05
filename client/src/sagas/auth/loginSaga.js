import {put, call} from 'redux-saga/effects';

import axios from 'axios';
import {loginSuccess, loginFailure} from '../../actions/authActions';

import {BASE_URL} from '../../constants/baseUrl';

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

        yield put(loginSuccess(token));

        yield history.push('/schedule');

    }
    catch (error) {
        yield put(loginFailure(error));

        localStorage.removeItem('token');
    }
}
