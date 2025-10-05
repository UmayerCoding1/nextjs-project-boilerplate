'use client';

import useTheme from '@/hooks/theme-provider';
import { cn } from '@/lib/utils';
import { Moon, Sun } from 'lucide-react';
import React from 'react';

const Theme = () => {
  const {theme,toggleTheme} = useTheme();

  return (
    <div className="flex items-center justify-center text-red-500">
      <button
      onClick={toggleTheme}
      className={cn(
        "relative w-8 h-8 bg-neutral-50 dark:bg-neutral-700 flex items-center justify-center rounded-full overflow-hidden",
        "transition-transform duration-500 ease-in-out",
        theme === "dark" ? "rotate-[360deg]" : "rotate-0"
      )}
    >
      {/* Sun icon */}
      <Sun
        className={cn(
          "absolute  w-5 h-5 text-yellow-400 transition-all duration-500 ease-in-out",
          theme === "dark"
            ? "opacity-100 scale-100 rotate-0" 
            : "opacity-0 scale-0 rotate-180"
        )}
      />

      {/* Moon icon */}
      <Moon
        className={cn(
          "absolute  w-5 h-5 text-blue-400 transition-all duration-500 ease-in-out",
          theme === "dark"
            ?  "opacity-0 scale-0 rotate-180"
            : "opacity-100 scale-100 rotate-0"
        )}
      />
    </button>
    </div>
  );
};

export default Theme;
