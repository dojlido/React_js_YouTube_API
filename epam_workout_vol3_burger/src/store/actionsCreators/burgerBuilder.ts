import * as actionTypes from './actionTypes';

export const addIngredient = (ingredientNameParam:string) => {
    return {
        type:actionTypes.ADD_INGREDIENT,
        ingredientName:ingredientNameParam
    };
};

export const removeIngredient = (ingredientNameParam:string) => {
    return {
        type:actionTypes.REMOVE_INGREDIENT,
        ingredientName:ingredientNameParam
    };
};

/**ASYNC REQUEST - react saga*/
export const initialIngriedient = () => {
    return {
        type:actionTypes.SAGA_INITIAL_INGRIEDIENT,
    }
};

export const setIngriedient = (ingriedientsParam:any) => {
    return {
        type:actionTypes.SET_INGREDIENT,
        ingredients:ingriedientsParam
    };
};

export const fetchIngriedientError = () => {
    return {
        type:actionTypes.FETCH_INGREDIENT_ERROR
    };
};

/**END ASYNC REQUEST - react thunk*/
