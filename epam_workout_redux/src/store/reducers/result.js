import * as actionTypes from './../action';

const initialState = {
    result:[]
};

const resultReducer = (state = initialState, action) => {

    if(action.type === actionTypes.STORE_RESULT)
    {
        return {
            ...state, //immutable way of editing state
            result: state.result.concat({id: new Date(), value: action.result}) //immutable way of editing array
        }
    }
    else if(action.type === actionTypes.DELETE_RESULT)
    {
        const newArray = state.result.filter(result => result.id !== action.resultElementId); //delete elements from array immutable
        return {
            ...state, //immutable way of editing state
            result: newArray //immutable way of editing array
        }
    }
    else {
        return {
            ...state,
            result: state.result
        }
    }
};

export default resultReducer;