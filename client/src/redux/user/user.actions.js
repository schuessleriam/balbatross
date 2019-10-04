import userActionTypes from './user.action.types';

export const googleSignInStart = () => ({
    type: userActionTypes.GOOGLE_SIGN_IN_START
});

export const googleRedirectSignInStart = () => ({
    type: userActionTypes.GOOGLE_REDIRECT_SIGN_IN_START
});

export const emailSignInStart = (authCreds) => ({
    type: userActionTypes.EMAIL_SIGN_IN_START,
    payload: authCreds
});

export const signInSuccess = user => ({
    type: userActionTypes.SIGN_IN_SUCCESS,
    payload: user
});

export const signInFailure = err => ({
    type: userActionTypes.SIGN_IN_FAILURE,
    payload: err.message
});

export const checkUserSession = () => ({
    type: userActionTypes.CHECK_USER_SESSION
});
export const checkUserSessionComplete = () => ({
    type: userActionTypes.CHECK_USER_SESSION_COMPLETE
});

export const signOutStart = () => ({
    type: userActionTypes.SIGN_OUT_START
});

export const signOutSuccess = () => ({
    type: userActionTypes.SIGN_OUT_SUCCESS
});

export const signOutFailure = err => ({
    type: userActionTypes.SIGN_OUT_FAILURE,
    payload: err.message
});

export const signUpStart = (signUpInput) => ({
    type: userActionTypes.SIGN_UP_START,
    payload: signUpInput
});

export const signUpSuccess = user => ({
    type: userActionTypes.SIGN_UP_SUCCESS,
    payload: user
});

export const signUpFailure = err => ({
    type: userActionTypes.SIGN_UP_FAILURE,
    payload: err.message
});

export const clearError = () => ({
    type: userActionTypes.CLEAR_ERROR
});