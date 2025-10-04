import React, { createContext, useState } from 'react';
import { FormContextProps, FormProps } from './type';




export const AppFormProvider = createContext<FormContextProps | null>(null);

const AppForm = ({children,submitFn} : FormProps) => {
   const [formData, setFormData] = useState<{ [key: string]: string  }>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement>,
    cb: (cb: { [key: string]: string }) => void
  ) => {
    e.preventDefault();
    cb(formData);
  };
  return (
    <AppFormProvider.Provider value={{ formData, handleChange }}>
      <form
        onSubmit={(e) => handleSubmit(e, submitFn)}
        className="flex flex-col gap-3"
      >
        {children}
      </form>
    </AppFormProvider.Provider>
  );
};


export default AppForm;