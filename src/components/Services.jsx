import React from "react";

const servicesData = [
  {
    title: "Web Development",
    description:
      "Scalable, high-speed applications built with the latest React ecosystems.",
  },
  {
    title: "UI/UX Strategy",
    description:
      "User-first design language that ensures maximum engagement and flow.",
  },
  {
    title: "Digital Growth",
    description:
      "SEO and performance optimization to take your brand to the global stage.",
  },
];

function Services() {
  return (
    <section id="services" className="reveal">
      <h2
        style={{
          textAlign: "center",
          fontSize: "clamp(2rem, 5vw, 3.5rem)",
          margin: "40px 0",
        }}
      >
        Our <span className="highlight">Expertise</span>
      </h2>

      <div className="services-container">
        {servicesData.map((service, index) => (
          <div className="service-card" key={index}>
            <h3 style={{ marginBottom: "15px" }}>{service.title}</h3>
            <p style={{ color: "#94a3b8" }}>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;

