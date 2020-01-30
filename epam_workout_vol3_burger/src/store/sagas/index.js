import * as actionTypes from '../actionsCreators/actionTypes';
import {initialIngriedient} from './burgerBuilderSaga';
import {sendOrderData, getOrderData} from './orderSaga';

import {takeEvery, takeLatest} from 'redux-saga/effects';

export function* watchBurgerBuilderSaga() {
    yield takeEvery(actionTypes.SAGA_INITIAL_INGRIEDIENT, initialIngriedient)
}

export function* watchOrderSaga() {
    yield takeLatest(actionTypes.SAGA_SEND_ORDER_DATA, sendOrderData); //in this case take latest clickEvent
    yield takeEvery(actionTypes.SAGA_GET_ORDER_DATA, getOrderData);
}
