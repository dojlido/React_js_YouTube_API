import * as actionTypes from './actionTypes';

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

/**ASYNC REQUEST - react saga*/
export const sendOrderData = (orderDataParam: any, routerHistoryBack:any) => {
    return {
        type: actionTypes.SAGA_SEND_ORDER_DATA,
        orderDataParam: orderDataParam,
        routerHistoryBack: routerHistoryBack
    }
};

/**ASYNC REQUEST - react saga*/
export const getOrderData = () => {
    return {
        type: actionTypes.SAGA_GET_ORDER_DATA,
    };
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

/** TODO ARROW FUNCTION TYPED WITH TS
const turnFireBaseObjectIntoArray = (response:any) => {

    const fetchedOrders : any = [];

    Object.values(response).map( (orders:any) => {
        fetchedOrders.push(
            orders
        );
    });

    return fetchedOrders[0];
};
 */
// FETCH ORDERS END
