import { motion } from 'framer-motion';
import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaNodeJs, FaJava, FaGitAlt, FaGithub, FaServer, FaDatabase } from 'react-icons/fa';
import {
  SiTailwindcss,
  SiExpress,
  SiSpringboot,
  SiTypescript,
  SiNextdotjs,
  SiMongodb,
  SiPostgresql,
  SiSupabase,
  SiFirebase,
  SiDocker,
} from 'react-icons/si';
import '../styles/Skills.css';

function Skills() {
  const skillCategories = [
    {
      title: 'Front-End',
      skills: [
        { name: 'React.js', icon: <FaReact /> },
        { name: 'TypeScript', icon: <SiTypescript /> },
        { name: 'Next.js', icon: <SiNextdotjs /> },
        { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
        { name: 'JavaScript', icon: <FaJs /> },
        { name: 'HTML', icon: <FaHtml5 /> },
        { name: 'CSS', icon: <FaCss3Alt /> },
      ],
    },
    {
      title: 'Back-End',
      skills: [
        { name: 'Node.js', icon: <FaNodeJs /> },
        { name: 'MongoDB', icon: <SiMongodb /> },
        { name: 'Express', icon: <SiExpress /> },
        { name: 'Java', icon: <FaJava /> },
        { name: 'Spring Boot', icon: <SiSpringboot /> },
        { name: 'SQL', icon: <FaDatabase /> },
        { name: 'PostgreSQL', icon: <SiPostgresql /> },
      ],
    },
    {
      title: 'Tools & Tech',
      skills: [
        { name: 'Git', icon: <FaGitAlt /> },
        { name: 'GitHub', icon: <FaGithub /> },
        { name: 'Supabase', icon: <SiSupabase /> },
        { name: 'Firebase', icon: <SiFirebase /> },
        { name: 'Docker', icon: <SiDocker /> },
        { name: 'Deployment', icon: <FaServer /> },
      ],
    },
  ];

  return (
    <section id="skills" className="skills" aria-labelledby="skills-title">
      <motion.h2
        id="skills-title"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Skills
      </motion.h2>
      <div className="skills-container">
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.title}
            className="skill-category"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3>{category.title}</h3>
            <ul className="skills-list" role="list">
              {category.skills.map((skill) => (
                <motion.li
                  key={skill.name}
                  className="skill-item"
                  whileHover={{ scale: 1.05 }}
                  whileFocus={{ scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  role="listitem"
                  aria-label={`Skill: ${skill.name}`}
                >
                  {skill.icon && <span className="skill-icon">{skill.icon}</span>}
                  <span className="skill-name">{skill.name}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Skills;