import * as actionTypes from '../actionsCreators/actionTypes';
import {initialIngriedient} from './burgerBuilderSaga';
import {sendOrderData} from './orderSaga';

import {takeEvery} from 'redux-saga/effects';

export function* watchBurgerBuilderSaga() {
    yield takeEvery(actionTypes.SAGA_INITIAL_INGRIEDIENT, initialIngriedient)
}

export function* watchOrderSaga() {
    yield takeEvery(actionTypes.SAGA_SEND_ORDER_DATA, sendOrderData)
}