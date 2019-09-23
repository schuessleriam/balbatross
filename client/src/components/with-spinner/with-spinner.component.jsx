import React from 'react';
import { SpinnerOverlay, SpinnerContainer, SpinnerDescription } from './with-spinner.styles';


const WithSpinner = WrappedComponent => {
    const Spinner = ({ description, isLoading, ...remainingProps }) => {
        return isLoading ? (
            <SpinnerOverlay>
                <SpinnerDescription>{description}</SpinnerDescription>
                <SpinnerContainer/>
            </SpinnerOverlay>
            ) : (
            <WrappedComponent { ...remainingProps } />  
            );   
    }; 
    return Spinner;
}; 

export default WithSpinner;