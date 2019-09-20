import React, { useState } from 'react';
import './sign-up.styles.scss';
import CustomButton from './../custom-button/custom-button.component';
import FormInput from './../form-input/form-input.component';
import {signUpStart} from './../../redux/user/user.actions.js';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const SignUp = ({ signUpStart, history }) => {
    
    const [newAccountInfo, setNewAccountInfo] = useState(
        {displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const { displayName, email, password, confirmPassword } = newAccountInfo;

    const handleSubmit = e => {
        e.preventDefault();
        if(password !== confirmPassword) {
            alert("Passwords do not match. Please renter password and confirm password");
            setNewAccountInfo({
                ...newAccountInfo,
                password: '',
                confirmPassword: ''
            }); 
        }else{
            signUpStart({displayName: displayName, email: email, password: password});
        }
    }

    const handleChange = e => {
        const { value, name } = e.target;
        setNewAccountInfo({...newAccountInfo, [name]: value})
    }

    return (
        <div className="sign-up">
        <h2 className="title">I do not have an account</h2>
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

        <div className="buttons">
            <CustomButton type='submit'>Sign Up</CustomButton>
        </div>
        </form>    
        </div>
    );
}    

const mapDispatchToProps = dispatch => ({
    signUpStart: (signUpInput) => dispatch(signUpStart(signUpInput))
});

export default withRouter(connect(null, mapDispatchToProps)(SignUp));