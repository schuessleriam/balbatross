import React from 'react';
import { Redirect } from 'react-router-dom';

const WithCondition = WrappedComponent => 
    ({condition, isLoading, location, ...remainingProps}) => {
        if (condition && isLoading) {
            return <Redirect to={location}/>
        } else {
            return <WrappedComponent isLoading={isLoading} {...remainingProps}/>
        }
};

export default WithCondition;