import React, { useState, useEffect } from 'react';
import './sign-in.styles.scss';
import FormInput from './../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { googleSignInStart, emailSignInStart, clearError } from './../../redux/user/user.actions.js';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectUserErrorMessage } from './../../redux/user/user.selectors';

const SignIn = ({ 
    emailSignInStart, 
    SignInWithGoogle, 
    userErrorMessage, 
    clearError }) => {

    const [userCredentials, setUserCredentials] = useState({email: '', password: ''});
    const {email, password} = userCredentials;

    const handleSubmit = async e => {
        e.preventDefault();
        emailSignInStart(email, password);
    }

    const handleChange = e => {
        const { value, name } = e.target;
        setUserCredentials({...userCredentials, [name]: value});
    }

    useEffect(() => {
        if(userErrorMessage){
            alert(userErrorMessage);
            clearError();
            setUserCredentials({...userCredentials, password: ''});
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[userErrorMessage]); //warning shown as result of not including 
                           //clearError and SetUserCredentials, no real problem.

    return(
        <div className='sign-in'>
            <h2 className="title">I already have an account</h2>
            <span>Sign in with username and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput name='email' 
                    type='email' 
                    value={email} 
                    handleChange={handleChange}
                    label='email'
                    required/>
                <FormInput name='password' 
                    type='password' 
                    value={password} 
                    handleChange={handleChange}
                    label='Password'
                    required/>
                <div className="buttons">
                    <CustomButton type='submit'>Sign In</CustomButton>
                    <CustomButton type='button' isGoogle='true' onClick={
                        SignInWithGoogle 
                    }>
                    Sign In With Google
                    </CustomButton>
                </div>    
            </form>
        </div>
    );
}


const mapStateToProps = createStructuredSelector({
    userErrorMessage: selectUserErrorMessage
});

const mapDispatchToProps = dispatch => ({
    SignInWithGoogle: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({email: email, password: password})),
    clearError: () => dispatch(clearError())
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);