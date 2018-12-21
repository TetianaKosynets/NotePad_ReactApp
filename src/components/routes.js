import React from 'react';
import Home from './home';
import { Route, Switch } from 'react-router-dom';

const Routes = function () {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
        </Switch>
    );
}

export default Routes;