import React from 'react';
import { MoonIcon, SunIcon } from '@heroicons/react/16/solid';
import useThemeStore from '../../zustandstore/useThemeStore ';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useThemeStore();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 focus:outline-none"
      aria-label="Toggle Dark Mode"
    >
      {theme === 'light' ? (
          <SunIcon className="h-6 w-6 text-white" />
          ) : (
            <MoonIcon className="h-6 w-6 text-yellow-500" />
        )}
    </button>
  );
};

export default ThemeToggle;
