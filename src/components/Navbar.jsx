import { useState, useEffect, useMemo } from 'react';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/Navbar.css';

function Navbar({ theme, toggleTheme }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const menuItems = useMemo(() => ['home', 'about', 'skills', 'projects', 'contact'], []);

  const handleScroll = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu when clicking outside or pressing Escape
  useEffect(() => {
    const handleClickOutside = (e) => {
      const menu = document.querySelector('.mobile-links');
      const toggle = document.querySelector('.menu-toggle');
      if (isMenuOpen && menu && !menu.contains(e.target) && !toggle.contains(e.target)) {
        setIsMenuOpen(false);
      }
    };

    const handleEscape = (e) => {
      if (e.key === 'Escape') setIsMenuOpen(false);
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isMenuOpen]);

  // Detect active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = menuItems.map(id => document.getElementById(id));
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(section.id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [menuItems]);

  const menuVariants = {
    hidden: { x: '100%', opacity: 0, transition: { duration: 0.3, ease: 'easeInOut' } },
    visible: { x: 0, opacity: 1, transition: { duration: 0.3, ease: 'easeInOut' } }
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  return (
    <nav className={`navbar ${theme}`} aria-label="Main navigation">
      <a href="#home" className="navbar-logo" onClick={(e) => handleScroll(e, 'home')}>
        Buzualem
      </a>
      
      <div className="nav-right">
        <ul className="nav-links desktop-links">
          {menuItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                onClick={(e) => handleScroll(e, item)}
                aria-label={`Navigate to ${item} section`}
                className={activeSection === item ? 'active' : ''}
                aria-current={activeSection === item ? 'page' : undefined}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
        >
          <motion.div
            animate={{ rotate: theme === 'light' ? 0 : 180 }}
            transition={{ duration: 0.3 }}
          >
            {theme === 'light' ? <FaMoon /> : <FaSun />}
          </motion.div>
        </button>

        <button
          className="menu-toggle"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <AnimatePresence>
          {isMenuOpen && (
            <>
              <motion.div
                className="mobile-menu-overlay"
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={overlayVariants}
                onClick={() => setIsMenuOpen(false)}
              />
              
              <motion.div
                className="mobile-menu-container"
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                <motion.ul
                  className="nav-links mobile-links"
                  variants={menuVariants}
                  role="menu"
                >
                  {menuItems.map((item) => (
                    <li key={item} role="menuitem">
                      <a
                        href={`#${item}`}
                        onClick={(e) => handleScroll(e, item)}
                        aria-label={`Navigate to ${item} section`}
                        className={activeSection === item ? 'active' : ''}
                        aria-current={activeSection === item ? 'page' : undefined}
                      >
                        {item.charAt(0).toUpperCase() + item.slice(1)}
                      </a>
                    </li>
                  ))}
                </motion.ul>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}

export default Navbar;