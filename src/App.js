import React from 'react'
import BookList from './components/BookList'
import Navbar from './components/Navbar'
import { ThemeContextProvider, useUpdateTheme } from './contexts/ThemeContext'

const App = () => {
  const toggleTheme = useUpdateTheme()
  return (
    <div className='App'>
      <ThemeContextProvider>
        <Navbar />
        <div>
          <button onClick={toggleTheme}>nao foi</button>
          {/* nao funcionou */}
        </div>
        <BookList />
      </ThemeContextProvider>
    </div>
  )
}

export default App
