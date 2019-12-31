import {useSelector, useDispatch} from "react-redux";

const initialState = {
    counter:0
};

function reduxHooksReducer(state = initialState, action){
    if(action.type === 'INCREMENT'){
        return {
            counter: state.counter + 1
        };
    }

    if(action.type === 'DECREMENT')
    {
        return {
            counter: state.counter - 1
        };
    }
    else {
        return state;
    }
}

export  default reduxHooksReducer;