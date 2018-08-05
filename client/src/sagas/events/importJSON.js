import axios from 'axios';

import {put, call} from 'redux-saga/effects';
import {NotificationManager} from 'react-notifications';

import {importJSONFailure, importJSONSuccess} from '../../actions/eventsActions';

import {BASE_URL} from '../../constants/baseUrl';
import {DOWNLOAD_ERROR_MSG, DOWNLOAD_SUCCESS_MSG} from '../../constants/messages';


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
        NotificationManager.info('', DOWNLOAD_SUCCESS_MSG, 5000);

        yield put(importJSONSuccess());

    } catch ({response}) {
        NotificationManager.error(response.data.message, DOWNLOAD_ERROR_MSG, 5000);
        yield put(importJSONFailure(response.data.message, response.status));
    }
}
