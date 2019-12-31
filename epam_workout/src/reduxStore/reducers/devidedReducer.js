const initialState = {
    a:1,
    b:1
};

const devidedReducer = (state = initialState, action) => {
    const newState = {...state};
    if(action.type === 'UPDATE_A'){
        return {
            ...state,// copy of state (always must be copy of state ...)
            a:state.a + action.b,
            loading:newState.loading = false
        };

    }
    if(action.type === 'UPDATE_B_ASYNC'){
        return {
            ...state,// copy of state (always must be copy of state ...)
            b:state.b + action.a,
        };
    }
    if(action.type === 'LOADING'){
            newState.loading = true
    }
    return newState;
};

export default devidedReducer;



