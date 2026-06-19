function About() {
  return (
    <main className="page-main" style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '100px',
    }}>

      {/* Hero Bio */}
      <section className="about-hero-grid">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          <div>
            <span style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '12px',
              letterSpacing: '0.1em',
              color: '#6366f1',
              textTransform: 'uppercase',
              display: 'block',
              marginBottom: '16px',
            }}>
              About Me
            </span>
            <h1 style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 'clamp(28px, 5vw, 48px)',
              fontWeight: '700',
              color: '#ffffff',
              lineHeight: '1.1',
              letterSpacing: '-0.02em',
              margin: 0,
              marginBottom: '24px',
            }}>
              Building robust systems &{' '}
              <span style={{ color: '#ffffff' }}>scalable ML pipelines</span>.
            </h1>
            <p style={{
              color: 'rgba(255, 255, 255, 0.7)',
              fontSize: '16px',
              lineHeight: '1.8',
              maxWidth: '600px',
              margin: 0,
            }}>
              I'm Hilary, a software engineer focused on backend architectures and
              machine learning integrations. My work involves designing secure APIs,
              optimizing database schemas, and building predictive models that solve complex analytical challenges. I believe in clean code, robust networking infrastructure, and continuous iteration.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <a href="#experience" style={{
              backgroundColor: '#6366f1',
              color: '#ffffff',
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '12px',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              padding: '12px 24px',
              borderRadius: '4px',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              transition: 'background 0.2s',
            }}>
              View Experience
              <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>arrow_downward</span>
            </a>
            <a href="/Hilary Omondi CV.pdf"
            download="Hilary_Omondi_CV.pdf"
            style={{
              backgroundColor: 'transparent',
              color: '#ffffff',
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '12px',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              padding: '12px 24px',
              border: '1px solid rgba(255,255,255,0.15)',
              borderRadius: '4px',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              transition: 'background 0.2s',
            }}>
              Download CV
              <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>download</span>
            </a>
          </div>
        </div>

        {/* Stats Card */}
        <div className="stats-card">
          {[
            { label: 'Location', value: 'Kenya' },
            { label: 'Focus', value: 'Backend & ML Engineering' },
            { label: 'Status', value: 'Available for Roles' },
          ].map((stat, i) => (
            <div key={i}>
              <div style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '11px',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.4)',
                marginBottom: '4px',
              }}>
                {stat.label}
              </div>
              <div style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '14px',
                color: 'rgba(255,255,255,0.85)',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}>
                {stat.value}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section id="education" style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
        <h2 style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: '24px',
          fontWeight: '600',
          color: '#ffffff',
          margin: 0,
          paddingBottom: '16px',
          borderBottom: '1px solid rgba(255,255,255,0.1)',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
        }}>
          <span className="material-symbols-outlined" style={{ color: '#6366f1' }}>school</span>
          Education
        </h2>

        <div className="education-grid">
          {[
            {
              period: 'Graduating Nov 2026',
              degree: 'B.S. Computer Science',
              school: 'University Education',
              courses: ['Predictive Regression Models', 'Database Management', 'Full-Stack Integration', 'Data Structures'],
            }
          ].map((edu, i) => (
            <div key={i} style={{
              backgroundColor: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '8px',
              padding: '32px',
              position: 'relative',
              overflow: 'hidden',
              transition: 'border-color 0.25s',
            }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(99,102,241,0.6)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'}
            >
              <div style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '12px',
                color: '#6366f1',
                marginBottom: '8px',
              }}>
                {edu.period}
              </div>
              <h3 style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '20px',
                fontWeight: '600',
                color: '#ffffff',
                margin: 0,
                marginBottom: '4px',
              }}>
                {edu.degree}
              </h3>
              <div style={{
                color: 'rgba(255,255,255,0.5)',
                fontSize: '14px',
                marginBottom: '24px',
              }}>
                {edu.school}
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {edu.courses.map((c, j) => (
                  <span key={j} style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '11px',
                    color: 'rgba(255,255,255,0.6)',
                    border: '1px solid rgba(255,255,255,0.15)',
                    padding: '3px 8px',
                    borderRadius: '2px',
                  }}>
                    {c}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Timeline */}
      <section id="experience" style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
        <h2 style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: '24px',
          fontWeight: '600',
          color: '#ffffff',
          margin: 0,
          paddingBottom: '16px',
          borderBottom: '1px solid rgba(255,255,255,0.1)',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
        }}>
          <span className="material-symbols-outlined" style={{ color: '#6366f1' }}>work</span>
          Experience
        </h2>

        <div style={{ position: 'relative', paddingLeft: '32px' }}>
          {/* Vertical line */}
          <div style={{
            position: 'absolute',
            left: '7px',
            top: 0,
            bottom: 0,
            width: '1px',
            background: 'linear-gradient(to bottom, #6366f1, rgba(255,255,255,0.1))',
          }} />

          {[
            {
              role: 'ICT Intern',
              company: 'Kalanet Communications',
              period: 'Internship Period',
              bullets: [
                'Gained practical technical hands-on experience working directly inside an Internet Service Provider environment.',
                'Assisted with core local network administration, hardware troubleshooting, and structural diagnostics.',
                'Maintained logging records and monitored continuous server up-time architectures.',
              ],
              stack: ['Networking', 'Linux / Ubuntu', 'Infrastructure', 'Troubleshooting'],
              active: true,
            },
            {
              role: 'Full-Stack & ML Developer',
              company: 'Independent / Academic Projects',
              period: 'Ongoing',
              bullets: [
                'Architected and implemented a high-accuracy Student Dropout Predictor using Multiple Linear Regression models integrated with FastAPI.',
                'Built responsive layout systems in React and Tailwind CSS connected to backend server schemas.',
                'Migrated core local operating configurations completely into a standardized standalone Linux deployment pipeline.',
              ],
              stack: ['Python', 'FastAPI', 'React', 'PostgreSQL', 'Tailwind CSS'],
              active: false,
            }
          ].map((job, i) => (
            <div key={i} style={{ position: 'relative', marginBottom: '48px' }}>
              {/* Dot */}
              <div style={{
                position: 'absolute',
                left: '-29px',
                top: '4px',
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                backgroundColor: job.active ? '#6366f1' : 'rgba(255,255,255,0.1)',
                border: `2px solid ${job.active ? '#6366f1' : 'rgba(255,255,255,0.2)'}`,
                boxShadow: job.active ? '0 0 10px rgba(99,102,241,0.4)' : 'none',
              }} />

              <div className="timeline-card-inner" style={{
                backgroundColor: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '8px',
                transition: 'border-color 0.25s',
              }}
                onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(99,102,241,0.5)'}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'}
              >
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  marginBottom: '16px',
                  flexWrap: 'wrap',
                  gap: '8px',
                }}>
                  <div>
                    <h3 style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '18px',
                      fontWeight: '600',
                      color: '#ffffff',
                      margin: 0,
                    }}>
                      {job.role}
                    </h3>
                    <div style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: '13px',
                      color: '#6366f1',
                      marginTop: '4px',
                    }}>
                      {job.company}
                    </div>
                  </div>
                  <span style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '11px',
                    color: 'rgba(255,255,255,0.4)',
                    backgroundColor: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    padding: '4px 12px',
                    borderRadius: '2px',
                  }}>
                    {job.period}
                  </span>
                </div>

                <ul style={{
                  color: 'rgba(255,255,255,0.65)',
                  fontSize: '15px',
                  lineHeight: '1.7',
                  paddingLeft: '20px',
                  margin: '0 0 20px 0',
                }}>
                  {job.bullets.map((b, j) => (
                    <li key={j} style={{ marginBottom: '6px' }}>{b}</li>
                  ))}
                </ul>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {job.stack.map((tag, j) => (
                    <span key={j} style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: '11px',
                      textTransform: 'uppercase',
                      color: 'rgba(255,255,255,0.5)',
                      border: '1px solid rgba(255,255,255,0.15)',
                      padding: '3px 8px',
                      borderRadius: '2px',
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

    </main>
  )
}

export default About;