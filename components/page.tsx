
'use client'

import React from 'react';
import AppForm from './form/app-form-provider';
import FormInput from './form/form-input';
import Theme from '@/test/Theme';

const TestPage = () => {
    
    const submitFn = (data: { [key: string]: string }) => {
        console.log(data);
    }


    return (
        <div className='max-w-7xl mx-auto mt-10'>
            <Theme/>
            <AppForm submitFn={submitFn}>
                <FormInput type='text' label/>
            </AppForm>
            
        </div>
    );
};

export default TestPage;