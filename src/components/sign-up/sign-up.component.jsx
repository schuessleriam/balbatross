import React from 'react';
import './sign-up.styles.scss';
import CustomButton from './../custom-button/custom-button.component';
import FormInput from './../form-input/form-input.component';
import {signUpStart} from './../../redux/user/user.actions.js';
import { connect } from 'react-redux';

class SignUp extends React.Component {
    constructor(){
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: '',
            signedUp: false
        }
    }

    handleSubmit = e => {
        e.preventDefault();
        const { displayName, email, password, confirmPassword } = this.state;
        const { signUpStart } = this.props;

        if(password !== confirmPassword) {
            alert("Passwords do not match. Please renter password and confirm password");
            this.setState({
                password: '',
                confirmPassword: ''
            }); 
            return;
        }else{
            signUpStart({displayName: displayName, email: email, password: password});
            this.setState({signedUp: true});
        }
    }

    handleChange = e => {
        const { value, name } = e.target;

        this.setState({ [name]: value})
    }

    render(){
        return (
            <div className="sign-up">
            <h2 className="title">I do not have an account</h2>
            <span>Sign up with your email and password</span>
        
            <form onSubmit={this.handleSubmit}>
            <FormInput name='displayName' 
                type='text' 
                value={this.state.displayName} 
                handleChange={this.handleChange}
                label='Display Name'
            required/>
            
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
        
            <FormInput name='confirmPassword' 
                type='password' 
                value={this.state.confirmPassword} 
                handleChange={this.handleChange}
                label='Confirm Password'
            required/>

            <div className="buttons">
                <CustomButton type='submit'>Sign Up</CustomButton>
            </div>
            </form>    
            </div>
        )
    }    
}

const mapDispatchToProps = dispatch => ({
    signUpStart: (signUpInput) => dispatch(signUpStart(signUpInput))
});

export default connect(null, mapDispatchToProps)(SignUp);