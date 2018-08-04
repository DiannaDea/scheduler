import React from 'react';

import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import store from './store';

import App from './components/App';

const history = createHistory();

const router = (
    <Provider store={store}>
        <BrowserRouter history={history}>
            <App />
      </BrowserRouter>
  </Provider>
);
export default router;
