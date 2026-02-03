import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // ✅ prevents page reload

    setSubmitted(true); // ✅ show success message

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section
      id="contact"
      className="reveal active"
      style={{ padding: "100px 5%" }}
    >
      <div style={{ textAlign: "center", marginBottom: "50px" }}>
        <h2 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
          Work <span className="highlight">With Us</span>
        </h2>
        <p style={{ color: "#94a3b8" }}>
          Have a project in mind? Reach out and let's build it.
        </p>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          value={formData.name}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          value={formData.email}
          onChange={handleChange}
        />

        <textarea
          rows="6"
          name="message"
          placeholder="Project Details"
          required
          value={formData.message}
          onChange={handleChange}
        ></textarea>

        <button type="submit" className="cta-btn">
          Send Message
        </button>

        {submitted && (
          <p style={{ marginTop: "20px", color: "#22c55e" }}>
            ✅ Message sent successfully!
          </p>
        )}
      </form>
    </section>
  );
}

export default Contact;

