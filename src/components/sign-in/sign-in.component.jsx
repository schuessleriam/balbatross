import React, { Component } from 'react';
import './sign-in.styles.scss';
import FormInput from './../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { googleSignInStart, emailSignInStart } from './../../redux/user/user.actions.js';
import { connect } from 'react-redux';

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

        const { SignInWithGoogle } = this.props;

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
                        <CustomButton type='button' isGoogle='true' onClick={SignInWithGoogle}>Sign In With Google</CustomButton>
                    </div>    
                </form>
            </div>
        );
    }

}

const mapDispatchToProps = dispatch => ({
    SignInWithGoogle: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({email: email, password: password}))
});

export default connect(null, mapDispatchToProps)(SignIn);