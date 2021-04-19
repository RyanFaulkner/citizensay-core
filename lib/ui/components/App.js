import React, { Suspense } from "react";

import { Helmet } from "react-helmet";
import { Header } from "./base/Header";

import { Route, Switch } from 'react-router-dom';
import { Home } from "./Home";

import _ from 'lodash';

let routes = [{
    path: ["/home", "/"],
    component: Home
}];

const addRoute = route => routes.unshift(route);

const replaceComponent = route => {
    const i = routes.findIndex(r => _.isEqual(r.path, route.path));
    if (~i)
        routes[i] = route;
};

const renderWithId = (Component, id) => <Component {...id && { id }}/>;


const App = () => (
    <Suspense fallback={<div>loading...</div>}>

        <Helmet>
            <title>Home | CitizenSay</title>
            <link
                rel="icon"
                type="image/png"
                href="/packages/citizensay_core/img/cs-logo.png"
            />
            <link
                rel="stylesheet"
                href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
                integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
                crossorigin="anonymous"
            />
        </Helmet>

        <Header/>
        <br/>
        <Switch>
            {
                routes.map(props =>
                    <Route
                        key={props.path}
                        {...props}
                    />
                )
            }
        </Switch>

    </Suspense>
);

export { addRoute, replaceComponent, renderWithId, App }