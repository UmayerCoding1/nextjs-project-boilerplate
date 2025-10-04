
export interface FormProps {
    children: React.ReactNode;
    submitFn: (data: { [key: string]: string }) => void;
}

export type FormContextProps ={
    formData:  { [key: string ]: string};
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}  

export type FormInputProps= {
    type: 'text' | 'url' | 'number' | 'password' | 'search' | 'email' | 'range' | 'date' | 'date-pecker' | 'checkbox' | 'radio' | 'radio-group' | 'file' | 'select' | 'select-group' | 'textarea';
    label?: true | false;

 }