import React from 'react';

import {Switch, Route} from 'react-router-dom';
import Header from '../containers/Header';
import Main from './Main';
import Login from '../containers/Login';


const Body = () => (
    <React.Fragment>
        <Switch>
            <Route exact path="/" component={Main}/>
            <Route path="/signin" component={Login}/>
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
