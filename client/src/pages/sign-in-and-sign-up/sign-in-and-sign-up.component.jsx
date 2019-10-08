import React, { useState, useEffect } from 'react';
import SignIn from './../../components/sign-in/sign-in.component';
import SignUp from './../../components/sign-up/sign-up.component';
import { SignInAndSignUpContainer, FormContainer } from './sign-in-and-sign-up.styles.js';
import { useCurrentWidth } from 'react-socks';

const SignInAndSignUp = () => {
    const [showForm, setShowForm] = useState({signIn: true, signUp: true, isMobile: true});
    const width = useCurrentWidth();

    useEffect(() => {
        if(width > 799){
            setShowForm({signIn: true, signUp: true, isMobile: false});
        }else {
            setShowForm({signIn: true, signUp: false, isMobile: true});
        }
    },[width])

    return (
        <SignInAndSignUpContainer>    
            { showForm.signIn ? <FormContainer> <SignIn/> </FormContainer> : null}
            { showForm.isMobile && showForm.signIn ? <p onClick={() => setShowForm({signIn: false, signUp: true, isMobile: true})}>
            Don't have an Account? Click <b>here</b> to sign Up.</p> : null }

            { showForm.signUp ? <FormContainer> <SignUp/> </FormContainer> : null}
            { showForm.isMobile && showForm.signUp ? <p onClick={() => setShowForm({signIn: true, signUp: false, isMobile: true})}>
            Already have an Account? Click <b>here</b> to sign in.</p> : null }
        </SignInAndSignUpContainer>
    );
}


export default SignInAndSignUp;

