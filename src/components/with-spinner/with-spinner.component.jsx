import React from 'react';
import { SpinnerOverlay, SpinnerContainer } from './with-spinner.styles';


const WithSpinner = WrappedComponent => {
    const Spinner = ({ isLoading, ...remainingProps }) => {
        return isLoading ? (
            <SpinnerOverlay>
                <SpinnerContainer/>
            </SpinnerOverlay>
            ) : (
            <WrappedComponent { ...remainingProps } />  
            );   
    }; 
    return Spinner;
}; 

export default WithSpinner;