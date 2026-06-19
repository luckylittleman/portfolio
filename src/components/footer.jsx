import React from 'react';

function Footer({ onNavigate }) {
  const currentYear = new Date().getFullYear();

  // Reusable styling for the column headers
  const headerStyle = {
    fontFamily: "'Inter', sans-serif",
    fontSize: '15px',
    fontWeight: '600',
    color: '#ffffff',
    margin: '0 0 20px 0',
  };

  // Reusable styling for unstyled interactive list buttons/links
  const linkStyle = {
    background: 'none',
    border: 'none',
    color: 'rgba(255, 255, 255, 0.55)',
    fontFamily: "'Inter', sans-serif",
    fontSize: '14px',
    padding: 0,
    cursor: 'pointer',
    textDecoration: 'none',
    textAlign: 'left',
    transition: 'color 0.2s ease',
  };

  const handleMouseEnter = (e) => {
    e.currentTarget.style.color = '#ffffff';
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.color = 'rgba(255, 255, 255, 0.55)';
  };

  return (
    <footer style={{
      width: '100%',
      backgroundColor: '#050507',
      borderTop: '1px solid rgba(255, 255, 255, 0.05)',
      padding: '80px 0 40px 0',
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 24px',
        display: 'flex',
        flexDirection: 'column',
        gap: '64px',
      }}>
        
        {/* Four-Column Layout Link Matrix */}
        <div className="footer-grid">
          
          {/* Column 1: Navigation */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <h4 style={headerStyle}>Navigation</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {['Home', 'Projects',].map((page) => (
                <li key={page}>
                  <button
                    onClick={() => onNavigate && onNavigate(page)}
                    style={linkStyle}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    {page}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Resources */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <h4 style={headerStyle}>Resources</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                
                { name: 'Contact', page: 'Contact' },
                { name: 'About', page: 'About' }, // Fallback route or update as needed later
              ].map((item) => (
                <li key={item.name}>
                  <button
                    onClick={() => onNavigate && onNavigate(item.page)}
                    style={linkStyle}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Social SVGs */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <h4 style={headerStyle}>Lets connect</h4>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              {/* GitHub */}
              <a href="https://github.com/luckylittleman" target="_blank" rel="noopener noreferrer" style={linkStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} aria-label="GitHub">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </a>
              {/* LinkedIn */}
              <a href="https://www.linkedin.com/in/hilary-omondi-867209273/" target="_blank" rel="noopener noreferrer" style={linkStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} aria-label="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              
              {/* Mail / Envelope Icon with Copy-to-Clipboard Fallback */}
              <a 
                 href="mailto:hilaryomondi08@gmail.com" 
                 style={linkStyle} 
                 onMouseEnter={handleMouseEnter} 
                 onMouseLeave={handleMouseLeave} 
                 aria-label="Email"
                 onClick={(e) => {
                 // This allows the mailto to attempt to run, but also copies it instantly
                 navigator.clipboard.writeText("hilaryomondi08@gmail.com");
                 alert("Email address copied to clipboard!");
                  }}
                >
                 <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                 <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                 <polyline points="22,6 12,13 2,6"></polyline>
                 </svg>
              </a>
            </div>
          </div>

          {/* Column 4: Contact Email Raw */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <h4 style={headerStyle}>Contact</h4>
            <span style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '14px',
              color: 'rgba(255, 255, 255, 0.45)',
              wordBreak: 'break-all',
            }}>
              Email:{' '}
              <a 
                href="mailto:hilaryomondi08@gmail.com" 
                style={{ ...linkStyle, display: 'inline-block' }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                hilaryomondi08@gmail.com
              </a>
            </span>
          </div>

        </div>

        {/* Bottom Metadata Border Bar */}
        <div className="footer-bottom" style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.03)',
          paddingTop: '24px',
        }}>
          <span style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '13px',
            color: 'rgba(255, 255, 255, 0.3)',
          }}>
            &copy; {currentYear} Hilary Omondi. All rights reserved.
          </span>
          <span style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '11px',
            color: 'rgba(255, 255, 255, 0.2)',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
          }}>
            
          </span>
        </div>

      </div>
    </footer>
  );
}

export default Footer;