import React from 'react';
import './form-input.styles.scss';

const FormInput = ({ handleChange, label, ...remainingProps }) => (
    <div className='group'>
        <input className='form-input' onChange={handleChange} {...remainingProps}/>
        {
            label ?
            (<label className={`${remainingProps.value.length ? 'shrink' : ''} form-input-label`}>
                {label}
            </label>)
            : null
        }
    </div>
)

export default FormInput;