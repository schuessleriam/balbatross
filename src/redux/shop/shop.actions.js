import shopActionTypes from './shop.actionTypes';
import { firestore, convertCollectionsToObject } from './../../firebase/firebase.utils';

export const fetchCollectionsStart = () => ({
    type: shopActionTypes.FETCH_COLLECTIONS_START
});

export const fetchCollectionsAsync = () => {
    return dispatch => {
        const collectionRef = firestore.collection('collections');
        dispatch(fetchCollectionsStart());
        collectionRef.get().then(snapshot => {
            const collections = convertCollectionsToObject(snapshot);
            dispatch(fetchCollectionsSuccess(collections));
        }).catch(err => dispatch(fetchCollectionsFailure(err)));
    }
}

export const fetchCollectionsSuccess = (collections) => ({
    type: shopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collections
});

export const fetchCollectionsFailure = (err) => ({
    type: shopActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload: err.message()
});
