import {takeEvery} from 'redux-saga/effects';

import {
    LOGIN_REQUEST,
    LOGOUT_REQUEST
} from '../../constants/actionTypes';

import loginReq from './loginSaga';
import logoutReq from './logoutSaga';

export default function* auth() {
    yield takeEvery(LOGIN_REQUEST, loginReq);
    yield takeEvery(LOGOUT_REQUEST, logoutReq);
}
