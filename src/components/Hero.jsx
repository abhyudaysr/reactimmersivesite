import React from "react";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="bg-particles" style={{ position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none' }}>
        <div className="particle" style={{ position: 'absolute', top: '10%', left: '5%', width: '350px', height: '350px', background: 'radial-gradient(circle, rgba(99, 102, 241, 0.2) 0%, rgba(99, 102, 241, 0) 70%)', filter: 'blur(80px)', borderRadius: '50%', animation: 'float 12s infinite alternate' }}></div>
        <div className="particle" style={{ position: 'absolute', bottom: '15%', right: '5%', width: '450px', height: '450px', background: 'radial-gradient(circle, rgba(168, 85, 247, 0.15) 0%, rgba(168, 85, 247, 0) 70%)', filter: 'blur(80px)', borderRadius: '50%', animation: 'float 18s infinite alternate-reverse' }}></div>
      </div>

      <div className="hero-content" style={{ position: 'relative', zIndex: 2 }}>
        <h1>Crafting <span className="highlight">Digital</span><br/>Experiences</h1>
        <p style={{ maxWidth: '600px', margin: '0 auto 35px', color: '#94a3b8', fontSize: '1.1rem' }}>
          We build high-performance web applications that merge modern aesthetics with technical precision.
        </p>
        <button className="cta-btn">Get Started</button>
      </div>
    </section>
  );
}

export default Hero;
