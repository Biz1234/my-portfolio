import { motion } from 'framer-motion';
import { FaDownload } from 'react-icons/fa';
import '../styles/About.css';


function About() {
  return (
    <section id="about" className="about" aria-labelledby="about-title">
      <motion.h2
        id="about-title"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        About Me
      </motion.h2>
      <div className="about-container">
        <motion.div
          className="about-text"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="intro">
            I’m Bizualem Abebe, a Fullstack Developer passionate about building modern web solutions. 
            I turn ideas into clean, scalable code with a focus on user experience.
          </p>
          <div className="about-details">
           
            <h3>Passion</h3>
            <p>
              I love exploring new tools, solving problems, and creating impactful digital experiences.
            </p>
          </div>
          <motion.a
            href="./bizualemcv.docx" 
            download="Bizualem-cv.docx"
            className="resume-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Download Bizualem Abebe's resume"
          >
            <FaDownload /> Resume
          </motion.a>
        </motion.div>
        <motion.div
          className="about-highlight"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="highlight-box">
            <h3>At a Glance</h3>
            <ul role="list">
              <li role="listitem">Fullstack Developer</li>
              <li role="listitem">Based in [Adama, Ethiopia]</li> {/* Replace with your location */}
              <li role="listitem">Experience: [morethan 2] Years</li> {/* Replace with your experience */}
              <li role="listitem">Projects: [morethan 10]</li> {/* Replace with your project count */}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;