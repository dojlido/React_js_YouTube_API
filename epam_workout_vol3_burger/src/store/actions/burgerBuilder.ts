import * as actionTypes from './actionTypes';
import axios from '../../axios-orders'

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


/**ASYNC REQUEST - react thunk*/
export const initialIngriedient = () => {
    return (dispatch:any) =>  {
        //TODO take price of ingriedients from dataBase
        axios.get('https://react-my-burger-dojlido.firebaseio.com/ingredients.json')
            .then(response => {
                dispatch(setIngriedient(response.data))
            }).catch(error => {
                dispatch(fetchIngriedientError());
        });
    };
};

export const setIngriedient = (ingriedientsParam:any) => {
    return {
        type:actionTypes.SET_INGREDIENT,
        ingriedients:ingriedientsParam
    };
};

export const fetchIngriedientError = () => {
    return {
        type:actionTypes.FETCH_INGREDIENT_ERROR
    };
};

/**END ASYNC REQUEST - react thunk*/
