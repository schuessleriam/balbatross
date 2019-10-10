import React from 'react';
import { FormInputLabel, Group, FormInputContainer } from './form-input.styles';

const FormInput = ({ handleChange, label, ...remainingProps }) => (
    <Group>
        <FormInputContainer onChange={handleChange} {...remainingProps}/>
        <FormInputLabel shrink={remainingProps.value.length ? true : false}>
            {label}
        </FormInputLabel>
    </Group>
)

export default FormInput;