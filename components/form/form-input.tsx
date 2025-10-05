import React from 'react';
import { FormInputProps } from './type';

const FormInput = ({type: text, label}: FormInputProps) => {
    return (
        <div>
            {label && <label className='dark:text-red-200'>{label ? 'Label' : ''}</label>}
            <input type={text} className='border' />
        </div>
    );
};

export default FormInput;