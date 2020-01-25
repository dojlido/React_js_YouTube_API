import * as actionTypes from './actionTypes';
import axios from '../../axios-orders'

// PURCHASE BURGER START
export const purchaseBurgerStart = () => {
    return {
        type: actionTypes.PURCHASE_BURGER_START,
    };
};


export const purchaseBurgerSucess = (idParam: number, orderDataParam: any) => {
    return {
        type: actionTypes.PURCHASE_BURGER_SUCCESS,
        orderId: idParam,
        orderData: orderDataParam
    };
};

export const purchaseBurgerFail = (errorParam: any) => {
    return {
        type: actionTypes.PURCHASE_BURGER_FAIL,
        error: errorParam
    };
};

export const sendOrderData = (orderDataParam: any) => {
    return (dispatch: any) => { //TODO send order to DATABASE
        dispatch(purchaseBurgerStart());
        axios.post('/orders.json', orderDataParam)
            .then(response => {
                dispatch( purchaseBurgerSucess(response.data.name, orderDataParam) );
            })
            .catch(error => {
                dispatch( purchaseBurgerFail(error) );
            });
    };
};

export const purchaseInit = () => {
    return {
        type: actionTypes.PURCHASE_INIT
    };
};
// PURCHASE BURGER END

// FETCH ORDERS START
export const fetchOrdersStar = () => {
    return {
        type: actionTypes.PURCHASE_BURGER_START,
    };
};

export const fetchOrdersSuccess = () => {
    return {
        type: actionTypes.PURCHASE_BURGER_START,
    };
};

export const fetchOrdersFail = () => {
    return {
        type: actionTypes.PURCHASE_BURGER_START,
    };
};
// FETCH ORDERS END
