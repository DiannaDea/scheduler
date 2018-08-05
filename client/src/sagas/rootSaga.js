import { fork } from 'redux-saga/effects';

import auth from './auth';
import events from './events';

export default function* rootSaga() {
    yield fork(auth);
    yield fork(events);
}
