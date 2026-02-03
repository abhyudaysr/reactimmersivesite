import React from "react";
import aboutPic from "../assets/about.JPG";

function About() {
  return (
    <section id="about" className="reveal" style={{ padding: '100px 5%' }}>
      <div className="about-container" style={{ 
        display: 'flex', 
        flexWrap: 'wrap', // Added this so it stacks on mobile
        alignItems: 'center', 
        gap: '50px', 
        maxWidth: '1200px', 
        margin: '0 auto' 
      }}>
        
        {/* Text Section */}
        <div style={{ flex: '1 1 400px' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', marginBottom: '20px' }}>
            Our <span className="highlight">Mission</span>
          </h2>
          <p style={{ fontSize: '1.1rem', color: '#94a3b8' }}>
            We are dedicated to bridging the gap between imagination and digital reality. 
            Our team focuses on clean code, bold design, and seamless user experiences.
          </p>
        </div>

        {/* Image Section - Now actually using aboutPic */}
        <div style={{ 
          flex: '1 1 400px', 
          borderRadius: '24px', 
          overflow: 'hidden', 
          border: '1px solid rgba(255,255,255,0.1)',
          boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
        }}>
          <img 
            src={aboutPic} 
            alt="About Us" 
            style={{ 
              width: '100%', 
              height: 'auto', 
              display: 'block',
              objectFit: 'cover' 
            }} 
          />
        </div>

      </div>
    </section>
  );
}

export default About;
