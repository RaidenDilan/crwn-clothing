import { createSelector } from 'reselect';
import memoize from 'lodash.memoize';

const selectShop = state => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  collections => collections
    ? Object.keys(collections).map(key => collections[key]) // Get all the keys and map over the array of keys to get the value of each key, which will give us an array of our items.
    : []
);

export const selectCollection = memoize((collectionUrlParam => createSelector(
  [selectCollections],
  collections => (collections ? collections[collectionUrlParam] : null)
)));

export const selectIsCollectionFetching = createSelector(
  [selectShop],
  shop => shop.isFetching
);

export const selectIsCollectionsLoaded = createSelector(
  [selectShop],
  shop => !!shop.collections // returns false;

);