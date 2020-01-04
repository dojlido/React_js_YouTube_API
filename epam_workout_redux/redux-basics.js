const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
    counter: 0
};

//Reducer
const rootReducer = (state = initialState, action) => {
    if(action.type === 'INCRE_COUNTER')
    {
        return {
            ...state,
            counter: state.counter + 1
        }
    }
    if(action.type === 'ADD_COUNTER')
    {
        return {
            ...state,
            counter: state.counter + action.value
        }
    }
};

//Store
const store = createStore(rootReducer());
console.log(store.getState());

//dispatching action
store.dispatch({type: 'INCRE_COUNTER'});
store.dispatch({type: 'ADD_COUNTER', value: 10});
console.log(store.getState());

// subscription