import axios from 'axios';
import {put, call} from 'redux-saga/effects';

import {importJSONFailure, importJSONSuccess} from '../../actions/eventsActions';
import {BASE_URL} from '../../constants/baseUrl';

const handleFileDownload = (res) => {
    const url = window.URL.createObjectURL(new Blob([res.data]));

    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'events.json');

    document.body.appendChild(link);

    link.click();
};

export default function* addEvent({payload}) {
    try {
        const token = localStorage.getItem('token');

        const res = yield call(axios, {
            url: `${BASE_URL}/events/json`,
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-type': 'application/json'
            },
            responseType: 'blob'
        });

        handleFileDownload(res);

        yield put(importJSONSuccess());

    } catch (error) {
        yield put(importJSONFailure(error));
    }
}
