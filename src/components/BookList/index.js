import React, { useContext } from 'react'
import ThemeContext from '../../contexts/ThemeContext'
import './styles.css'

const BookList = () => {
  const { darkTheme, toggleTheme } = useContext(ThemeContext)

  return (
    <div className={darkTheme ? 'dark book-list' : 'light book-list'}>
      <button onClick={toggleTheme}>dark mode</button>
      <ul>
        <li>The way of kings</li>
        <li>The name of the wind</li>
        <li>The final empire</li>
      </ul>
    </div>
  )
}
export default BookList
