import React from 'react';

import {Switch, Route} from 'react-router-dom';
import Header from './Header';
import Main from './Main';


const Body = () => (
    <React.Fragment>
        <Switch>
            <Route exact path="/" component={Main}/>
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
