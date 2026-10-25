import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustedBy from './components/TrustedBy'
import Services from './components/Services'
import OurWork from './components/OurWork'
import Teams from './components/Teams'
import ContactUs from './components/ContactUs'
import { Toaster } from 'react-hot-toast'
import Footer from './components/Footer'

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
      <Toaster />
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero />
      <TrustedBy />
      <Services />
      <OurWork />
      <Teams />
      <ContactUs />
      <Footer theme={theme}/>
    </div>
  )
}

export default App
