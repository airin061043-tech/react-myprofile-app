import React from 'react';

export default function Home() {
  return (
    <section className="home-section">
      <p className="home-subtitle">
        Lets Work <span className="text-accent">Together !</span>
      </p>

      <h1 className="home-title">
        Hi From <span className="text-accent">Chanintorn</span> ,
        <br />
        Interactive Designer &amp; Fullstack
        <br />
        Web Developer
      </h1>

      <p className="home-description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto maxime
        tempora at neque a adipisci nulla voluptatem? Mollitia, officiis,
        architecto earum voluptates obcaecati corrupti voluptatem .
      </p>

      <div className="stats-row">
        <div className="stat-item">
          <span className="stat-number">3+</span>
          <span className="stat-label">
            Years of
            <br />
            Experience
          </span>
        </div>

        <div className="stat-item">
          <span className="stat-number">10+</span>
          <span className="stat-label">
            Projects
            <br />
            Completed
          </span>
        </div>
      </div>
    </section>
  );
}