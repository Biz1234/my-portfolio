import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Typed from 'typed.js';
import profilePhoto from '../assets/bizualem.jpg';
import '../styles/Hero.css';

function Hero() {
  const typedRef = useRef(null);

  useEffect(() => {
    if (typedRef.current) {
      const options = {
        strings: ['Fullstack Developer', 'Problem Solver', 'Web Enthusiast'],
        typeSpeed: 45,
        backSpeed: 25,
        backDelay: 1500,
        loop: true,
        showCursor: true,
        cursorChar: '|',
        smartBackspace: true,
        ariaLabel: 'My professional roles'
      };
      const typed = new Typed(typedRef.current, options);
      return () => typed.destroy();
    }
  }, []);

  const handleScroll = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <motion.section
      id="home"
      className="hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      aria-labelledby="hero-title"
    >
      <div className="hero-content">
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6, ease: 'easeOut' }}
        >
          <h1 id="hero-title">Hi, I'm <span className="name-highlight">Buzualem Abebe</span></h1>
          <p className="typed-text">
            <span ref={typedRef} aria-live="polite"></span>
          </p>
          <p className="bio">
            I love building modern, scalable web apps using React, Node.js, and more. My goal is to create intuitive and impactful solutions that people enjoy using.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="cta-button"
            onClick={(e) => handleScroll(e, 'contact')}
            transition={{ type: 'spring', stiffness: 300 }}
            aria-label="Contact me"
          >
            Get in Touch
          </motion.button>
        </motion.div>
        <motion.div
          className="hero-image"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6, ease: 'easeOut' }}
        >
          <img
            src={profilePhoto}
            alt="Buzualem Abebe, a fullstack developer"
            className="profile-photo"
            loading="eager"
            width="280"
            height="280"
          />
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Hero;