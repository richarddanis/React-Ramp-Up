import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import Page404 from '../components/error/Page404';
import history from '../components/util/history';

const RoutingProvider = () => {
    return (
        <div>
            <BrowserRouter history={history}>
                <Switch>
                    <Route exact path={['/', '/film/:id', '/search']} component={App} />
                    <Route component={Page404} />
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default RoutingProvider; 