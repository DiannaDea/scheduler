import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import { routerReducer } from 'react-router-redux';

import authReducer from './authReducer';
import eventsReducer from './eventsReducer';

const rootReducer = combineReducers({
    routing: routerReducer,
    form: formReducer,
    user: authReducer,
    events : eventsReducer
});


export default rootReducer;
