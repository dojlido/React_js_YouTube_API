import * as actionTypes from '../../store/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    counter: 12,
};

const counterReducer = (state = initialState, action) => {
    if(action.type === actionTypes.INCREMENT)
    {
        return updateObject(state, {counter: state.counter + 1});
    }
    else if(action.type === actionTypes.DECREMENT)
    {
        return updateObject(state, {counter: state.counter - 1});
    }
    else if(action.type === actionTypes.ADD)
    {
        return updateObject(state, {counter: state.counter + action.value});
    }
    else if(action.type === actionTypes.SUBSTTRACT)
    {
        return updateObject(state, {counter: state.counter - + action.value});
    }
    else {
        return updateObject(state, {counter: state.counter});
    }
};

export default counterReducer;