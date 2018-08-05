import React from 'react';

import {Switch, Route} from 'react-router-dom';

import Header from '../containers/Header';
import Main from './Main';
import Login from './auth/Login';
import Logout from './auth/Logout';
import Scheduler from '../containers/Scheduler';


const Body = () => (
    <React.Fragment>
        <Switch>
            <Route exact path="/" component={Main}/>
            <Route path="/signin" component={Login}/>
            <Route path="/signout" component={Logout}/>
            <Route path="/schedule" component={Scheduler}/>
        </Switch>
    </React.Fragment>
);

const App = () => (
    <React.Fragment>
        <Header/>
        <Body/>
    </React.Fragment>
);

export default App;
