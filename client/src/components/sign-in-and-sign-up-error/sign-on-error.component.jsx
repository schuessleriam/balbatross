import React from 'react';
import { connect } from 'react-redux';
import { clearError } from '../../redux/user/user.actions.js';
import CustomButton from '../custom-button/custom-button.component';
import { SignOnErrorContainer, ErrorMessageContainer } from './sign-on-error.styles';

const SignOnError = ({ error, clearError }) => (

    <SignOnErrorContainer>
        <ErrorMessageContainer>{error}</ErrorMessageContainer>
        <CustomButton onClick={() => clearError()}> Okay </CustomButton>
    </SignOnErrorContainer>
);


const mapDispatchToProps = dispatch => ({
    clearError: () => dispatch(clearError())
});

export default connect(null, mapDispatchToProps)(SignOnError);