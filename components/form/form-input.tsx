import React from 'react';
import { FormInputProps } from './type';

const FormInput = ({type: text, label}: FormInputProps) => {
    return (
        <div>
            {label && <label>{label ? 'Label' : ''}</label>}
            <input type={text} className='border' />
        </div>
    );
};

export default FormInput;