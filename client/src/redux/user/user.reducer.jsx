import userActionTypes from './user.action.types';

const INITIAL_STATE = {
    currentUser: null,
    errorMessage: null,
    userSessionChecked: false,
    isFetchingUser: false
}

const userReducer = (state = INITIAL_STATE, action) =>{
    switch(action.type){
        case userActionTypes.SIGN_UP_SUCCESS:
        case userActionTypes.SIGN_IN_SUCCESS:
            return {
                ...state,
                isFetchingUser: false,
                currentUser: action.payload,
                errorMessage: null
            };
        case userActionTypes.GOOGLE_SIGN_IN_START:
        case userActionTypes.GOOGLE_REDIRECT_SIGN_IN_START:
        case userActionTypes.EMAIL_SIGN_IN_START:
        case userActionTypes.SIGN_UP_START:
                return {
                    ...state,
                    isFetchingUser: true
                };
        case userActionTypes.SIGN_OUT_SUCCESS:
            return {
                ...state,
                isFetchingUser: false,
                currentUser: null,
                errorMessage: null
            };
        case userActionTypes.SIGN_UP_FAILURE:
        case userActionTypes.SIGN_IN_FAILURE:
        case userActionTypes.SIGN_OUT_FAILURE:
            return {
                ...state,
                isFetchingUser: false,
                errorMessage: action.payload
            };
        case userActionTypes.CHECK_USER_SESSION:
                return {
                    ...state,
                    isFetchingUser: true
                };
        case userActionTypes.CHECK_USER_SESSION_COMPLETE:
            return {
                ...state,
                userSessionChecked: true
            };
        case userActionTypes.CLEAR_ERROR:
            return {
                ...state,
                errorMessage: null 
            };
        default: 
            return state;
    }
}

export default userReducer;