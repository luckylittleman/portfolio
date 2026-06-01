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
              color: '#00f0ff',
              display: 'block',
              marginBottom: '16px',
            }}>
              Hello world, I'm Hilary Omondi.
            </span>
            <h1 style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 'clamp(32px, 5vw, 48px)',
              fontWeight: '700',
              color: '#dce4e5',
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
            color: '#b9cacb',
            fontSize: '16px',
            lineHeight: '1.6',
            maxWidth: '480px',
            margin: 0,
          }}>
           Hi, I'm Hilary! A full-stack and Machine Learning developer who loves turning complex data into actionable insights. I spend most of my time working on building everything from predictive regression models to modern, responsive web apps. I'm constantly exploring new cloud technologies and looking for the next challenging problem to solve.
          </p>

          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <button style={{
              backgroundColor: '#ffffff',
              color: '#003336',
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '12px',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              padding: '12px 24px',
              border: 'none',
              borderRadius: '2px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}>
              View Projects
              <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>arrow_forward</span>
            </button>

            <button style={{
              backgroundColor: 'transparent',
              color: '#00f0ff',
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '12px',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              padding: '12px 24px',
              border: '1px solid #00f0ff',
              borderRadius: '2px',
              cursor: 'pointer',
            }}>
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
            border: '1px solid rgba(59,73,75,0.4)',
            animation: 'pulse 3s ease-in-out infinite',
          }} />
          <div style={{
            position: 'absolute', inset: '32px',
            borderRadius: '50%',
            border: '1px dashed rgba(0,240,255,0.2)',
            animation: 'spinSlow 20s linear infinite',
          }} />
          <div style={{
            position: 'absolute', inset: '64px',
            borderRadius: '50%',
            border: '1px solid rgba(59,73,75,0.4)',
            animation: 'spinSlowRev 15s linear infinite',
          }} />
          <div style={{
            width: '112px', height: '112px',
            backgroundColor: '#0d1515',
            border: '1px solid #3b494b',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backdropFilter: 'blur(12px)',
            zIndex: 10,
          }}>
            <span className="material-symbols-outlined" style={{
              fontSize: '56px',
              color: '#00f0ff',
              fontVariationSettings: "'FILL' 0",
            }}>
              data_object
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
          color: '#dce4e5',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          margin: 0,
        }}>
          <span className="material-symbols-outlined" style={{ color: '#00f0ff' }}>code_blocks</span>
          Technical Expertise
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '24px',
        }}>
          {[
            {
              icon: 'terminal',
              title: 'Languages',
              items: ['Python', 'JavaScript', 'SQL', 'React', 'HTML/CSS', 'Java'],
            },
            {
              icon: 'dns',
              title: 'Backend & Infrastructure',
              items: ['FastAPI', 'PostgreSQL', 'Docker', 'Kubernetes', 'Django', 'MySQL'],
            },
            {
              icon: 'memory',
              title: 'Machine Learning',
              items: ['PyTorch', 'Scikit-learn', 'TensorFlow', 'MLflow', 'Numpy', 'Pandas'],
            },
          ].map((card, i) => (
            <div key={i} style={{
              backgroundColor: '#192122',
              border: '1px solid #2e3637',
              borderRadius: '8px',
              padding: '32px',
              transition: 'border-color 0.25s',
            }}
              onMouseEnter={e => e.currentTarget.style.borderColor = '#ffffff'}
              onMouseLeave={e => e.currentTarget.style.borderColor = '#2e3637'}
            >
              <h3 style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '12px',
                letterSpacing: '0.1em',
                color: '#b9cacb',
                textTransform: 'uppercase',
                marginBottom: '24px',
                paddingBottom: '16px',
                borderBottom: '1px solid #2e3637',
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
                      backgroundColor: j === 0 ? '#849495' : j === 1 ? '#849495' : '#849495',
                    }} />
                    <span style={{ color: '#dce4e5', fontSize: '16px' }}>{item}</span>
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
            color: '#dce4e5',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            margin: 0,
          }}>
            <span className="material-symbols-outlined" style={{ color: '#00f0ff' }}>folder_open</span>
            Featured Work
          </h2>
          <span style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '14px',
            color: '#b9cacb',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
          }}>
            View All
            <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>arrow_forward</span>
          </span>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '24px',
        }}>
          {[
            {
              icon: 'query_stats',
              title: 'Distributed Log Analytics Engine',
              desc: 'High-throughput distributed system to process and index terabytes of log data in real-time. Built using Rust for core processing and FastAPI for the query interface.',
              stack: ['Rust', 'FastAPI', 'Kafka'],
            },
            {
              icon: 'psychology',
              title: 'Semantic Search Pipeline',
              desc: 'End-to-end semantic search leveraging fine-tuned transformer models. Custom vector quantization reduced index footprint by 40% while maintaining full recall.',
              stack: ['PyTorch', 'Milvus', 'Transformers'],
            },
            {
              icon: 'model_training',
              title: 'Automated Model Deployment Platform',
              desc: 'Internal tooling for ML model deployments — model registry, artifact versioning, and automatic Kubernetes resource provisioning.',
              stack: ['Go', 'Kubernetes', 'MLflow'],
            },
          ].map((project, i) => (
            <article key={i}
              style={{
                backgroundColor: '#0d1515',
                border: '1px solid #1e2a2b',
                borderRadius: '8px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                cursor: 'pointer',
                transition: 'border-color 0.25s, box-shadow 0.25s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = '#ffffff'
                e.currentTarget.style.boxShadow = '0 0 20px rgba(255,255,255,0.07)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = '#1e2a2b'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              {/* Card image area */}
              <div style={{
                height: '160px',
                backgroundColor: '#2e3637',
                borderBottom: '1px solid #1e2a2b',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <span className="material-symbols-outlined" style={{
                  fontSize: '56px',
                  color: 'rgba(185,202,203,0.3)',
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
                  color: '#dce4e5',
                  marginBottom: '12px',
                  marginTop: 0,
                }}>
                  {project.title}
                </h3>
                <p style={{
                  color: '#b9cacb',
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
                      color: '#b9cacb',
                      border: '1px solid #2e3637',
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