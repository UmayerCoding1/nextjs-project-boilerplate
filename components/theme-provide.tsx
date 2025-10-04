import React, { useEffect, useState } from 'react';

const ThemeProvider = () => {
     const [theme,setTheme]= useState(true);
    
        useEffect(()=> {
            const handleChangeTheme = () => {
                const currentTheme = document.documentElement.classList('dark') ? 'light' ? 'dark';
            }
        },[])
    return (
        <div>
            
        </div>
    );
};

export default ThemeProvider;