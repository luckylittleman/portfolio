function Home({ onNavigate }) {
  return (
    <main className="page-main" style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '120px',
    }}>

      {/* Hero */}
      <section className="hero-section">

        {/* Left: text content */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '32px' }}>

          {/* Profile picture — mobile only, above the greeting */}
          <div className="mobile-profile">
            <div style={{
              width: '160px',
              height: '160px',
              borderRadius: '50%',
              overflow: 'hidden',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0 20px 40px rgba(0,0,0,0.3), 0 0 40px rgba(99, 102, 241, 0.15)',
            }}>
              <img
                src="/profile.jpeg"
                alt="Hilary Omondi"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>

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
            Backend Engineer & Machine Learning Specialist with hands-on experience building scalable API architectures, data pipelines, and production machine learning models. Proficient in Python, FastAPI, Django REST Framework, PostgreSQL, and core ML frameworks like Scikit-learn and PyTorch. Proven ability to construct custom neural network frameworks from scratch, deploy predictive analytics tools, and maintain enterprise network infrastructure. Strong background in Linux environment configuration with a focus on system reliability and data-driven software solutions
          </p>

          <div className="hero-buttons" style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            {/* Primary Button */}
            <button
              onClick={() => onNavigate('Projects')}
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
              <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>arrow_forward</span>
            </button>

            {/* Secondary Button */}
            <button
              onClick={() => onNavigate('Contact')}
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

        {/* Profile Picture — desktop only, right side */}
        <div className="desktop-profile">
          <div style={{
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            overflow: 'hidden',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            boxShadow: '0 20px 40px rgba(0,0,0,0.3), 0 0 40px rgba(99, 102, 241, 0.15)',
          }}>
            <img
              src="/profile.jpeg"
              alt="Hilary Omondi"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
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
          <span className="material-icons" style={{ color: '#6366f1' }}>terminal</span>
          Technical Expertise
        </h2>

        <div className="tech-grid">
          {[
            {
              title: 'Languages',
              items: [
                { name: 'Python',      icon: 'devicon',   cls: 'devicon-python-plain colored' },
                { name: 'JavaScript',  icon: 'devicon',   cls: 'devicon-javascript-plain colored' },
                { name: 'SQL',         icon: 'material',  sym: 'database' },
                { name: 'Java',        icon: 'devicon',   cls: 'devicon-java-plain colored' },
              ],
            },
            {
              title: 'Backend & Infrastructure',
              items: [
                { name: 'FastAPI',     icon: 'devicon',   cls: 'devicon-fastapi-plain colored' },
                { name: 'PostgreSQL',  icon: 'devicon',   cls: 'devicon-postgresql-plain colored' },
                { name: 'Django',      icon: 'devicon',   cls: 'devicon-django-plain colored' },
                { name: 'MySQL',       icon: 'devicon',   cls: 'devicon-mysql-original colored' },
              ],
            },
            {
              title: 'Machine Learning',
              items: [
                { name: 'PyTorch',     icon: 'devicon',   cls: 'devicon-pytorch-original colored' },
                { name: 'Scikit-learn',icon: 'devicon',   cls: 'devicon-scikitlearn-plain colored' },
                { name: 'TensorFlow',  icon: 'devicon',   cls: 'devicon-tensorflow-original colored' },
                { name: 'MLflow',      icon: 'devicon',   cls: 'devicon-mlflow-original colored' },
                { name: 'NumPy',       icon: 'devicon',   cls: 'devicon-numpy-original colored' },
                { name: 'Pandas',      icon: 'devicon',   cls: 'devicon-pandas-original colored' },
              ],
            },
            {
              title: 'Tools & Environment',
              items: [
                { name: 'Ubuntu / Linux', icon: 'devicon', cls: 'devicon-ubuntu-plain colored' },
                { name: 'Git / GitHub',   icon: 'devicon', cls: 'devicon-github-original' },
                { name: 'Docker',      icon: 'devicon',   cls: 'devicon-docker-plain colored' },
                { name: 'Kubernetes',  icon: 'devicon',   cls: 'devicon-kubernetes-plain colored' },
                { name: 'WSL',            icon: 'devicon',  cls: 'devicon-windows8-original colored' },
              ],
            },
          ].map((card, i) => (
            <div
              key={i}
              style={{
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
                paddingBottom: '16px',
                borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                margin: '0 0 24px 0',
              }}>
                {card.title}
              </h3>

              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {card.items.map((item, j) => (
                  <li key={j} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    {item.icon === 'devicon' && (
                      <i className={item.cls} style={{ fontSize: '20px', flexShrink: 0, width: '20px', textAlign: 'center' }} />
                    )}
                    {item.icon === 'material' && (
                      <span
                        className="material-symbols-outlined"
                        style={{ fontSize: '20px', flexShrink: 0, width: '20px', textAlign: 'center', color: 'rgba(255,255,255,0.5)' }}
                      >
                        {item.sym}
                      </span>
                    )}
                    <span style={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '15px' }}>
                      {item.name}
                    </span>
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
      <span className="material-symbols-outlined" style={{ color: '#6366f1' }}>work</span>
      Featured Work
    </h2>
    <span
      onClick={() => onNavigate('Projects')}
      style={{
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: '14px',
        color: 'rgba(255, 255, 255, 0.6)',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        gap: '4px',
        transition: 'color 0.2s',
      }}
      onMouseEnter={e => e.currentTarget.style.color = '#ffffff'}
      onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}
    >
      View All
      <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>arrow_forward</span>
    </span>
  </div>

  <div className="featured-grid">
    {[
      {
        title: 'Numpy Net',
        image: '/numpynet.jpg',
        desc: 'A modular neural network framework built from scratch without external ML libraries  using Numpy.',
        stack: ['Python', 'NumPy', 'FastAPI'],
      },
      {
        title: 'E-Commerce Platform',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
        desc: 'A robust, end-to-end full-stack application featuring an asynchronous product catalog API designed using Django REST Framework and PostgreSQL for order processing and authentication,intergrated with a react frontend.',
        stack: ['React', 'Django', 'PostgreSQL', 'Tailwind'],
      },
      {
        title: 'Modern landing page',
        image: 'https://images.unsplash.com/photo-1513553404607-988bf2703777?auto=format&fit=crop&w=800&q=80',
        desc: 'Designed and deployed a responsive landing page for a non-profit organization focused on driving community engagement. Built with React and Tailwind CSS, prioritizing clean UI, fast load times and accessible design.',
        stack: ['React', 'Vite', 'Tailwind CSS'],
        link: 'tunawirihub.org',
      },
    ].map((project, i) => (
      <article
        key={i}
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
        {/* Card Image */}
        <div style={{ height: '160px', borderBottom: '1px solid rgba(255, 255, 255, 0.1)', overflow: 'hidden' }}>
          <img
            src={project.image}
            alt={project.title}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>

        {/* Card Content Body */}
        <div style={{ padding: '32px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
          
          {/* Header Row: Title + Conditional Link Icon */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
            <h3 style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '20px',
              fontWeight: '600',
              color: '#ffffff',
              margin: 0,
            }}>
              {project.title}
            </h3>

            {project.link && (
              <a
                href={project.link.startsWith('http') ? project.link : `https://${project.link}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                style={{
                  color: '#818cf8',
                  display: 'inline-flex',
                  alignItems: 'center',
                  textDecoration: 'none',
                }}
              >
                <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>
                  open_in_new
                </span>
              </a>
            )}
          </div>

          {/* Description */}
          <p style={{
            color: 'rgba(255, 255, 255, 0.7)',
            fontSize: '15px',
            lineHeight: '1.6',
            flexGrow: 1,
            marginBottom: '24px',
            marginTop: 0,
          }}>
            {project.desc}
          </p>

          {/* Tech Stack Tags */}
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