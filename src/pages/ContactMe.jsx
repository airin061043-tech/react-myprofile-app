import React, { useState } from 'react';

export default function ContactMe() {
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    name: '',
    adress: '',
    content: '',
    newsletter: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
    if (submitted) setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="contact-section">
      <h1 className="contact-heading">
        Contact <span className="text-accent">Me</span>
      </h1>
      <p className="contact-subtitle">Let’s get in touch!</p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="contact-grid">
          <div className="contact-field">
            <label htmlFor="email" className="contact-label">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="contact-input"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="contact-field">
            <label htmlFor="phone" className="contact-label">
              Phone
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              className="contact-input"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <div className="contact-field">
            <label htmlFor="name" className="contact-label">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className="contact-input"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="contact-field">
            <label htmlFor="adress" className="contact-label">
              Adress
            </label>
            <input
              id="adress"
              name="adress"
              type="text"
              className="contact-input"
              value={formData.adress}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="contact-field half-width">
          <label htmlFor="content" className="contact-label">
            Content
          </label>
          <textarea
            id="content"
            name="content"
            className="contact-textarea"
            value={formData.content}
            onChange={handleChange}
          />
        </div>

        <label className="contact-checkbox-row">
          <input
            type="checkbox"
            name="newsletter"
            className="contact-checkbox"
            checked={formData.newsletter}
            onChange={handleChange}
          />
          <span className="contact-checkbox-text">
            I would like to receive the newsletter.
          </span>
        </label>

        <button type="submit" className="contact-submit-btn">
          Submit
        </button>

        {submitted && (
          <p className="contact-status-msg">
            Thank you! Your message has been sent.
          </p>
        )}
      </form>
    </section>
  );
}
