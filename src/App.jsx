import React from 'react';
import { BrowserRouter, Routes, Route, NavLink, Link } from 'react-router-dom';
import {
  Home as HomeIcon,
  UserCheck,
  BookOpen,
  ListChecks,
  Briefcase,
  Terminal,
  MessageSquare,
} from 'lucide-react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaGoogle } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

import './App.css'; 
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import EduExp from './pages/EduExp';
import Spec from './pages/Spec';
import Project from './pages/Projects';
import Skill from './pages/Skill';
import ContactMe from './pages/ContactMe';

// การ์ดโปรไฟล์ด้านซ้าย
const ProfileSidebar = () => {
  return (
    <aside className="profile-card">
      <div className="profile-header">
        <span className="text-accent">A</span>iRiN H.
      </div>

      <div className="profile-avatar-box">
        {/* วางไฟล์ ME.jpg ไว้ในโฟลเดอร์ public/ME.jpg */}
        <img
          src="/ME.jpg"
          alt="AiRiN Profile"
          className="profile-avatar-img"
        />
      </div>

      <div className="profile-id">STU ID: 6952D10018</div>
      <div className="profile-role">Fullstack Web Developer</div>

      <div className="social-links">
        <a href="#facebook" className="social-icon-link" aria-label="Facebook">
          <FaFacebookF size={20} />
        </a>
        <a href="#x" className="social-icon-link" aria-label="X">
          <FaXTwitter size={20} />
        </a>
        <a href="#instagram" className="social-icon-link" aria-label="Instagram">
          <FaInstagram size={22} />
        </a>
        <a href="#linkedin" className="social-icon-link" aria-label="LinkedIn">
          <FaLinkedinIn size={21} />
        </a>
        <a href="#google" className="social-icon-link" aria-label="Google">
          <FaGoogle size={20} />
        </a>
      </div>

      <Link to="/contact" className="hire-btn">
        HIRE ME !
      </Link>
    </aside>
  );
};

// แถบเมนูด้านข้างขวา (ลิงก์ไปครบทั้ง 7 หน้าด้วย NavLink)
const RightNavSidebar = () => {
  const navItems = [
    { path: '/', label: 'Home', icon: HomeIcon },
    { path: '/about', label: 'About Me', icon: UserCheck },
    { path: '/eduexp', label: 'Education & Experience', icon: BookOpen },
    { path: '/spec', label: 'Specialization', icon: ListChecks },
    { path: '/project', label: 'Projects', icon: Briefcase },
    { path: '/skill', label: 'Skills', icon: Terminal },
    { path: '/contact', label: 'Contact Me', icon: MessageSquare },
  ];

  return (
    <nav className="right-sidebar" aria-label="Main Navigation">
      {navItems.map((item) => {
        const IconComponent = item.icon;
        return (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === '/'}
            title={item.label}
            aria-label={item.label}
            className={({ isActive }) =>
              `nav-item-link ${isActive ? 'active' : ''}`
            }
          >
            <IconComponent size={20} strokeWidth={1.75} />
          </NavLink>
        );
      })}
    </nav>
  );
};

export default function App() {
  return (
    <BrowserRouter>
      <div className="portfolio-wrapper">
        <div className="portfolio-container">
          <ProfileSidebar />

          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutMe />} />
              <Route path="/eduexp" element={<EduExp />} />
              <Route path="/spec" element={<Spec />} />
              <Route path="/project" element={<Project />} />
              <Route path="/skill" element={<Skill />} />
              <Route path="/contact" element={<ContactMe />} />
            </Routes>
          </main>
        </div>

        <RightNavSidebar />
      </div>
    </BrowserRouter>
  );
}
