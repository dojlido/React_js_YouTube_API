import * as actionTypes from '../actions/actionTypes';

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

const burgerBuilder = (state: IState = initialState, action: IAction) => {
    switch (action.type) {
        case actionTypes.ADD_INGREDIENT:
            return {
                ...state,
                ingredients: {    //TODO IMMUTABLE WAY OF STATE COPY !!
                    ...state.ingredients,
                    [action.ingredientName]: state.ingredients[action.ingredientName] + 1  //TODO FETCH THE OLD VALUE OF INGRIEDENT BY ingredientName KEY
                },
                totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]
            };
        case actionTypes.REMOVE_INGREDIENT:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName]: state.ingredients[action.ingredientName] - 1
                },
                totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName]
            };
        case  actionTypes.SET_INGREDIENT:
            return {
                ...state,
                ingredients: action.ingriedients,
                error:false
            };
        case  actionTypes.FETCH_INGREDIENT_ERROR:
            return {
                ...state,
                error:true
            };
        default:
            return state;
    }

};

export default burgerBuilder;

