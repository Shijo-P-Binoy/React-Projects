
import React from 'react';
import assets from '../assets/assets';

const ThemeToggleBtn = ({ theme, setTheme }) => {
  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="size-8.5 p-1.5 border border-gray-500 rounded-full"
    >
      {theme === 'dark' ? (
        <img src={assets.sun_icon} alt="Switch to light mode" />
      ) : (
        <img src={assets.moon_icon} alt="Switch to dark mode" />
      )}
    </button>
  );
};

export default ThemeToggleBtn;
