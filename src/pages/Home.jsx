
function Home() {
  return (
    <main style={{
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '80px 64px',
      display: 'flex',
      flexDirection: 'column',
      gap: '120px',
    }} className="px-4 md:px-16">

      {/* Hero */}
      <section style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '40px',
        minHeight: '500px',
      }}>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '32px' }}>
          <div>
            <span style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '14px',
              color: '#ffffff',
              display: 'block',
              marginBottom: '16px',
            }}>
              Hello world, I'm Hilary Omondi.
            </span>
            <h1 style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 'clamp(32px, 5vw, 48px)',
              fontWeight: '700',
              color: '#ffffff',
              lineHeight: '1.1',
              letterSpacing: '-0.02em',
              margin: 0,
            }}>
              Backend Engineer &<br />
              Machine Learning<br />
              Specialist
            </h1>
          </div>

          <p style={{
            color: 'rgba(255, 255, 255, 0.7)',
            fontSize: '16px',
            lineHeight: '1.6',
            maxWidth: '480px',
            margin: 0,
          }}>
           Hi, I'm Hilary! A full-stack and Machine Learning developer who loves turning complex data into actionable insights. I spend most of my time working on building everything from predictive regression models to modern, responsive web apps. I'm constantly exploring new cloud technologies and looking for the next challenging problem to solve.
          </p>

          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            {/* Primary Button */}
            <button 
              style={{
                backgroundColor: '#6366f1',
                color: '#ffffff',
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '12px',
                fontWeight: '600',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                padding: '12px 24px',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
                transform: 'translateY(0)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-4px)'
                e.currentTarget.style.backgroundColor = '#818cf8'
                e.currentTarget.style.boxShadow = '0 8px 20px rgba(99, 102, 241, 0.25)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.backgroundColor = '#6366f1'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              View Projects
              <span className="material-symbols-outlined" style={{ fontSize: '16px' }}></span>
            </button>

            {/* Secondary Button */}
            <button 
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.03)',
                color: '#ffffff',
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '12px',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                padding: '12px 24px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '4px',
                cursor: 'pointer',
                transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
                transform: 'translateY(0)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-4px)'
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)'
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)'
                e.currentTarget.style.boxShadow = '0 8px 20px rgba(255, 255, 255, 0.05)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.03)'
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              Contact Me
            </button>
          </div>
        </div>

        {/* Abstract graphic */}
        <div className="hidden md:flex" style={{
          flex: 1,
          aspectRatio: '1',
          maxWidth: '400px',
          position: 'relative',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <div style={{
            position: 'absolute', inset: 0,
            borderRadius: '50%',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            animation: 'pulse 3s ease-in-out infinite',
          }} />
          <div style={{
            position: 'absolute', inset: '32px',
            borderRadius: '50%',
            border: '1px dashed rgba(99, 102, 241, 0.3)',
            animation: 'spinSlow 20s linear infinite',
          }} />
          <div style={{
            position: 'absolute', inset: '64px',
            borderRadius: '50%',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            animation: 'spinSlowRev 15s linear infinite',
          }} />
          <div style={{
            width: '112px', height: '112px',
            backgroundColor: 'rgba(255, 255, 255, 0.02)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backdropFilter: 'blur(12px)',
            zIndex: 10,
          }}>
            <span className="material-symbols-outlined" style={{
              fontSize: '56px',
              color: '#6366f1',
              fontVariationSettings: "'FILL' 0",
            }}>
              
            </span>
          </div>
        </div>
      </section>

      {/* Technical Expertise */}
      <section style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
        <h2 style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: '24px',
          fontWeight: '600',
          color: '#ffffff',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          margin: 0,
        }}>
          <span className="material-symbols-outlined" style={{ color: '#6366f1' }}></span>
          Technical Expertise
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '12px',
        }}>
          {[
            {
              
              title: 'Languages',
              items: ['Python', 'JavaScript', 'SQL', 'React', 'HTML/CSS', 'Java'],
            },
            {
             
              title: 'Backend & Infrastructure',
              items: ['FastAPI', 'PostgreSQL', 'Docker', 'Kubernetes', 'Django', 'MySQL'],
            },
            {
             
              title: 'Machine Learning',
              items: ['PyTorch', 'Scikit-learn', 'TensorFlow', 'MLflow', 'Numpy', 'Pandas'],
            },
            {
              
              title: 'Tools & Environment',
              items: ['Ubuntu / Linux', 'Git / GitHub', 'SSH Hardening', 'Wireshark', 'Nmap', 'WSL'],
            }
          ].map((card, i) => (
            <div key={i} style={{
              backgroundColor: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '8px',
              padding: '32px',
              transition: 'border-color 0.25s',
            }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(99, 102, 241, 1)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)'}
            >
              <h3 style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '12px',
                letterSpacing: '0.1em',
                color: 'rgba(255, 255, 255, 0.6)',
                textTransform: 'uppercase',
                marginBottom: '24px',
                paddingBottom: '16px',
                borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}>
                <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>{card.icon}</span>
                {card.title}
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {card.items.map((item, j) => (
                  <li key={j} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <span style={{
                      width: '8px', height: '8px', borderRadius: '50%', flexShrink: 0,
                      backgroundColor: 'rgba(255, 255, 255, 0.3)',
                    }} />
                    <span style={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '16px' }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      

      {/* Featured Work */}
      <section style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <h2 style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '24px',
            fontWeight: '600',
            color: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            margin: 0,
          }}>
            <span className="material-symbols-outlined" style={{ color: '#6366f1' }}></span>
            Featured Work
          </h2>
          <span style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '14px',
            color: 'rgba(255, 255, 255, 0.6)',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
          }}>
            View All
            <span className="material-symbols-outlined" style={{ fontSize: '16px' }}></span>
          </span>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '24px',
        }}>
          {[
            {
              icon: 'school',
              title: 'Student Dropout Predictor',
              desc: 'A custom neural network built from scratch using NumPy to predict student attrition, served via a high-performance FastAPI backend.',
              stack: ['Python', 'NumPy', 'FastAPI'],
            },
            {
              icon: 'analytics',
              title: 'Student Grade Predictor',
              desc: 'A predictive modeling tool utilizing Multiple Linear Regression to forecast academic performance, achieving a highly accurate R-Squared score of 0.9887.',
              stack: ['Scikit-learn', 'Regression', 'Pandas'],
            },
            {
              icon: 'web',
              title: 'Modern Developer Portfolio',
              desc: 'A responsive, dark-themed personal portfolio website built to showcase machine learning projects and full-stack development capabilities.',
              stack: ['React', 'Vite', 'Tailwind CSS'],
            },
          ].map((project, i) => (
            <article key={i}
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '8px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                cursor: 'pointer',
                transition: 'border-color 0.25s, box-shadow 0.25s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'rgba(99, 102, 241, 1)'
                e.currentTarget.style.boxShadow = '0 0 20px rgba(99, 102, 241, 0.2)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              {/* Card image area */}
              <div style={{
                height: '160px',
                backgroundColor: 'rgba(255, 255, 255, 0.04)',
                borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <span className="material-symbols-outlined" style={{
                  fontSize: '56px',
                  color: 'rgba(255, 255, 255, 0.15)',
                  fontVariationSettings: "'FILL' 0",
                }}>
                  {project.icon}
                </span>
              </div>

              {/* Card body */}
              <div style={{ padding: '32px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <h3 style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '20px',
                  fontWeight: '600',
                  color: '#ffffff',
                  marginBottom: '12px',
                  marginTop: 0,
                }}>
                  {project.title}
                </h3>
                <p style={{
                  color: 'rgba(255, 255, 255, 0.7)',
                  fontSize: '15px',
                  lineHeight: '1.6',
                  flexGrow: 1,
                  marginBottom: '24px',
                }}>
                  {project.desc}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: 'auto' }}>
                  {project.stack.map((tag, j) => (
                    <span key={j} style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: '11px',
                      textTransform: 'uppercase',
                      color: 'rgba(255, 255, 255, 0.6)',
                      border: '1px solid rgba(255, 255, 255, 0.15)',
                      padding: '3px 8px',
                      borderRadius: '2px',
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

    </main>
  )
}

export default Home