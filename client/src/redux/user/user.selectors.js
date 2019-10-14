import { createSelector } from 'reselect';

const selectUser = state => state.user;

export const selectCurrentUser = createSelector(
    [selectUser],
    (user) => user.currentUser
);

export const selectUserSessionChecked = createSelector(
    [selectUser],
    (user) => user.userSessionChecked
);

export const selectUserErrorMessage = createSelector(
    [selectUser],
    (user) => user.errorMessage
);

export const selectIsFetchingUser = createSelector(
    [selectUser],
    (user) => user.isFetchingUser
);