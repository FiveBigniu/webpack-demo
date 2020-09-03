
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import React from 'react';
import App from './app/index'
import Login from './app/login/index'

export default () => (
    <BrowserRouter >
        <Switch>
            <Route exact path="/" render={() => <Redirect to="/login" push />} />
            <Route path='/app' component={App} />
            <Route path="/login" component={Login} />
        </Switch>
    </BrowserRouter >
)
