const backendProjects = [
  
  
  {
    icon: 'storage',
    title: 'Expense Splitter (still under development)',
    desc: 'A backend REST API for tracking and splitting shared expenses within groups — think "Splitwise" backend. Built with FastAPI and PostgreSQL, it handles user authentication, group management, expense logging, and automatic debt calculation (who owes who, and how much) across multiple group members.',
    stack: ['Python', 'FastAPI', 'PostgreSQL', 'SQLAlchemy','Pydantic'],
    github: 'https://github.com/luckylittleman/Expense-Splitter.git',
    image:'/distributedkey.jpg',
    // demo: 'https://your-expense-splitter-demo.com',
  },
  /*
  {
    icon: 'hub',
    title: 'Microservices Event Bus',
    desc: 'A scalable event-driven architecture relying on Apache Kafka for async communication between Go microservices. Features distributed tracing and automated circuit breaking.',
    stack: ['Go', 'Kafka', 'Docker'],
    github: 'https://github.com/yourusername/event-bus',
  },
  {
    icon: 'lan',
    title: 'High-Concurrency API Gateway',
    desc: 'A lightweight, highly concurrent API gateway written in C++ handling rate limiting, authentication, and dynamic request routing with minimal overhead.',
    stack: ['C++', 'Redis', 'Nginx'],
    github: 'https://github.com/yourusername/api-gateway',
  },
  {
    icon: 'query_stats',
    title: 'Distributed Log Analytics Engine',
    desc: 'High-throughput system that processes and indexes terabytes of log data in real-time. Core processing in Rust with a FastAPI query interface.',
    stack: ['Rust', 'FastAPI', 'Kafka'],
    github: 'https://github.com/yourusername/log-analytics',
  },
  {
    icon: 'model_training',
    title: 'Automated Model Deployment Platform',
    desc: 'ML model registry with artifact versioning and automatic Kubernetes resource provisioning. Reduced deployment time from days to minutes.',
    stack: ['Go', 'Kubernetes', 'MLflow'],
    github: 'https://github.com/yourusername/model-deployment',
  },
  */
]

const mlProjects = [
 
  {
    icon: 'psychology',
    title: 'Linear-Regression-Model',
    desc: 'Final-year CS project: Multiple Linear Regression engine for student performance prediction with from-scratch gradient descent, 5-fold CV, XAI risk analysis, and a full-stack React + FastAPI interface.',
    stack: ['Python', 'NumPy', 'Pandas','FastAPI'],
    github: 'https://github.com/luckylittleman/Linear_Regression_Model.git',
    image:'/studentdropout.jpg',
    // demo: 'https://your-linear-regression-demo.com',
  },
   /*
  
  {
    icon: 'troubleshoot',
    title: 'Real-time Anomaly Detection',
    desc: 'Ensemble model pipeline detecting network intrusions in real-time streaming data. Uses Apache Spark for distributed feature extraction and isolation forests for scoring.',
    stack: ['Spark', 'Scikit-learn', 'Scala'],
    github: 'https://github.com/yourusername/anomaly-detection',
  },
  {
    icon: 'manage_search',
    title: 'Semantic Search Pipeline',
    desc: 'End-to-end semantic search with fine-tuned transformers. Custom vector quantization reduces index footprint by 40% while maintaining full recall.',
    stack: ['PyTorch', 'Milvus', 'Transformers'],
    github: 'https://github.com/yourusername/semantic-search',
  },*/
  {
    icon: 'school',
    title: 'Numpy Net',
    desc: 'A modular neural network framework built from scratch using Numpy',
    stack: ['Python', 'NumPy', 'FastAPI'],
    github: 'https://github.com/luckylittleman/numpy-net',
    image:'/numpynet.jpg',
    // demo: 'https://your-numpy-net-demo.com',
  },
]

const fullStackProjects = [
  {
    icon: 'shopping_cart',
    title: 'E-Commerce Platform',
    desc: 'A robust, end-to-end full-stack application featuring an asynchronous product catalog API designed using Django REST Framework and PostgreSQL for order processing and authentication, integrated with a React frontend.',
    stack: ['React', 'Django', 'PostgreSQL', 'Tailwind'],
    github: 'https://github.com/luckylittleman',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    // demo: 'https://your-ecommerce-demo.com',
  },
  {
    icon: 'web',
    title: 'Modern Landing Page',
    desc: 'Designed and deployed a responsive landing page for a non-profit organization focused on driving community engagement. Built with React and Tailwind CSS, prioritizing clean UI, fast load times and accessible design.',
    stack: ['React', 'Vite', 'Tailwind CSS'],
    github: 'https://github.com/luckylittleman',
    demo: 'https://tunawirihub.org',
    image: 'https://images.unsplash.com/photo-1513553404607-988bf2703777?auto=format&fit=crop&w=800&q=80',
  },
]

