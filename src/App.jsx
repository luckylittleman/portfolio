import { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Projects from './pages/Projects'
import About from './pages/About'
import Footer from './components/footer'
import Contact from './pages/Contact'


function App() {
  const [currentPage, setCurrentPage] = useState('Home')

  return (
    <div>
      <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />
      {currentPage === 'Home' && <Home onNavigate={setCurrentPage} />}
      {currentPage === 'Projects' && <Projects />}
      {currentPage === 'About' && <About />}
      {currentPage === 'Contact' && <Contact />}
      <Footer onNavigate={setCurrentPage} />
    </div>
  )
}

export default App