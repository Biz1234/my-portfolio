import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';
import '../styles/Footer.css';

function Footer() {
  const socialLinks = [
    {
      href: 'mailto:bizualemabebe04@example.com', 
      icon: <FaEnvelope />,
      label: 'Email Bizualem Abebe',
    },
    {
      href: 'https://github.com/biz1234',
      icon: <FaGithub />,
      label: 'Visit Bizualem Abebe’s GitHub profile',
    },
    {
      href: 'https://linkedin.com/in/bizualem-abebe-538572330', 
      icon: <FaLinkedin />,
      label: 'Visit Bizualem Abebe’s LinkedIn profile',
    },
    {
      href: 'https://twitter.com/ansif7098', 
      icon: <FaTwitter />,
      label: 'Visit Bizualem Abebe’s Twitter profile',
    },
  ];

  return (
    <motion.footer
      className="footer"
      role="contentinfo"
      aria-label="Footer with contact and social media links"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="footer-container">
        <p>© {new Date().getFullYear()} Bizualem Abebe. All rights reserved.</p>
        <ul className="social-links">
          {socialLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
              >
                <span
                  className="social-icon"
                  tabIndex="0"
                >
                  {link.icon}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </motion.footer>
  );
}

export default Footer;