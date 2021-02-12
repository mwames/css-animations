import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from 'scenes/Home';

const AppRouter = (): JSX.Element => (
    <Switch>
        <Route exact path="/" component={Home} />
    </Switch>
);

export default AppRouter;
