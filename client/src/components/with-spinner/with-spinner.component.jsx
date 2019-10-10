import React from 'react';
import Spinner from '../spinner/spinner.component';


const WithSpinner = WrappedComponent => ({ description, isLoading, ...remainingProps }) => (
        isLoading ? <Spinner {...description}/> : <WrappedComponent { ...remainingProps }/>     
    ); 

export default WithSpinner;