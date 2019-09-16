import shopActionTypes from './shop.actionTypes';

export const updateCollections = collectionsObject => ({
    type: shopActionTypes.UPDATE_COLLECTIONS,
    payload: collectionsObject
});
