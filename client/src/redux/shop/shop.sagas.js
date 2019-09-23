import { takeLatest, call, put, all } from 'redux-saga/effects';
import { firestore, convertCollectionsToObject } from './../../firebase/firebase.utils';
import shopActionTypes from './shop.actionTypes';
import { fetchCollectionsSuccess, fetchCollectionsFailure } from './shop.actions';

function* fetchCollectionsAsync(){
    try {
        const collectionRef = firestore.collection('collections');
        const snapshot = yield collectionRef.get();
        const collections = yield call(convertCollectionsToObject, snapshot);
        yield put(fetchCollectionsSuccess(collections));
    } catch (err) {
        yield put(fetchCollectionsFailure(err));
    }
}

function* fetchCollectionsStart() {
    yield takeLatest(shopActionTypes.FETCH_COLLECTIONS_START, fetchCollectionsAsync);
}

export function* shopSagas() {
    yield all([call(fetchCollectionsStart)])
}