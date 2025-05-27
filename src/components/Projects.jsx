import { motion } from 'framer-motion';
import '../styles/Projects.css';
import screenshot1 from '../assets/screenshot1.png';
import screenshot2 from '../assets/screenshot2.png';
import screenshot3 from '../assets/screenshot3.png';
// Project data
const projects = [
  {
    id: 1,
    title: 'Job Finder',
    description: 'A fully functional job search platform built with React, Tailwind CSS, and Node.js, featuring user authentication and real-time job listings.',
    screenshot: screenshot1,
    liveLink: 'https://job-finder-demo.example.com',
    githubLink: 'https://github.com/Biz1234/job-search-platform',
  },
  {
    id: 2,
    title: 'Social Media',
    description: 'A dynamic social media platform developed with React, Vite, and Node.js, supporting user profiles, posts, likes, and real-time notifications.',
    screenshot: screenshot3,
    liveLink: 'https://social-media-demo.example.com',
    githubLink: 'https://github.com/Biz1234/social_media/tree/branch',
  },
  {
    id: 3,
    title: 'Bizualem Car Rental',
    description: 'A car rental platform built with React.js and Node.js, featuring real-time vehicle availability, booking management, and payment integration.',
    screenshot: screenshot2,
    liveLink: 'https://car-rental-demo.example.com',
    githubLink: 'https://github.com/Biz1234/car-rental',
  },
];



function Projects() {
  return (
    <section id="projects" className="projects" aria-labelledby="projects-title">
      <motion.h2
        id="projects-title"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        My Projects
      </motion.h2>
      <div className="project-grid">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="project-card"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileFocus={{ scale: 1.05 }}
          >
            <img
              src={project.screenshot}
              alt={`Screenshot of ${project.title} project`}
              className="project-screenshot"
              loading="lazy"
            />
            <div className="project-details">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-links">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="live-btn"
                  aria-label={`View live demo of ${project.title}`}
                >
                  Live Demo
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github-btn"
                  aria-label={`View GitHub repository for ${project.title}`}
                >
                  GitHub
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
