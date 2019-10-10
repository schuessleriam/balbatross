import React, { useState, useEffect } from 'react';
import CustomButton from './../custom-button/custom-button.component';
import FormInput from './../form-input/form-input.component';
import SignOnError from '../sign-in-and-sign-up-error/sign-on-error.component';
import { signUpStart } from './../../redux/user/user.actions.js';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectUserErrorMessage } from './../../redux/user/user.selectors';
import { SignUpContainer, SignUpTitle } from './sign-up.styles';

const SignUp = ({ signUpStart, userErrorMessage }) => {
    const [signUpDetails, setSignUpDetails] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    useEffect(() => {
        if(userErrorMessage){
            setSignUpDetails({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            });
        }
    }, [userErrorMessage])

    const { displayName, email, password, confirmPassword } = signUpDetails;

    const handleSubmit = e => {
        e.preventDefault();
        if(password !== confirmPassword) {
            alert("Passwords do not match. Please re-enter password and confirm password");
            this.setState({
                password: '',
                confirmPassword: ''
            }); 
            return;
        }else{
            signUpStart({displayName: displayName, email: email, password: password});
        }
    }

    const handleChange = e => {
        const { value, name } = e.target;
        setSignUpDetails({...signUpDetails, [name]: value})
    }

    return (
        <SignUpContainer>
            <SignUpTitle>I do not have an account</SignUpTitle>
            <span>Sign up with your email and password</span>
        
            <form onSubmit={handleSubmit}>
            <FormInput name='displayName' 
                type='text' 
                value={displayName} 
                handleChange={handleChange}
                label='Display Name'
            required/>
            
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
        
            <FormInput name='confirmPassword' 
                type='password' 
                value={confirmPassword} 
                handleChange={handleChange}
                label='Confirm Password'
            required/>

            <div>
                <CustomButton type='submit'>Sign Up</CustomButton>
            </div>
            </form>
            { userErrorMessage ? <SignOnError error={userErrorMessage} /> : null }    
        </SignUpContainer>
    );    
}

const mapStateToProps = createStructuredSelector({
    userErrorMessage: selectUserErrorMessage
});

const mapDispatchToProps = dispatch => ({
    signUpStart: (signUpInput) => dispatch(signUpStart(signUpInput))
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);