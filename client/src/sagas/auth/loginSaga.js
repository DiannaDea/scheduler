import {put, call} from 'redux-saga/effects';

import axios from 'axios';
import {loginSuccess, loginFailure} from '../../actions/loginActions';

import {BASE_URL} from '../../constants/baseUrl';


export default function* login({payload}) {
    try {
        console.log('PAYLOAD', payload);
        const {history} = payload;

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
        yield history.push('/signup');

    }
    catch (error) {
        yield put(loginFailure(error));
        localStorage.removeItem('token');
    }
}
