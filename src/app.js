import React, { useState } from 'react';

const App = () => {
  return (
    <main>
      <section className="stats-card">
        <div className="stats-card__hero-info">
          <div className="stats-card__hero-info__description">
            <h1>
              Get <span>insights</span> that help your business grow.
            </h1>
            <p>
              Discover the benefits of data analytics and make better decisions
              regarding revenue, customer experience, and overall efficiency.
            </p>
          </div>
          <div className="stats-card__hero-info__data">
            <div className="stats-card__hero-info__data__box">
              <p>10k+</p>
              <p>companies</p>
            </div>
            <div className="stats-card__hero-info__data__box">
              <p>314</p>
              <p>templates</p>
            </div>
            <div className="stats-card__hero-info__data__box">
              <p>12M+</p>
              <p>queries</p>
            </div>
          </div>
        </div>
        <div className="stats-card__hero-img">
          <img alt="" />
        </div>
      </section>
    </main>
  );
};

export default App;
