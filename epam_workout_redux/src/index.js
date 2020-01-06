import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// STORE
import {createStore, combineReducers} from "redux";
import {Provider} from "react-redux";
import counterReducer from "./store/reducers/counter";
import resultReducer from "./store/reducers/result";

const rootReducer = combineReducers({
    ctr:counterReducer,
    storedResults:resultReducer
});

const store = createStore(rootReducer);
// END STORE


ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));
registerServiceWorker();
