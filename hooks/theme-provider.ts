'use client'
import { useEffect, useState } from "react";




const useTheme = () => {
    const [theme, setTheme] = useState<"light" | "dark">("light");

    
  useEffect(() => {
    // Initial check from document
    if (document.documentElement.classList.contains("dark")) {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
    } else {
      setTheme("light");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

   const toggleTheme = () => {
    if (theme === "dark") {
      document.documentElement.classList.remove("dark");
      setTheme("light");
    } else {
      document.documentElement.classList.add("dark");
      setTheme("dark");
    }
  };

    return {theme,toggleTheme}
};

export default useTheme;