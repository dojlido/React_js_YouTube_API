import * as actionTypes from '../actionsCreators/actionTypes';
import {updateObject} from "../utility";

const initialState = {
    ingredients: {},
    totalPrice: 4,
    error: false
};

const INGREDIENT_PRICES: { [key: string]: number } = {
    salad: 0.5,
    cheese: 0.4,
    meat: 2,
    bacon: 0.7
};

interface IAction {
    type: string,
    ingredientName: any, //TODO change to correct type
    action: any;

    [key: string]: any;
}

interface IState {
    ingredients: {
        [key: string]: number,
    },
    totalPrice: number
}

const addIngredient = (state: IState, action: IAction) => {
    const updatedIngredient  = {[action.ingredientName]: state.ingredients[action.ingredientName] + 1};
    const updatedIngredients = updateObject(state.ingredients, updatedIngredient);
    const updatedState       = {
        ingredients:updatedIngredients,
        totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]
    };
    return updateObject(state, updatedState);
};

const removeIngredient = (state: IState, action: IAction) => {
    const updatedIngredient  = {[action.ingredientName]: state.ingredients[action.ingredientName] - 1};
    const updatedIngredients = updateObject(state.ingredients, updatedIngredient);
    const updatedState       = {
        ingredients:updatedIngredients,
        totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName]
    };
    return updateObject(state, updatedState);
};

const setIngredient = (state: IState, action: IAction) => {
    return updateObject(state,
        {
            ingredients: {
                salad: action.ingredients.salad,
                bacon: action.ingredients.bacon,
                cheese: action.ingredients.cheese,
                meat: action.ingredients.meat
            },
            error: false,
            totalPrice: 4
        });
};

const fetchIngredientError = (state: IState) => {
    return updateObject(
        state,
        {error:true}
    );
};

const burgerBuilderReducer = (state: IState = initialState, action: IAction) => {
    switch (action.type) {
        case actionTypes.ADD_INGREDIENT: return addIngredient(state, action);
        case actionTypes.REMOVE_INGREDIENT: return removeIngredient(state, action);
        case  actionTypes.SET_INGREDIENT: return setIngredient(state, action);
        case  actionTypes.FETCH_INGREDIENT_ERROR: return fetchIngredientError(state);
        default: return state;
    }
};

export default burgerBuilderReducer;

