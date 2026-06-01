import { useState } from 'react'

const navLinks = ['Home', 'Projects', 'About', 'Contact']

function Navbar({ currentPage, onNavigate }) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav style={{
      backgroundColor: 'rgba(10, 10, 15)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid #3b494b',
      position: 'sticky',
      top: 0,
      zIndex: 50,
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 64px',
        height: '64px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }} className="px-4 md:px-16">

        

        {/* Desktop Links */}
        <div className="hidden md:flex" style={{ gap: '32px', alignItems: 'center' }}>
          {navLinks.map(link => (
            <span
              key={link}
              onClick={() => onNavigate(link)}
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '12px',
                letterSpacing: '0.1em',
                color: currentPage === link ? '#ffffff' : '#b9cacb',
                borderBottom: currentPage === link ? '2px solid #ffffff' : '2px solid transparent',
                paddingBottom: '2px',
                cursor: 'pointer',
                transition: 'color 0.2s',
              }}
            >
              {link}
            </span>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#b9cacb' }}
        >
          <span className="material-symbols-outlined">
            {menuOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{
          borderTop: '1px solid #3b494b',
          backgroundColor: '#0d1515',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '24px',
          padding: '32px 0',
        }}>
          {navLinks.map(link => (
            <span
              key={link}
              onClick={() => { onNavigate(link); setMenuOpen(false) }}
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '18px',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: currentPage === link ? '#b1edf3' : '#b9cacb',
                cursor: 'pointer',
              }}
            >
              {link}
            </span>
          ))}
        </div>
      )}
    </nav>
  )
}

export default Navbar