import {takeEvery} from 'redux-saga/effects';

import {
    LOGIN_REQUEST,
} from '../../constants/actionTypes';

import loginReq from './loginSaga';

export default function* auth() {
    yield takeEvery(LOGIN_REQUEST, loginReq);
}
