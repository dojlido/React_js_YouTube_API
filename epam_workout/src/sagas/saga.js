import {takeLatest, put, delay} from 'redux-saga/effects';

function* updateBAsync() {
    yield delay(4000);
    yield put({type:'UPDATE_B_ASYNC', a:1});
}

export  function* watchUpdateB() {
    yield takeLatest('UPDATE_B', updateBAsync)
}