// Destructured the 'github' prop here
function ProjectCard({ icon, title, desc, stack, github, image, demo }) {
  return (
    <article
      className="project-card"
      style={{
        backgroundColor: 'rgba(255, 255, 255, 0.02)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        borderRadius: '8px',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        cursor: 'pointer',
        transition: 'border-color 0.25s, box-shadow 0.25s, transform 0.25s',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = 'rgba(99, 102, 241, 1)'
        e.currentTarget.style.boxShadow = '0 0 20px rgba(99, 102, 241, 0.2)'
        e.currentTarget.style.transform = 'translateY(-4px)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)'
        e.currentTarget.style.boxShadow = 'none'
        e.currentTarget.style.transform = 'translateY(0)'
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
        overflow:'hidden'
      }}>
        {image ? (
          <img
            src={image}
            alt={title}
            style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
              }}
           />
           ) : (
        
        <span className="material-symbols-outlined" style={{
          fontSize: '56px',
          color: 'rgba(255, 255, 255, 0.15)',
          fontVariationSettings: "'FILL' 0",
        }}>
          {icon}
        </span>
           )}
      </div>

      {/* Card body */}
      <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        <h3 style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: '18px',
          fontWeight: '600',
          color: '#ffffff',
          marginBottom: '12px',
          marginTop: 0,
        }}>
          {title}
        </h3>
        <p style={{
          color: 'rgba(255, 255, 255, 0.7)',
          fontSize: '15px',
          lineHeight: '1.6',
          flexGrow: 1,
          margin: 0,
          marginBottom: '24px',
        }}>
          {desc}
        </p>

        {/* Stack tags */}
        <div style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          paddingTop: '16px',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          marginTop: 'auto',
        }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {stack.map((tag, i) => (
              <span key={i} style={{
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

          {/* Action Buttons Row */}
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            {/* Functional View Source Button */}
            <a 
              href={github || '#'} 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '12px',
                color: '#6366f1',
                border: '1px solid #6366f1',
                padding: '8px 16px',
                borderRadius: '4px',
                textDecoration: 'none',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'rgba(99, 102, 241, 0.1)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'transparent';
              }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>code</span>
              View Source
            </a>

            {/* Check Out Demo Button — only rendered when a demo URL exists */}
            {demo && (
              <a
                href={demo}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '12px',
                  color: '#ffffff',
                  backgroundColor: '#6366f1',
                  border: '1px solid #6366f1',
                  padding: '8px 16px',
                  borderRadius: '4px',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.backgroundColor = '#818cf8';
                  e.currentTarget.style.borderColor = '#818cf8';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(99, 102, 241, 0.3)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.backgroundColor = '#6366f1';
                  e.currentTarget.style.borderColor = '#6366f1';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>open_in_new</span>
                Check Out Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  )
}

function SectionHeader({ icon, title, color = '#6366f1' }) {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      paddingBottom: '16px',
      borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
      marginBottom: '32px',
    }}>
      <span className="material-symbols-outlined" style={{ color }}>{icon}</span>
      <h2 style={{
        fontFamily: "'Inter', sans-serif",
        fontSize: '24px',
        fontWeight: '600',
        color: '#ffffff',
        margin: 0,
      }}>
        {title}
      </h2>
    </div>
  )
}

function Projects() {
  return (
    <main className="page-main">

      {/* Page Header */}
      <header style={{ marginBottom: '80px' }}>
        <h1 style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: 'clamp(28px, 5vw, 48px)',
          fontWeight: '700',
          color: '#ffffff',
          letterSpacing: '-0.02em',
          margin: 0,
          marginBottom: '12px',
        }}>
          Technical Projects
        </h1>
        <p style={{
          color: 'rgba(255, 255, 255, 0.7)',
          fontSize: '16px',
          lineHeight: '1.6',
          maxWidth: '600px',
          margin: 0,
        }}>
          A selection of backend systems, machine learning models, and full-stack applications focused on
          distributed architecture, performance optimization, and scalable inference.
        </p>
      </header>

      {/* Backend Systems */}
      <section style={{ marginBottom: '100px' }}>
        <SectionHeader icon="dns" title="Backend Systems" color="#ffffff" />
        <div className="projects-grid">
          {backendProjects.map((p, i) => (
            <ProjectCard key={i} {...p} />
          ))}
        </div>
      </section>

      {/* Machine Learning */}
      <section style={{ marginBottom: '100px' }}>
        <SectionHeader icon="memory" title="Machine Learning" color="#ffffff" />
        <div className="projects-grid">
          {mlProjects.map((p, i) => (
            <ProjectCard key={i} {...p} />
          ))}
        </div>
      </section>

      {/* Full-Stack & Web */}
      <section>
        <SectionHeader icon="web" title="Full-Stack & Web" color="#ffffff" />
        <div className="projects-grid">
          {fullStackProjects.map((p, i) => (
            <ProjectCard key={i} {...p} />
          ))}
        </div>
      </section>

    </main>
  )
}

export default Projects;