import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';

import {Provider} from 'react-redux';

import thunk from 'redux-thunk';

import createSagaMiddleware from 'redux-saga';
import {watchBurgerBuilderSaga, watchOrderSaga} from "./store/sagas/index";

import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import burgerBuilderReducer from "./store/reducers/burgerBuilderReducer";
import orderReducer from "./store/reducers/order";


import './index.css';
import './scss/main.scss';

import App from './App';
import * as serviceWorker from './serviceWorker';

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__:any;
        cos:any;
    }
}

let isDevelopemnt = process.env.NODE_ENV === 'development';
const composeEnhancers = isDevelopemnt ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;//this givs POSIBILLITY TO LOGIN (ex. error log) IN MOZILLA PLUGIN DEV TOOLS

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
    burgerBuilder: burgerBuilderReducer,
    order: orderReducer
});

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk, sagaMiddleware)
));

sagaMiddleware.run(watchBurgerBuilderSaga);
sagaMiddleware.run(watchOrderSaga);

const wrappedApp = (
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
);

ReactDOM.render(wrappedApp, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
