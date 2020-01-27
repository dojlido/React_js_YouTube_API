import React from 'react';
import Layout from './hoc/Layout/Layout';
import BurgerBuilder from '../src/containers/BurgerBuilder/BurgerBuilder';

import {Route, Switch} from "react-router-dom";

import asyncComponent from './hoc/acyncComponent/asyncComponent';

const asyncCheckout = asyncComponent( () => {
    return import('../src/containers/Checkout/Checkout');
});

const asyncOrders = asyncComponent( () => {
    return import('./containers/Orders/Orders');
});

function App() {
    return (
            <div>
                <Layout>
                    <Switch>
                        <Route path="/checkout" component={asyncCheckout}/>
                        <Route path="/orders" exact component={asyncOrders}/>
                        <Route path="/" exact component={BurgerBuilder}/>
                    </Switch>
                </Layout>
            </div>
    );
}

export default App;
