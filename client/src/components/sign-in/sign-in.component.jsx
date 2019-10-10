import React, { useState, useEffect } from 'react';
import { Breakpoint } from 'react-socks';
import FormInput from './../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import SignOnError from '../sign-in-and-sign-up-error/sign-on-error.component';
import { googleRedirectSignInStart, googleSignInStart, emailSignInStart } from './../../redux/user/user.actions.js';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectUserErrorMessage } from './../../redux/user/user.selectors';
import { SignInContainer, SignInTitle, Buttons } from './sign-in.styles';

const SignIn = ({ 
    SignInWithGoogleWithRedirect, 
    SignInWithGoogle, 
    userErrorMessage, 
    emailSignInStart}) => {

    const [signInDetails, setSignInDetails] = useState({email: '', password: ''});
    const {email, password} = signInDetails;

    useEffect(() => {
        if(userErrorMessage){
            setSignInDetails({email: '', password: ''});
        }
    }, [userErrorMessage])

    const handleSubmit = async e => {
        e.preventDefault();
        emailSignInStart(email, password);
    }

    const handleChange = e => {
        const { value, name } = e.target;
        setSignInDetails({ ...signInDetails, [name]: value})
    }

    return(
        <SignInContainer>
            <SignInTitle>I already have an account</SignInTitle>
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
                <Buttons>
                    <CustomButton type='submit'>Sign In</CustomButton>
                    <Breakpoint customQuery="(min-width: 800px)">
                        <CustomButton type='button' isGoogle='true' onClick={
                            SignInWithGoogle 
                        }>
                        Sign In With Google
                        </CustomButton>
                    </Breakpoint>
                    <Breakpoint customQuery="(max-width: 799px)">
                        <CustomButton type='button' isGoogle='true' onClick={
                            SignInWithGoogleWithRedirect 
                        }>
                        Sign In With Google
                        </CustomButton>
                    </Breakpoint>
                </Buttons>    
            </form>
            { userErrorMessage ? <SignOnError error={userErrorMessage} /> : null }
        </SignInContainer>
    );
}

const mapStateToProps = createStructuredSelector({
    userErrorMessage: selectUserErrorMessage
});

const mapDispatchToProps = dispatch => ({
    SignInWithGoogle: () => dispatch(googleSignInStart()),
    SignInWithGoogleWithRedirect: () => dispatch(googleRedirectSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({email: email, password: password}))
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);