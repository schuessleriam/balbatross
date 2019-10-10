import React from 'react';
import { CustomButtonContainer } from './custom-button.styles.js';

const CustomButton = ({ children, ...remainingProps }) => (
    <CustomButtonContainer {...remainingProps}>
        {children}
    </CustomButtonContainer>
);

export default CustomButton;
