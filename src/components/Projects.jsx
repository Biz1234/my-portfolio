import { motion } from 'framer-motion';
import { useState } from 'react';
import '../styles/Projects.css';
import screenshot1 from '../assets/fitness.png';
import screenshot2 from '../assets/screenshot2.png';
import screenshot3 from '../assets/movie.png';
import screenshot4 from '../assets/city.png';

// Icons for enhanced UI
import { FiExternalLink, FiGithub, FiChevronRight, FiChevronLeft } from 'react-icons/fi';

// Project data with additional fields for enhanced UI
const projects = [
  {
    id: 1,
    title: 'Fitness Pro',
    description: 'A modern fitness web app built with React (Vite) and TailwindCSS, featuring workout tracking, progress monitoring, and a responsive design for all devices.',
    screenshot: screenshot1,
    liveLink: 'https://68ba9a261f1c8bda9752b83c--fitp.netlify.app/',
    githubLink: 'https://github.com/Biz1234/job-search-platform',
    technologies: ['React', 'Vite', 'TailwindCSS'],
    featured: true
  },
  {
    id: 2,
    title: 'Boza Movie',
    description: 'A movie search web application is developed with React and Vite. It fetches data from a movie API to provide details like titles, posters, release dates, and ratings.',
    screenshot: screenshot3,
    liveLink: 'https://bozamovie.netlify.app/',
    githubLink: 'https://github.com/Biz1234/social_media/tree/branch',
    technologies: ['React', 'Vite', 'API Integration'],
    featured: false
  },
  {
    id: 3,
    title: 'Bizualem Car Rental',
    description: 'This car rental landing page was built using React and Vite, featuring a sleek, responsive design optimized for both desktop and mobile users.',
    screenshot: screenshot2,
    liveLink: 'https://car-rental-72r1.onrender.com/',
    githubLink: 'https://github.com/Biz1234/car-rental',
    technologies: ['React', 'Vite', 'Responsive Design'],
    featured: false
  },
  {
    id: 4,
    title: 'Smart City',
    description: 'This Smart City web application is built with the MERN stack. It enables citizens to report issues, request city services, and stay updated on community improvements.',
    screenshot: screenshot4,
    liveLink: 'https://smartcity-1-lkue.onrender.com/',
    githubLink: 'https://github.com/Biz1234/city-explorer',
    technologies: ['MERN Stack', 'MongoDB', 'Express', 'React', 'Node.js'],
    featured: true
  },
];

function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [currentProject, setCurrentProject] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Filter projects if needed (for future use)
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.featured);

  const openProjectModal = (index) => {
    setCurrentProject(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const navigateProject = (direction) => {
    if (direction === 'next') {
      setCurrentProject((prev) => (prev + 1) % projects.length);
    } else {
      setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="projects" className="projects" aria-labelledby="projects-title">
      <div className="projects-container">
        <motion.h2
          id="projects-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="section-title"
        >
          Featured Work
        </motion.h2>

        <motion.p 
          className="section-subtitle"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          A selection of my recent projects showcasing my skills in web development
        </motion.p>

        <motion.div 
          className="project-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className={`project-card ${project.featured ? 'featured' : ''}`}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              onClick={() => openProjectModal(index)}
            >
              <div className="project-image-container">
                <img
                  src={project.screenshot}
                  alt={`Screenshot of ${project.title} project`}
                  className="project-screenshot"
                  loading="lazy"
                />
                <div className="project-overlay">
                  <div className="project-actions">
                    <button className="project-action-btn" aria-label="View project details">
                      View Project
                    </button>
                  </div>
                </div>
                {project.featured && <div className="featured-badge">Featured</div>}
              </div>
              
              <div className="project-details">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                
                <div className="technologies">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
                
                <div className="project-links">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="live-btn"
                    aria-label={`View live demo of ${project.title}`}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FiExternalLink /> 
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="github-btn"
                    aria-label={`View GitHub repository for ${project.title}`}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FiGithub /> 
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Project Modal */}
        {isModalOpen && (
          <motion.div 
            className="project-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div 
              className="modal-content"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="modal-close" onClick={closeModal} aria-label="Close modal">
                &times;
              </button>
              
              <div className="modal-navigation">
                <button 
                  className="nav-btn prev" 
                  onClick={() => navigateProject('prev')}
                  aria-label="Previous project"
                >
                  <FiChevronLeft />
                </button>
                <button 
                  className="nav-btn next" 
                  onClick={() => navigateProject('next')}
                  aria-label="Next project"
                >
                  <FiChevronRight />
                </button>
              </div>
              
              <div className="modal-body">
                <div className="modal-image">
                  <img 
                    src={projects[currentProject].screenshot} 
                    alt={projects[currentProject].title} 
                  />
                </div>
                
                <div className="modal-details">
                  <h2>{projects[currentProject].title}</h2>
                  <p>{projects[currentProject].description}</p>
                  
                  <div className="modal-technologies">
                    <h4>Technologies Used:</h4>
                    <div className="tech-list">
                      {projects[currentProject].technologies.map((tech, i) => (
                        <span key={i} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="modal-links">
                    <a
                      href={projects[currentProject].liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="live-btn"
                    >
                      <FiExternalLink /> View Live Project
                    </a>
                    <a
                      href={projects[currentProject].githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="github-btn"
                    >
                      <FiGithub /> View Source Code
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}

export default Projects;