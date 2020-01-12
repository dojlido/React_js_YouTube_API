import React from 'react';
import Layout from './hoc/Layout/Layout';
import BurgerBuilder from '../src/containers/BurgerBuilder/BurgerBuilder';
import Checkout from '../src/containers/Checkout/Checkout';
import Orders from './containers/Orders/Orders';


import {Route, Switch} from "react-router-dom";
function App() {
    return (
            <div>
                <Layout>
                    <Switch>
                        <Route path="/checkout" component={Checkout}/>
                        <Route path="/orders" exact component={Orders}/>
                        <Route path="/" exact component={BurgerBuilder}/>
                    </Switch>
                </Layout>
            </div>
    );
}

export default App;
