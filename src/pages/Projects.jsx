import React from 'react';

export default function Project() {
  return (
    <section className="project-section">
      <h1 className="project-heading">
        Featured <span className="text-accent">Projects</span>
      </h1>

      <h2 className="project-title">
        Manage Task App - fullstack web development
      </h2>

      <p className="project-description">
        Here&apos;s my latest project built with Next.js and Laravel, using
        TailwindCSS on the front-end. Watch the video to see the responsive
        landing page in action!
      </p>

      <div className="project-preview-wrapper">
        <div className="project-image-box">
          {/* วางไฟล์ image5.png ไว้ในโฟลเดอร์ public/image5.png */}
          <img
            src="/image5.png"
            alt="Manage Task App Project Preview"
            className="project-preview-img"
          />
        </div>
      </div>
    </section>
  );
}