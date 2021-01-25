import React from 'react'
import { useTheme, useUpdateTheme } from '../../contexts/ThemeContext'
import './styles.css'

const BookList = () => {
  const darkTheme = useTheme()
  const toggleTheme = useUpdateTheme()

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
