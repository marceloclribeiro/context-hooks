import React from 'react'
import { useTheme, useUpdateTheme } from '../../contexts/ThemeContext'
import './styles.css'

const Navbar = () => {
  const darkTheme = useTheme()
  const toggleTheme = useUpdateTheme()

  return (
    <nav className={darkTheme ? 'dark' : 'light'}>
      <button onClick={toggleTheme}>dark mode</button>
      <h1>Context App</h1>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  )
}
export default Navbar
