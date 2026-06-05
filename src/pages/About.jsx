function About() {
  return (
    <main style={{
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '80px 64px',
      display: 'flex',
      flexDirection: 'column',
      gap: '100px',
    }} className="px-4 md:px-16">

      {/* Hero Bio */}
      <section style={{
        display: 'grid',
        gridTemplateColumns: '1fr auto',
        gap: '48px',
        alignItems: 'start',
      }} className="flex flex-col md:grid">
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
              fontSize: 'clamp(32px, 5vw, 48px)',
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
              I'm Hilary, a software engineer focused on distributed systems and
              machine learning infrastructure. My work involves designing APIs,
              optimizing database queries, and deploying models that handle
              production-scale traffic. I believe in clean code, rigorous
              testing, and continuous learning.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <a href="#education" style={{
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
            <a href="#" style={{
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
              Download Resume
              <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>download</span>
            </a>
          </div>
        </div>

        {/* Stats Card */}
        <div style={{
          backgroundColor: 'rgba(255,255,255,0.03)',
          border: '1px solid rgba(255,255,255,0.1)',
          borderRadius: '12px',
          padding: '32px',
          minWidth: '220px',
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
        }}>
          {[
            { label: 'Location', value: 'Kisumu, Kenya' },
            
            { label: 'Focus', value: 'Backend & Machine Learning' },
            { label: 'Experience', value: '2+ Years' },
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
                color: stat.highlight ? '#6366f1' : 'rgba(255,255,255,0.85)',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}>
                {stat.highlight && (
                  <span style={{
                    width: '8px', height: '8px',
                    borderRadius: '50%',
                    backgroundColor: '#6366f1',
                    display: 'inline-block',
                    animation: 'pulse 2s ease-in-out infinite',
                  }} />
                )}
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

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px',
        }}>
          {[
            {
              period: '2022 — 2026',
              degree: 'B.S. Computer Science',
              school: 'Kabarak University',
              courses: ['Distributed Systems', 'Machine Learning', 'Database Design', 'Operating Systems'],
            },
            {
              period: '2024',
              degree: 'AWS Cloud Practitioner',
              school: 'Amazon Web Services',
              courses: ['Serverless', 'VPC & Security', 'High Availability'],
            },
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
      <section style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
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
              role: 'Software Engineering Intern',
              company: 'TechFlow Corp',
              period: 'Summer 2024',
              bullets: [
                'Architected a microservice in Go handling real-time data ingestion at 10k+ events/sec.',
                'Reduced query latency by 40% through PostgreSQL indexing optimizations.',
                'Increased test coverage to 92% with comprehensive unit and integration tests.',
              ],
              stack: ['Go', 'PostgreSQL', 'Docker', 'gRPC'],
              active: true,
            },
            {
              role: 'ML Research Assistant',
              company: 'University Vision Lab',
              period: 'Jan 2024 — Jun 2024',
              bullets: [
                'Trained custom ResNet models for anomalous pattern detection in medical imagery.',
                'Built data preprocessing pipelines in Python cleaning 50GB+ datasets.',
                'Co-authored documentation on hyperparameter tuning methodologies.',
              ],
              stack: ['Python', 'PyTorch', 'NumPy'],
              active: false,
            },
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

              <div style={{
                backgroundColor: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '8px',
                padding: '24px 32px',
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

      {/* Research & Publications */}
      <section style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
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
          <span className="material-symbols-outlined" style={{ color: '#6366f1' }}>article</span>
          Research & Publications
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px',
        }}>
          {[
            {
              venue: 'IEEE Conference 2024',
              venueIcon: 'menu_book',
              title: 'Efficient Routing Protocols in Low-Power IoT Networks',
              desc: 'A study on minimizing energy consumption in sensor networks using adaptive routing algorithms based on local node density.',
              role: 'Co-Author',
            },
            {
              venue: 'ArXiv Preprint',
              venueIcon: 'description',
              title: 'Comparative Analysis of Vector Database Retrieval Speeds',
              desc: 'Benchmarking various ANN algorithms across popular vector DBs for RAG applications.',
              role: 'Primary Author',
            },
          ].map((pub, i) => (
            <div key={i} style={{
              backgroundColor: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '8px',
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              transition: 'border-color 0.25s',
            }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(99,102,241,0.5)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'}
            >
              <div>
                <div style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '11px',
                  color: 'rgba(255,255,255,0.4)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  marginBottom: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                }}>
                  <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>{pub.venueIcon}</span>
                  {pub.venue}
                </div>
                <h4 style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '16px',
                  fontWeight: '600',
                  color: '#ffffff',
                  margin: '0 0 12px 0',
                  lineHeight: '1.4',
                }}>
                  {pub.title}
                </h4>
                <p style={{
                  color: 'rgba(255,255,255,0.55)',
                  fontSize: '14px',
                  lineHeight: '1.6',
                  margin: 0,
                }}>
                  {pub.desc}
                </p>
              </div>
              <div style={{
                marginTop: '20px',
                paddingTop: '16px',
                borderTop: '1px solid rgba(255,255,255,0.08)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
                <span style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '12px',
                  color: '#6366f1',
                }}>
                  {pub.role}
                </span>
                <a href="#" style={{ color: 'rgba(255,255,255,0.4)', transition: 'color 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.color = '#6366f1'}
                  onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.4)'}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>open_in_new</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

    </main>
  )
}

export default About