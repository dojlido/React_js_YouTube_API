import {put} from 'redux-saga/effects';
import axios from "../../axios-orders";
import * as actions from "../actionsCreators";

export function* initialIngriedient(action) {
    try {
        const response = yield axios.get('https://react-my-burger-dojlido.firebaseio.com/ingredients.json');
        yield put(actions.setIngriedient(response.data));//yield put mean this same like dispatch()
    } catch (err) {
        yield put(actions.fetchIngriedientError());//yield put mean this sama like dispatch()
    }
}
