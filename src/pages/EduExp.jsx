import React from 'react';

export default function EduExp() {
  return (
    <section className="eduexp-section">
      <h1 className="eduexp-heading">
        Education &amp; <span className="text-accent">Experience</span>
      </h1>

      <div className="eduexp-list">
        <div className="eduexp-group">
          <p className="eduexp-period active">2026 - Present</p>
          <h3 className="eduexp-role">UI/UX Designer</h3>
          <p className="eduexp-org indented">Freelance</p>
          <h3 className="eduexp-role">Fullstack Web Developer</h3>
          <p className="eduexp-org indented">Freelance</p>
        </div>

        <div className="eduexp-group">
          <p className="eduexp-period">2026</p>
          <h3 className="eduexp-role">
            Currently pursuing a bachelor's degree in Digital Technology and Innovation
          </h3>
          <p className="eduexp-org">Southeast Asia University</p>
        </div>

        <div className="eduexp-group">
          <p className="eduexp-period">2012-2017</p>
          <h3 className="eduexp-role">High school</h3>
          <p className="eduexp-org">Sri Kranuan Wittayakhom School</p>
        </div>
      </div>
    </section>
  );
}
