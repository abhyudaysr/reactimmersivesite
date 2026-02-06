import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    try {
      const res = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
      } else {
        setError(true);
      }
    } catch (err) {
      console.error(err);
      setError(true);
    }

    setLoading(false);
  };

  return (
    <section id="contact" className="reveal active" style={{ padding: "100px 5%" }}>
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
        />

        <button type="submit" className="cta-btn" disabled={loading}>
          {loading ? "Sending..." : "Send Message"}
        </button>

        {submitted && (
          <p style={{ marginTop: "20px", color: "#22c55e" }}>
            ✅ Message sent successfully!
          </p>
        )}

        {error && (
          <p style={{ marginTop: "20px", color: "#ef4444" }}>
            ❌ Something went wrong. Please try again.
          </p>
        )}
      </form>
    </section>
  );
}

export default Contact;

