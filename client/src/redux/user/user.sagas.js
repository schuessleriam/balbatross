import { all, call, takeLatest, put, delay } from 'redux-saga/effects';
import userActionTypes from './user.action.types';
import { auth, googleProvider, createUserProfileDoc, getCurrentUser } from './../../firebase/firebase.utils';
import {signInSuccess, 
        signInFailure, 
        signUpFailure, 
        signOutSuccess, 
        signOutFailure,
        checkUserSessionComplete } 
from './user.actions';

function* signInWithAuth(userAuth, additionalData) {
    try {
        const userRef = yield call(createUserProfileDoc, userAuth, additionalData);
        const snapshot = yield userRef.get();
        yield put(signInSuccess({id: snapshot.id, ...snapshot.data()}));
        yield localStorage.setItem('isFetching', false);        
    } catch (error) {
        yield put(signInFailure(error));
        yield localStorage.setItem('isFetching', false);

    }
}

function* signInWithGoogle() {
    try {
        const {user} = yield auth.signInWithPopup(googleProvider);
        yield signInWithAuth(user);
    } catch (error) {
        yield put(signInFailure(error));
    }
}

function* signInWithGoogleWithRedirect() {
    try {
        yield localStorage.setItem('isFetching', true);
        yield auth.signInWithRedirect(googleProvider);
        const {user} = yield auth.getRedirectResult();
        yield signInWithAuth(user);
    } catch (error) {
        yield put(signInFailure(error));
        yield localStorage.setItem('isFetching', false);
    }
}

function* signInWithEmail({payload: {email, password}}) {
    try {
        const {user} = yield auth.signInWithEmailAndPassword(email, password);
        yield signInWithAuth(user);
    } catch (error) {
        yield put(signInFailure(error));
    }
}

function* isUserAuthenticated() {
    try {
        const userAuth = yield getCurrentUser();
        if(!userAuth) {
            yield put(checkUserSessionComplete());
            return;
        }
        yield signInWithAuth(userAuth);
        yield put(checkUserSessionComplete());
    } catch (error) {
        yield put(signInFailure(error));
        yield put(checkUserSessionComplete());
    }
}

function* fetchUserTimout() {
    let lsIsFetching = JSON.parse(localStorage.getItem('isFetching'));
    if (lsIsFetching){
        yield delay(20000);
        if (lsIsFetching){
            yield localStorage.setItem('isFetching', false);
            const error = {message: "sign in operation timed out."};
            yield put(signInFailure(error)); 
        }
    }
}

function* signOut() {
    try {
        yield auth.signOut();
        yield put(signOutSuccess());
    } catch (error) {
        yield put(signOutFailure());
    }
}


function* signUpWithEmail({payload: {email, password, displayName}}) {
    try {
        const {user} = yield auth.createUserWithEmailAndPassword(email, password);
        yield signInWithAuth(user, {displayName});
    } catch (error) {
        yield put(signUpFailure(error));
    }
}


function* onGoogleSignInStart() {
    yield takeLatest(userActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

function* onGoogleRedirectSignInStart() {
    yield takeLatest(userActionTypes.GOOGLE_REDIRECT_SIGN_IN_START, signInWithGoogleWithRedirect);
}

function* onEmailSignInStart() {
    yield takeLatest(userActionTypes.EMAIL_SIGN_IN_START, signInWithEmail);
}

function* onCheckUserSession() {
    yield takeLatest(userActionTypes.CHECK_USER_SESSION, isUserAuthenticated);
    yield takeLatest(userActionTypes.CHECK_USER_SESSION, fetchUserTimout);
}

function* onSignOutStart() {
    yield takeLatest(userActionTypes.SIGN_OUT_START, signOut);
}

function* onSignUpStart() {
    yield takeLatest(userActionTypes.SIGN_UP_START, signUpWithEmail);
}

export function* userSagas() {
    yield all([
        call(onGoogleSignInStart),
        call(onGoogleRedirectSignInStart),  
        call(onEmailSignInStart),
        call(onCheckUserSession),
        call(onSignOutStart),
        call(onSignUpStart)
    ]);
}