import React from 'react';
import { Code2, Globe, PenTool } from 'lucide-react';

export default function Spec() {
  const specializations = [
    {
      title: 'Front end-developer',
      description:
        'Front-end is where I weave code and creativity to shape captivating and user-centric digital experiences.',
      icon: Code2,
    },
    {
      title: 'UI/UX Designer',
      description:
        'UI/UX design is my palette for blending art and user psychology into seamless and delightful interactions.',
      icon: Globe,
    },
    {
      title: 'Graphic designer',
      description:
        'As a graphic designer, I transform ideas into visually striking and impactful designs.',
      icon: PenTool,
    },
  ];

  return (
    <section className="spec-section">
      <h1 className="spec-heading">
        My <span className="text-accent">Specializations</span>
      </h1>

      <div className="spec-list">
        {specializations.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <div key={index} className="spec-card">
              <div className="spec-card-header">
                <h3 className="spec-card-title">{item.title}</h3>
                <span className="spec-card-icon">
                  <IconComponent size={20} strokeWidth={1.75} />
                </span>
              </div>
              <p className="spec-card-desc">{item.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}