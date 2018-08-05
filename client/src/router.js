import React from 'react';

import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';

import { createBrowserHistory } from 'history';

import store from './store';

import App from './components/App';

export const history = createBrowserHistory();

const router = (
    <Provider store={store}>
        <Router history={history}>
            <App />
      </Router>
  </Provider>
);

export default router;
