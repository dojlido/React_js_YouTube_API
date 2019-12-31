import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
//provider give us possibility to inject into global scoper

import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import Reducer from './reduxStore/reducers/reducer';
import ReduxHooksReducer from './reduxStore/reducers/reduxHooksReducer';
import DevidedReducer from './reduxStore/reducers/devidedReducer';
import ReduxMiddleware from './components/middleware/reduxMiddleware';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import {watchUpdateB} from './sagas/saga';

const rootReducer = combineReducers({
    firstReducer:Reducer,
    secondReducer:DevidedReducer,
    reduxHooksReducer:ReduxHooksReducer
});

const logAction = ReduxMiddleware;

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(logAction, thunk, sagaMiddleware));
sagaMiddleware.run(watchUpdateB);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
