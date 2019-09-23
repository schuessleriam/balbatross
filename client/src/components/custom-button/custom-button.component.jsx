import React from 'react';
import { CustomButtonContainer } from './custom-button.styles';

const CustomButton = ({ children, ...remainingProps }) => (
    <CustomButtonContainer {...remainingProps}>
        {children}
    </CustomButtonContainer>
);

export default CustomButton;
