import * as actionTypes from '../actionsCreators/actionTypes';
import {updateObject} from "../../shared/utility";

const initialState = {
    orders: [],
    loading: false,
    purchased: false
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

const purchaseInit = ( state:IState ) => {
    return updateObject( state, { purchased: false } );
};

const purchaseBurgerStart = ( state:IState ) => {
    return updateObject( state, { loading: true } );
};

const purchaseBurgerSuccess = ( state:IState, action:IAction ) => {
    const newOrder = updateObject( action.orderData, { id: action.orderId } );
    return updateObject( state, {
        loading: false,
        purchased: true,
        orders: state.orders.concat( newOrder )
    } );
};

const purchaseBurgerFail = ( state:IState ) => {
    return updateObject( state, { loading: false } );
};

const fetchOrdersStart = ( state:IState ) => {
    return updateObject( state, { loading: true } );
};

const fetchOrdersSuccess = ( state:IState, action:IAction ) => {
    return updateObject( state, {
        orders: action.orders,
        loading: false
    } );
};

const fetchOrdersFail = ( state:IState ) => {
    return updateObject( state, { loading: false } );
};


const orderReducer = (state: IState = initialState, action: IAction) => {
    switch (action.type) {
        case actionTypes.PURCHASE_INIT: return purchaseInit( state );
        case actionTypes.PURCHASE_BURGER_START: return purchaseBurgerStart( state );
        case actionTypes.PURCHASE_BURGER_SUCCESS: return purchaseBurgerSuccess( state, action );
        case actionTypes.PURCHASE_BURGER_FAIL: return purchaseBurgerFail( state );
        case actionTypes.FETCH_ORDERS_START: return fetchOrdersStart( state );
        case actionTypes.FETCH_ORDERS_SUCCESS: return fetchOrdersSuccess( state, action );
        case actionTypes.FETCH_ORDERS_FAIL: return fetchOrdersFail( state );
        default: return state;
    }

};

export default orderReducer;






