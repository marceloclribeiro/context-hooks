import React, { createContext } from 'react'

export const ThemeContext = createContext()

const ThemeContextProvider = props => {
  const state = {
    isLightTheme: true,
    light: { text: '#555', ui: '#ddd', bg: '#eee' },
    dark: { text: '#ddd', ui: '#333', bg: '#555' }
  }
  return <ThemeContext.Provider value={state}>{props.children}</ThemeContext.Provider>
}

export default ThemeContextProvider
