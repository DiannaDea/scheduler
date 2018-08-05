import {put, call} from 'redux-saga/effects';

import axios from 'axios';
import {logoutFailure, logoutSuccess} from '../../actions/authActions';

import {BASE_URL} from '../../constants/baseUrl';

import {history} from '../../router';

export default function* logout({payload}) {
    try {

        const token = localStorage.getItem("token");

        yield call(axios, {
            url: `${BASE_URL}/auth/logout`,
            method: 'POST',
            headers: {
                "Authorization": `Bearer ${token}`,
                "content-type": "application/json"
            }
        });

        localStorage.removeItem('token');

        yield put(logoutSuccess());

        yield history.push('/');

    }
    catch (error) {
        yield put(logoutFailure(error));
    }
}
