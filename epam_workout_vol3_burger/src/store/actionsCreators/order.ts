import * as actionTypes from './actionTypes';
import axios from '../../axios-orders'
import {l} from '../../helper/helper';

// PURCHASE BURGER START
export const purchaseBurgerStart = () => {
    return {
        type: actionTypes.PURCHASE_BURGER_START,
    };
};


export const purchaseBurgerSucess = (idParam: any, orderDataParam: any) => {
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

export const sendOrderData = (orderDataParam: any, routerHistoryBack:any) => {
    return {
        type: actionTypes.SAGA_SEND_ORDER_DATA,
        orderDataParam: orderDataParam,
        routerHistoryBack: routerHistoryBack
    }
};

export const purchaseInit = () => {
    return {
        type: actionTypes.PURCHASE_INIT
    };
};
// PURCHASE BURGER END

// FETCH ORDERS START
export const fetchOrdersStart = () => {
    return {
        type: actionTypes.FETCH_ORDERS_START
    };
};

export const fetchOrdersSuccess = (ordersParam:string[]) => {
    return {
        type: actionTypes.FETCH_ORDERS_SUCCESS,
        orders:ordersParam
    };
};

export const fetchOrdersFail = (errorParam:any) => {
    return {
        type: actionTypes.FETCH_ORDERS_FAIL,
        error:errorParam
    };
};

const turnFireBaseObjectIntoArray = (response:any) => {

    const fetchedOrders : any = [];

    Object.values(response).map( (orders:any) => {
        fetchedOrders.push(
            orders
        );
    });

    return fetchedOrders[0];
};

export const getOrderData = () => {
    return (dispatch: any) => {
        dispatch(fetchOrdersStart());
        axios.get('/orders.json').then(
            response => {
                dispatch( fetchOrdersSuccess(turnFireBaseObjectIntoArray(response)) )
            }
        ).catch(err =>{
            dispatch( fetchOrdersFail(err) )
        });
    };
};
// FETCH ORDERS END
