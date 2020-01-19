export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADD = 'ADD';
export const SUBSTTRACT = 'SUBSTTRACT';
export const STORE_RESULT = 'STORE_RESULT';
export const DELETE_RESULT = 'DELETE_RESULT';

export const increment = () => {
    return {
        type:INCREMENT
    };
};

export const decrement = () => {
    return {
        type:DECREMENT
    };
};


export const add = (valueParam) => {
    return {
        type:ADD,
        value:valueParam
    };
};

export const substract = (valueParam) => {
    return {
        type:SUBSTTRACT,
        value:valueParam
    };
};


export const saveResult = (resultParam) => {

    return  {
        type:STORE_RESULT,
        result:resultParam
    };
};

export const storeResult = (resultParam) => {
    return (dispatch, getState) => {
        const oldCounter = getState().ctr.counter; //we have to take name of obeject form method that map state to props in this example mapStateToProps();
        // setTimeout( () => { //async action
        //     dispatch(saveResult(resultParam));
        // }, 2000);
        dispatch(saveResult(resultParam));
    };
};

export const deleteResult = (resultElementIdParam) => {
    return {
        type:DELETE_RESULT,
        resultElementId:resultElementIdParam
    };
};