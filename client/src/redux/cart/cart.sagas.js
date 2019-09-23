import { takeLatest, all, call, put } from 'redux-saga/effects';
import userActionTypes from '../user/user.action.types';
import { clearCart } from './cart.actions';


function* clearCartSaga() {
    yield put(clearCart());
}

function* onSignOutSuccess() {
    yield takeLatest(userActionTypes.SIGN_OUT_SUCCESS, clearCartSaga);
}


export function* cartSagas() {
    yield all([call(onSignOutSuccess)]);
}