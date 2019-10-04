import React, { Component } from 'react';
import { Breakpoint } from 'react-socks';
import './sign-in.styles.scss';
import FormInput from './../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { googleRedirectSignInStart, googleSignInStart, emailSignInStart, clearError } from './../../redux/user/user.actions.js';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectUserErrorMessage } from './../../redux/user/user.selectors';

class SignIn extends Component {
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async e => {
        e.preventDefault();
        const {email, password} = this.state;
        const {emailSignInStart} = this.props;

        emailSignInStart(email, password);
    }

    handleChange = e => {
        const { value, name } = e.target;

        this.setState({ [name]: value})
    }

    render(){

        const { SignInWithGoogleWithRedirect, SignInWithGoogle, userErrorMessage, clearError } = this.props;

        if(userErrorMessage){
            alert(userErrorMessage);
            clearError();
        }

        return(
            <div className='sign-in'>
                <h2 className="title">I already have an account</h2>
                <span>Sign in with username and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput name='email' 
                        type='email' 
                        value={this.state.email} 
                        handleChange={this.handleChange}
                        label='email'
                        required/>
                    <FormInput name='password' 
                        type='password' 
                        value={this.state.password} 
                        handleChange={this.handleChange}
                        label='Password'
                        required/>
                    <div className="buttons">
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
                    </div>    
                </form>
            </div>
        );
    }

}

const mapStateToProps = createStructuredSelector({
    userErrorMessage: selectUserErrorMessage
});

const mapDispatchToProps = dispatch => ({
    SignInWithGoogle: () => dispatch(googleSignInStart()),
    SignInWithGoogleWithRedirect: () => dispatch(googleRedirectSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({email: email, password: password})),
    clearError: () => dispatch(clearError())
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);