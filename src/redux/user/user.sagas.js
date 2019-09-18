import { all, call, takeLatest, put } from 'redux-saga/effects';
import userActionTypes from './user.action.types';
import { auth, googleProvider, createUserProfileDoc, getCurrentUser } from './../../firebase/firebase.utils';
import {signInSuccess, signInFailure, signUpFailure, signOutSuccess, signOutFailure } from './user.actions';

function* signInWithAuth(userAuth, additionalData) {
    try {
        const userRef = yield call(createUserProfileDoc, userAuth, additionalData);
        const snapshot = yield userRef.get();
        yield put(signInSuccess({id: snapshot.id, ...snapshot.data()}));
        
    } catch (error) {
        yield put(signInFailure(error));
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
        if(!userAuth) return;
        yield signInWithAuth(userAuth);
    } catch (error) {
        yield put(signInFailure(error));
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

function* onEmailSignInStart() {
    yield takeLatest(userActionTypes.EMAIL_SIGN_IN_START, signInWithEmail);
}

function* onCheckUserSession() {
    yield takeLatest(userActionTypes.CHECK_USER_SESSION, isUserAuthenticated);
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
        call(onEmailSignInStart),
        call(onCheckUserSession),
        call(onSignOutStart),
        call(onSignUpStart)
    ]);
}