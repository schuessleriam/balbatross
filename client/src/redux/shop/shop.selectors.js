import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectShopCollections = createSelector(
    [selectShop],
    (shop) => shop.collections
);

export const selectShopCollectionsForPreview = createSelector(
    [selectShopCollections],
    (collections) => collections ? Object.keys(collections).map(key => collections[key]) : []
);

export const selectCollectionByUrl = url => createSelector(
    [selectShopCollections],
    (collections) => collections ? collections[url] : null
);

export const selectIsFetching = createSelector(
    [selectShop],
    (shop) => shop.isFetching
);

export const selectIsLoaded = createSelector(
    [selectShop],
    (shop) => !!shop.collections
);

