import React, { useContext } from 'react'
import BookList from './components/BookList'
import Navbar from './components/Navbar'
import { ThemeContext, ThemeContextProvider } from './contexts/ThemeContext'

const App = () => {
  const { toggleTheme } = useContext(ThemeContext)
  return (
    <div className='App'>
      <ThemeContextProvider>
        <Navbar />
        <div>
          <button onClick={toggleTheme}>nao foi</button>
          {/* nao funciona */}
        </div>
        <BookList />
      </ThemeContextProvider>
    </div>
  )
}

export default App
