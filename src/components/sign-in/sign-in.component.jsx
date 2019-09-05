import React, { Component } from 'react';
import './sign-in.styles.scss';
import FormInput from './../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, SignInWithGoogle } from '../../firebase/firebase.utils';

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

        try {
            await auth.signInWithEmailAndPassword(this.state.email, this.state.password);
            this.setState({email: '', password: ''})
        } catch (error) {
            console.error(error);
        }
    }

    handleChange = e => {
        const { value, name } = e.target;

        this.setState({ [name]: value})
    }

    render(){
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
                        <CustomButton isGoogle='true' onClick={SignInWithGoogle}>Sign In With Google</CustomButton>
                    </div>    
                </form>
            </div>
        )
    }

}

export default SignIn;