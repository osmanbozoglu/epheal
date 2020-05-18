import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "./components/header";
import Home from "./components/home";


const Routes = () => (

    <BrowserRouter>
        <Header />
        <Switch>
            <Route path="/" component={Home} />
        </Switch>
    </BrowserRouter>

);



export default Routes;