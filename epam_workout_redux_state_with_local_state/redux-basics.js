const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
    counter: 0
};

//Reducer - the logic of actions
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

// Subscription - it' show the result of dispatching action
store.subscribe(() => {
    console.log('[Subscription]', store.getState())
});

//Dispatching action
store.dispatch({type: 'INCRE_COUNTER'});
store.dispatch({type: 'ADD_COUNTER', value: 10});
console.log(store.getState());

