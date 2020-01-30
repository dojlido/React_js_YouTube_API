import {put} from 'redux-saga/effects';
import axios from "../../axios-orders";
import * as actions from "../actionsCreators";

const turnFireBaseObjectIntoArray = (response) => {
    const fetchedOrders = [];

    Object.values(response).map( (orders) => {
        fetchedOrders.push(
            orders
        );
    });

    return fetchedOrders[0];
};

export function* sendOrderData(action) {
    try {
        yield put(actions.purchaseBurgerStart());//yield put mean this sama like dispatch()
        const sendRequest = axios.post('/orders.json', action.orderDataParam);
        yield put(actions.purchaseBurgerSucess(sendRequest.data.name, action.orderDataParam));//yield put mean this sama like dispatch()
        return action.routerHistoryBack;
    } catch (err) {
        yield put(actions.fetchIngriedientError(err));//yield put mean this sama like dispatch()
    }
}

export function* getOrderData(action) {
    try {
        yield put(actions.fetchOrdersStart());
        const response = yield axios.get('/orders.json'); // yield in this case is a promise (wait until all orderData will be fetched)
        yield put( actions.fetchOrdersSuccess(turnFireBaseObjectIntoArray(response)) );
    } catch (err) {
        yield put(actions.fetchOrdersFail(err));//yield put mean this sama like dispatch()
    }
}

