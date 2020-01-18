import * as actionTypes from '../../store/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    result:[]
};

const resultReducer = (state = initialState, action) => {

    if(action.type === actionTypes.STORE_RESULT)
    {
        return updateObject(state, {result: state.result.concat({id: new Date(), value: action.result})} );//immutable way of editing array}
    }
    else if(action.type === actionTypes.DELETE_RESULT)
    {
        const newArray = state.result.filter(result => result.id !== action.resultElementId); //delete elements from array immutable
        return updateObject(state, {result: newArray} );//immutable way of editing array}
    }
    else {
       return updateObject(state, { result: state.result} );//immutable way of editing array}
    }
};

export default resultReducer;