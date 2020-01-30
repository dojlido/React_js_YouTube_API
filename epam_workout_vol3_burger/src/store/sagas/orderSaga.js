import {put} from 'redux-saga/effects';
import axios from "../../axios-orders";
import * as actions from "../actionsCreators";

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

