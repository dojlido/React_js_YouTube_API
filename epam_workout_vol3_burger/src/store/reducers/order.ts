import * as actionTypes from '../actionsCreators/actionTypes';

const initialState = {
    orders: [],
    loading:false,
    purchased:false
};

interface IAction {
    type: string,
    ingredientName: any, //TODO change to correct type
    action: any;

    [key: string]: any;
}

interface IState {
    orders: string[]
    loading: boolean
}

const orderReducer = (state: IState = initialState, action: IAction) => {
    switch (action.type) {
        case actionTypes.PURCHASE_INIT:
            return {
                ...state,
                purchased:false,
            };
        case actionTypes.PURCHASE_BURGER_START:
            return {
                ...state,
                loading:true,
            };
        case actionTypes.PURCHASE_BURGER_SUCCESS:
            const newOrder = {
                ...action.orderData,
                id:action.orderId
            };
            return {
                ...state,
                loading:false,
                orders: state.orders.concat(newOrder),
                purchased:true,
            };
        case actionTypes.PURCHASE_BURGER_FAIL:
            return {
                ...state,
                loading:false,
            };
        case actionTypes.FETCH_ORDERS_START:
            return {
                ...state,
                orders:false,
                loading:true
            };
        default:
            return state;
    }

};

export default orderReducer;