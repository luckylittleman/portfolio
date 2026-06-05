import { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Projects from './pages/Projects'

function App() {
  const [currentPage, setCurrentPage] = useState('Home')

  return (
    <div>
      <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />
      {currentPage === 'Home' && <Home onNavigate={setCurrentPage} />}
      {currentPage === 'Projects' && <Projects />}
    </div>
  )
}

export default App