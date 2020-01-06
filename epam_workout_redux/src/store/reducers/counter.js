import * as actionTypes from './../action';

const initialState = {
    counter: 12,
};

const counterReducer = (state = initialState, action) => {
    if(action.type === actionTypes.INCREMENT)
    {
        return {
            ...state,
            counter: state.counter + 1
        }
    }
    else if(action.type === actionTypes.DECREMENT)
    {
        return {
            ...state,
            counter: state.counter - 1
        }
    }
    else if(action.type === actionTypes.ADD)
    {
        return {
            ...state,
            counter: state.counter + action.value
        }
    }
    else if(action.type === actionTypes.SUBSTTRACT)
    {
        return {
            ...state,
            counter: state.counter - + action.value
        }
    }
    else {
        return {
            ...state,
            counter: state.counter
        }
    }
};

export default counterReducer;