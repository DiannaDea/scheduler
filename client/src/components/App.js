import React from 'react';

import {Switch, Route} from 'react-router-dom';
import {NotificationContainer} from 'react-notifications';

import Header from '../containers/Header';
import Login from './auth/Login';
import Logout from './auth/Logout';
import Scheduler from '../containers/Scheduler';

const Body = () => (
    <React.Fragment>
        <Switch>
            <Route exact path="/" component={Login}/>
            <Route path="/signout" component={Logout}/>
            <Route path="/schedule" component={Scheduler}/>
        </Switch>
    </React.Fragment>
);

const App = () => (
    <React.Fragment>
        <NotificationContainer/>
        <Header/>
        <Body/>
    </React.Fragment>
);

export default App;
