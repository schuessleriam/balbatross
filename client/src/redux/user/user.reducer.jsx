import userActionTypes from './user.action.types';

const INITIAL_STATE = {
    currentUser: null,
    errorMessage: null,
    userSessionChecked: false
}

const userReducer = (state = INITIAL_STATE, action) =>{
    switch(action.type){
        case userActionTypes.SIGN_UP_SUCCESS:
        case userActionTypes.SIGN_IN_SUCCESS:
            return {
                ...state,
                currentUser: action.payload,
                errorMessage: null
            };
        case userActionTypes.SIGN_OUT_SUCCESS:
            return {
                ...state,
                currentUser: null,
                errorMessage: null
            };
        case userActionTypes.SIGN_UP_FAILURE:
        case userActionTypes.SIGN_IN_FAILURE:
        case userActionTypes.SIGN_OUT_FAILURE:
            return {
                ...state,
                errorMessage: action.payload
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