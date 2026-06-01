import { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'

function App() {
  const [currentPage, setCurrentPage] = useState('Home')

  return (
    <div>
      <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />
      {currentPage === 'Home' && <Home onNavigate={setCurrentPage} />}
    </div>
  )
}

export default App