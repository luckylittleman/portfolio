function BottomNav({ currentPage, onNavigate }) {
  const tabs = [
    { label: 'Home',     page: 'Home',    icon: 'home' },
    { label: 'Projects', page: 'Projects',icon: 'code_blocks' },
    { label: 'About',    page: 'About',   icon: 'person' },
    { label: 'Contact',  page: 'Contact', icon: 'mail' },
  ]

  return (
    <nav
      className="bottom-nav"
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(10, 10, 14, 0.95)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderTop: '1px solid rgba(255,255,255,0.08)',
        display: 'flex',
        zIndex: 100,
        paddingBottom: 'env(safe-area-inset-bottom)',
      }}
    >
      {tabs.map(tab => {
        const active = currentPage === tab.page
        return (
          <button
            key={tab.page}
            onClick={() => onNavigate(tab.page)}
            style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '3px',
              padding: '10px 4px 8px',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: active ? '#6366f1' : 'rgba(255,255,255,0.4)',
              transition: 'color 0.2s',
            }}
          >
            <span
              className="material-symbols-outlined"
              style={{
                fontSize: '22px',
                fontVariationSettings: active ? "'FILL' 1" : "'FILL' 0",
              }}
            >
              {tab.icon}
            </span>
            <span style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '9px',
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
            }}>
              {tab.label}
            </span>
          </button>
        )
      })}
    </nav>
  )
}

export default BottomNav
