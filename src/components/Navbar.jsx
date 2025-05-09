import { useState, useEffect } from 'react';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/Navbar.css';

function Navbar({ theme, toggleTheme }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false); // Close sidebar after clicking
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      const menu = document.querySelector('.mobile-links');
      const toggle = document.querySelector('.menu-toggle');
      if (
        isMenuOpen &&
        menu &&
        !menu.contains(e.target) &&
        !toggle.contains(e.target)
      ) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

  const menuVariants = {
    hidden: {
      x: '100%',
      opacity: 0,
      transition: { duration: 0.3, ease: 'easeInOut' }
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.3, ease: 'easeInOut' }
    }
  };

  return (
    <nav className={`navbar ${theme}`} aria-label="Main navigation">
      <h2 className="navbar-logo">Buzualem Abebe</h2>
      <div className="nav-right">
        <ul className="nav-links desktop-links">
          {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                onClick={(e) => handleScroll(e, item)}
                aria-label={`Navigate to ${item} section`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            </li>
          ))}
        </ul>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div className="mobile-menu-container" initial="hidden" animate="visible" exit="hidden">
              <motion.ul
                className="nav-links mobile-links"
                variants={menuVariants}
                role="menu"
              >
                {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
                  <li key={item} role="menuitem">
                    <a
                      href={`#${item}`}
                      onClick={(e) => handleScroll(e, item)}
                      aria-label={`Navigate to ${item} section`}
                    >
                      {item.charAt(0).toUpperCase() + item.slice(1)}
                    </a>
                  </li>
                ))}
              </motion.ul>
            </motion.div>
          )}
        </AnimatePresence>

        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
        >
          {theme === 'light' ? <FaMoon /> : <FaSun />}
        </button>

        <button
          className="menu-toggle"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
