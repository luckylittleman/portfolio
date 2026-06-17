import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function Contact() {
  // Replace "YOUR_FORM_ID" with your 8-character Formspree hash key
  const [state, handleSubmit] = useForm("xlgkkdnq");

  const cardStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.02)',
    border: '1px solid rgba(255, 255, 255, 0.08)',
    borderRadius: '8px',
    padding: '24px',
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    textDecoration: 'none',
    color: '#ffffff',
    transition: 'all 0.25s ease',
  };

  const inputStyle = {
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.03)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '4px',
    padding: '12px 16px',
    color: '#ffffff',
    fontFamily: "'Inter', sans-serif",
    fontSize: '15px',
    outline: 'none',
    boxSizing: 'border-box',
    transition: 'border-color 0.2s ease',
  };

  const labelStyle = {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '11px',
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    color: 'rgba(255, 255, 255, 0.4)',
    marginBottom: '8px',
    display: 'block'
  };

  if (state.succeeded) {
    return (
      <main style={{ maxWidth: '500px', margin: '100px auto', padding: '0 24px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: "'Inter', sans-serif", color: '#ffffff', fontSize: '24px', marginBottom: '8px' }}>Message Sent!</h2>
        <p style={{ color: 'rgba(255, 255, 255, 0.5)', fontFamily: "'Inter', sans-serif", fontSize: '15px', margin: 0 }}>
          Thanks for reaching out. I'll get back to you as soon as possible.
        </p>
      </main>
    );
  }

  return (
    <main style={{
      maxWidth: '1200px',
      margin: '60px auto',
      padding: '0 24px',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '64px'
    }} className="flex flex-col md:grid">
      
      {/* Left Column: Media & Telemetry Cards */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
        <div>
          <h1 style={{ fontFamily: "'Inter', sans-serif", fontSize: '36px', fontWeight: '700', color: '#ffffff', margin: '0 0 12px 0' }}>
            Connect With Me
          </h1>
          <p style={{ color: 'rgba(255, 255, 255, 0.5)', fontFamily: "'Inter', sans-serif", fontSize: '16px', margin: 0, maxWidth: '440px', lineHeight: '1.6' }}>
            Find me on my digital profiles or reach out through secure communication vectors.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {/* GitHub Card */}
          <a href="https://github.com/luckylittleman" target="_blank" rel="noopener noreferrer" style={cardStyle}
             onMouseEnter={e => { e.currentTarget.style.borderColor = '#6366f1'; e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.04)'; }}
             onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.02)'; }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" style={{ color: '#6366f1' }}><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            <div>
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '15px', fontWeight: '600' }}>GitHub Profile</div>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '12px', color: 'rgba(255,255,255,0.4)', marginTop: '2px' }}>view open-source repos</div>
            </div>
          </a>

          {/* LinkedIn Card */}
          <a href="https://www.linkedin.com/in/hilary-omondi-867209273/" target="_blank" rel="noopener noreferrer" style={cardStyle}
             onMouseEnter={e => { e.currentTarget.style.borderColor = '#6366f1'; e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.04)'; }}
             onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.02)'; }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" style={{ color: '#6366f1' }}><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            <div>
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '15px', fontWeight: '600' }}>LinkedIn Network</div>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '12px', color: 'rgba(255,255,255,0.4)', marginTop: '2px' }}>connect professionally</div>
            </div>
          </a>

          {/* Phone Link Card */}
          <a href="tel:+254123456789" style={cardStyle}
             onMouseEnter={e => { e.currentTarget.style.borderColor = '#6366f1'; e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.04)'; }}
             onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.02)'; }}>
            <span className="material-symbols-outlined" style={{ color: '#6366f1', fontSize: '24px' }}>call</span>
            <div>
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '15px', fontWeight: '600' }}>Voice Protocol</div>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '12px', color: 'rgba(255,255,255,0.4)', marginTop: '2px' }}>+254-759-865-977</div>
            </div>
          </a>

          {/* Location Card */}
          <div style={{ ...cardStyle, cursor: 'default' }}>
            <span className="material-symbols-outlined" style={{ color: '#6366f1', fontSize: '24px' }}>distance</span>
            <div>
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '15px', fontWeight: '600' }}>Current Base</div>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '12px', color: 'rgba(255,255,255,0.4)', marginTop: '2px' }}>Kisumu,Kenya</div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column: Contact Form */}
      <section style={{
        backgroundColor: 'rgba(255, 255, 255, 0.01)',
        border: '1px solid rgba(255, 255, 255, 0.05)',
        borderRadius: '8px',
        padding: '40px',
      }}>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {/* Name Input */}
          <div>
            <label htmlFor="name" style={labelStyle}>Name</label>
            <input
              type="text" id="name" name="name" required
              style={inputStyle}
              onFocus={e => e.currentTarget.style.borderColor = '#6366f1'}
              onBlur={e => e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)'}
            />
            <ValidationError prefix="Name" field="name" errors={state.errors} style={{ color: '#ef4444', fontSize: '12px', marginTop: '4px' }} />
          </div>

          {/* Email Input */}
          <div>
            <label htmlFor="email" style={labelStyle}>Email Address</label>
            <input
              type="email" id="email" name="email" required
              style={inputStyle}
              onFocus={e => e.currentTarget.style.borderColor = '#6366f1'}
              onBlur={e => e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)'}
            />
            <ValidationError prefix="Email" field="email" errors={state.errors} style={{ color: '#ef4444', fontSize: '12px', marginTop: '4px' }} />
          </div>

          {/* Message Input */}
          <div>
            <label htmlFor="message" style={labelStyle}>Message</label>
            <textarea
              id="message" name="message" required rows="5"
              style={{ ...inputStyle, resize: 'none' }}
              onFocus={e => e.currentTarget.style.borderColor = '#6366f1'}
              onBlur={e => e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)'}
            />
            <ValidationError prefix="Message" field="message" errors={state.errors} style={{ color: '#ef4444', fontSize: '12px', marginTop: '4px' }} />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={state.submitting}
            style={{
              backgroundColor: '#6366f1',
              color: '#ffffff',
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '13px',
              fontWeight: '600',
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              padding: '14px 24px',
              border: 'none',
              borderRadius: '4px',
              cursor: state.submitting ? 'not-allowed' : 'pointer',
              transition: 'background-color 0.2s ease',
              opacity: state.submitting ? 0.6 : 1,
              marginTop: '8px'
            }}
            onMouseEnter={e => { if(!state.submitting) e.currentTarget.style.backgroundColor = '#4f46e5' }}
            onMouseLeave={e => { if(!state.submitting) e.currentTarget.style.backgroundColor = '#6366f1' }}
          >
            {state.submitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </section>

    </main>
  );
}

export default Contact;