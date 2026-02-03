import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import "./index.css";

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    }, { threshold: 0.1 });

    const revealElements = document.querySelectorAll(".reveal");
    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="app-wrapper">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Contact />
      <footer style={{ textAlign: 'center', padding: '40px', color: '#4b5563', fontSize: '0.9rem', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        &copy; 2026 NOVATECH DIGITAL. All Rights Reserved.
      </footer>
    </div>
  );
}

export default App;

