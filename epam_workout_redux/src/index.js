import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// STORE
import {createStore, combineReducers, applyMiddleware, compose} from "redux";
import thunk from "redux-thunk"
import {Provider} from "react-redux";
import counterReducer from "./store/reducers/counter";
import resultReducer from "./store/reducers/result";

const rootReducer = combineReducers({
    ctr:counterReducer,
    storedResults:resultReducer
});

//MIDDELWARE
const logger = store => {
    return next => {
        return action => {
            console.log('middelware action', action);
            const result = next(action);
            console.log('middelware next state', store.getState());
            return result;
        }
    };
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; //this givs POSIBILLITY TO LOGIN (ex. error log) IN MOZILLA PLUGIN DEV TOOLS

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger, thunk)) );
// END STORE



ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));
registerServiceWorker();
