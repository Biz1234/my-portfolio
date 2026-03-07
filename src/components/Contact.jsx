import { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import '../styles/Contact.css';

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    // Consider debouncing if performance issues arise with rapid typing
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (!formData.name || !formData.email || !formData.message) {
      setStatus('Please fill in all fields.');
      setIsLoading(false);
      return;
    }

    if (!validateEmail(formData.email)) {
      setStatus('Please enter a valid email address.');
      setIsLoading(false);
      return;
    }

    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      setStatus('Email service is not configured. Please try again later.');
      setIsLoading(false);
      return;
    }

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          reply_to: formData.email,
        },
        {
          publicKey: EMAILJS_PUBLIC_KEY,
        }
      );

      setStatus('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
      setIsLoading(false);
      setTimeout(() => setStatus(''), 5000);
    } catch {
      setStatus('Message failed to send. Please try again.');
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="contact" aria-labelledby="contact-title">
      <motion.h2
        id="contact-title"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Get in Touch
      </motion.h2>
      <motion.div
        className="contact-form-container"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1, duration: 0.6 }}
        viewport={{ once: true }}
      >
        <form
          onSubmit={handleSubmit}
          className="contact-form"
          aria-labelledby="contact-title"
        >
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              aria-required="true"
              aria-describedby="name-error"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              aria-required="true"
              aria-describedby="email-error"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
              aria-required="true"
              aria-describedby="message-error"
            />
          </div>
          <motion.button
            type="submit"
            className="submit-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            disabled={isLoading}
            aria-label="Send contact message"
          >
            {isLoading ? (
              <span className="loading-spinner"></span>
            ) : (
              'Send Message'
            )}
          </motion.button>
          {status && (
            <p className="form-status" aria-live="polite">
              {status}
            </p>
          )}
        </form>
      </motion.div>
    </section>
  );
}

export default Contact;