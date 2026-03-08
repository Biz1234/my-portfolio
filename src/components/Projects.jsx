import { motion } from 'framer-motion';
import { useState } from 'react';
import '../styles/Projects.css';
import screenshot1 from '../assets/fitness.png';
import screenshot2 from '../assets/screenshot2.png';
import screenshot3 from '../assets/movie.png';
import screenshot4 from '../assets/city.png';
import screenshot5 from '../assets/store.png';
import screenshot6 from '../assets/Ethronics.png';
import screenshot7 from '../assets/job1.png';
import screenshot8 from '../assets/job2.png';
import screenshot9 from '../assets/job3.png';
import screenshot10 from '../assets/ethronics1.png';


// Icons for enhanced UI
import {
  FiExternalLink,
  FiGithub,
  FiChevronRight,
  FiChevronLeft,
  FiImage
} from 'react-icons/fi';

// Project data with additional fields for enhanced UI
const projects = [
  {
    id: 1,
    title: 'Fitness Pro',
    description: 'A modern fitness web app built with React (Vite) and TailwindCSS, featuring workout tracking, progress monitoring, and a responsive design for all devices.',
    screenshot: [screenshot1],
    liveLink: 'https://68ba9a261f1c8bda9752b83c--fitp.netlify.app/',
    githubLink: 'https://github.com/Biz1234/job-search-platform',
    technologies: ['React', 'Vite', 'TailwindCSS'],
    featured: true
  },
  {
    id: 2,
    title: 'Boza Movie',
    description: 'A movie search web application is developed with React and Vite. It fetches data from a movie API to provide details like titles, posters, release dates, and ratings.',
    screenshot: [screenshot3],
    liveLink: 'https://bozamovie.netlify.app/',
    githubLink: 'https://github.com/Biz1234/react-movie/tree/main/frontend',
    technologies: ['React', 'Vite', 'API Integration'],
    featured: false
  },
  {
    id: 3,
    title: 'Bizualem Car Rental',
    description: 'This car rental landing page was built using React and Vite, featuring a sleek, responsive design optimized for both desktop and mobile users.',
    screenshot: [screenshot2],
    liveLink: 'https://car-rental-72r1.onrender.com/',
    githubLink: 'https://github.com/Biz1234/car-rental',
    technologies: ['React', 'Vite', 'Responsive Design'],
    featured: false
  },
  {
    id: 4,
    title: 'Smart City',
    description: 'This Smart City web application is built with the MERN stack. It enables citizens to report issues, request city services, and stay updated on community improvements.',
    screenshot: [screenshot4],
    liveLink: 'https://smartcity-1-lkue.onrender.com/',
    githubLink: 'https://github.com/Biz1234/smartcity',
    technologies: ['MERN Stack', 'MongoDB', 'Express', 'React', 'Node.js'],
    featured: true
  },

 {
    id: 5,
    title: 'E-Store',
    description: 'This E-Store Shopping platform is developed using MongoDB, Express.js, React, and Node.js. Users can browse products, filter by categories, add items to the cart, and make purchases. Admins can manage products, view orders, and track sales. The app features a responsive UI, secure authentication, and smooth user experience.',
    screenshot: [screenshot5],
    liveLink: 'https://e-commerce-1-p0ho.onrender.com/',
    githubLink: 'https://github.com/Biz1234/CodeAlpha_E-commerce',
    technologies: ['MERN Stack', 'MongoDB', 'Express', 'React', 'Node.js','tailwindcss'],
    featured: true
  },
   {
    id: 6,
    title: 'Learner Portal',
    description: 'Role-based learner Portal web platform developed at internship time lines.Insructor create group, add learners,share file ,announcemnt,assignment,also start discussion post.Adminstrator manage group,announcemnt,files,users and all other role of instructor.The app features a responsive UI, secure authentication, and smooth user experience.',
    screenshot: [screenshot6,screenshot10],
    liveLink: 'https://Learner.netlify.app/',
    githubLink: 'https://github.com/Ethronics/student-portal',
    technologies: ['MERN Stack', 'MongoDB', 'Express', 'React', 'Node.js', 'shadcn', 'tailwindcss'],
    featured: true
  },
  
{
  id: 7,
    title: 'job Tracker',
    description: 'A comprehensive job application tracking platform built with Next.js and TypeScript. Features include application status tracking, interview scheduling, resume management, and analytics dashboard.',
    screenshot: [screenshot7, screenshot8, screenshot9],
    liveLink: 'https://bozajob.app/',
    githubLink: 'https://github.com/Biz1234/next-job-tracker',
    technologies: ['Next.js', 'MongoDB', 'Typescript', 'tailwindcss'],
    featured: true
  },


];






function Projects() {
  const [currentProject, setCurrentProject] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openProjectModal = (index) => {
    setCurrentProject(index);
    setCurrentImage(0);
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

    // Always start from first image when switching projects.
    setCurrentImage(0);
  };

  const navigateImage = (direction) => {
    const totalImages = projects[currentProject].screenshot.length;

    if (direction === 'next') {
      setCurrentImage((prev) => (prev + 1) % totalImages);
    } else {
      setCurrentImage((prev) => (prev - 1 + totalImages) % totalImages);
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
         recent projects showcasing my skills 
        </motion.p>

        <motion.div 
          className="project-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className={`project-card ${project.featured ? 'featured' : ''}`}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              onClick={() => openProjectModal(index)}
            >
              <div className="project-image-container">
                <img
                  src={project.screenshot[0]}
                  alt={`Screenshot of ${project.title} project`}
                  className="project-screenshot"
                  loading="lazy"
                />
                {project.screenshot.length > 1 && (
                  <div className="image-count-badge" aria-label={`${project.screenshot.length} images available`}>
                    <FiImage />
                    <span>{project.screenshot.length}</span>
                  </div>
                )}
                <div className="project-overlay">
                  <div className="project-actions">
                    <button className="project-action-btn" aria-label="View project details">
                      View 
                    </button>
                  </div>
                </div>
                {project.featured}
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
                  {projects[currentProject].screenshot.length > 1 && (
                    <>
                      <button
                        className="modal-image-nav prev"
                        onClick={() => navigateImage('prev')}
                        aria-label="Previous image"
                      >
                        <FiChevronLeft />
                      </button>
                      <button
                        className="modal-image-nav next"
                        onClick={() => navigateImage('next')}
                        aria-label="Next image"
                      >
                        <FiChevronRight />
                      </button>
                      <div className="modal-image-indicator">
                        {currentImage + 1} / {projects[currentProject].screenshot.length}
                      </div>
                    </>
                  )}
                  <img 
                    src={projects[currentProject].screenshot[currentImage]}
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
                      <FiExternalLink />Live 
                    </a>
                    <a
                      href={projects[currentProject].githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="github-btn"
                    >
                      <FiGithub />Source Code
                    </a>
                  </div>

                  {projects[currentProject].screenshot.length > 1 && (
                    <div className="modal-thumbnails" aria-label="Project image thumbnails">
                      {projects[currentProject].screenshot.map((image, imageIndex) => (
                        <button
                          key={`${projects[currentProject].id}-${imageIndex}`}
                          className={`thumbnail-btn ${currentImage === imageIndex ? 'active' : ''}`}
                          onClick={() => setCurrentImage(imageIndex)}
                          aria-label={`View image ${imageIndex + 1}`}
                        >
                          <img src={image} alt={`${projects[currentProject].title} ${imageIndex + 1}`} />
                        </button>
                      ))}
                    </div>
                  )}
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