import React from 'react';
import { createBrowserHistory } from 'history';
import { Router } from 'react-router-dom';
import AppRouter from './routers/AppRouter';
import './styles/main.scss';

const history = createBrowserHistory();
const App = (): JSX.Element => (
    <Router history={history}>
        <AppRouter />
    </Router>
);

export default App;
