import React, { useState } from 'react'
import Navbar from './components/Navbar'

const App = () => {

  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("currentTheme");

    if (savedTheme) {
      return savedTheme;
    }

    const preferDarkMode = window.matchMedia("(prefer-color-schema:dark)").matches

    return preferDarkMode ? "dark" : "light";
  });

  return (
    <div className="dark:bg-black relative">
      <Navbar theme={theme} setTheme={setTheme} />
    </div>
  )
}

export default App
