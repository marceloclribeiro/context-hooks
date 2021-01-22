import React, { useContext } from 'react'
import { ThemeContext } from '../../contexts/ThemeContext'
import './styles.css'

const Navbar = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext)

  return (
    <nav className={isLightTheme ? 'light' : 'dark'}>
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
