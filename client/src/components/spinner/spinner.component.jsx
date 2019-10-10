import React from 'react';
import { 
    SpinnerOverlay, 
    SpinnerContainer, 
    SpinnerDescription 
} from './spinner.styles';

const Spinner = ({description}) => (
    <SpinnerOverlay>
        <SpinnerDescription>{description}</SpinnerDescription>
        <SpinnerContainer/>
    </SpinnerOverlay>
);

export default Spinner;