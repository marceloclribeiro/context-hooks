import React, { useContext } from 'react'
import ThemeContext from '../../contexts/ThemeContext'
import './styles.css'

const Navbar = () => {
  const { darkTheme, toggleTheme } = useContext(ThemeContext)

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
