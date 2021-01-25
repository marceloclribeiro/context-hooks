import React, { createContext, useContext, useState } from 'react'

const ThemeContext = createContext()
const ThemeUpdateContext = createContext()

export const useTheme = () => useContext(ThemeContext)

export const useUpdateTheme = () => useContext(ThemeUpdateContext)

export const ThemeContextProvider = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(true)

  const toggleTheme = () => {
    setDarkTheme(prevDarkTheme => !prevDarkTheme)
  }

  return (
    <ThemeContext.Provider value={darkTheme}>
      <ThemeUpdateContext.Provider value={toggleTheme}>{children}</ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider
