import React from 'react';
import { FaReact, FaFigma, FaCss3Alt, FaGithub } from 'react-icons/fa';
import { SiNextdotjs } from 'react-icons/si';
import { IoLogoJavascript } from 'react-icons/io5';

export default function Skill() {
  const skills = [
    {
      name: 'React',
      percent: '60%',
      highlight: true,
      icon: <FaReact size={56} color="#61dafb" />,
    },
    {
      name: 'Figma',
      percent: '85%',
      highlight: false,
      icon: <FaFigma size={50} color="#ffffff" />,
    },
    {
      name: 'HTML/CSS',
      percent: '80%',
      highlight: false,
      icon: <FaCss3Alt size={54} color="#ffffff" />,
    },
    {
      name: 'Next.js',
      percent: '80%',
      highlight: false,
      icon: <SiNextdotjs size={52} color="#ffffff" />,
    },
    {
      name: 'Java Script',
      percent: '60%',
      highlight: false,
      icon: <IoLogoJavascript size={52} color="#ffffff" />,
    },
    {
      name: 'GitHub',
      percent: '90%',
      highlight: false,
      icon: <FaGithub size={52} color="#ffffff" />,
    },
  ];

  return (
    <section className="skill-section">
      <h1 className="skill-heading">
        My <span className="text-accent">Skills</span>
      </h1>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            <div className={`skill-pill ${skill.highlight ? 'highlight' : ''}`}>
              <div className="skill-icon-box">{skill.icon}</div>
              <span className="skill-percent">{skill.percent}</span>
            </div>
            <span className="skill-name">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}