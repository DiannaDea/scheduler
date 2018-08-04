import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import { routerReducer } from 'react-router-redux';

import authReducer from './authReducer';

const rootReducer = combineReducers({
    routing: routerReducer,
    form: formReducer,
    user: authReducer
});


export default rootReducer;
