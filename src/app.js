import React, { useState } from 'react';

const App = () => {
  return (
    <main>
      <div className="left">
        <h1>
          Get <span>insights</span> that help your business grow.
        </h1>
        <p>
          Discover the benefits of data analytics and make better decisions
          regarding revenue, customer experience and overall efficiency.
        </p>
        <div className="metrics">
          <div className="metric first">
            <h2>10k+</h2>
            <h3>Companies</h3>
          </div>
          <div className="metric">
            <h2>314</h2>
            <h3>Templates</h3>
          </div>
          <div className="metric">
            <h2>12M+</h2>
            <h3>Queries</h3>
          </div>
        </div>
      </div>
      <div className="right">
        <img alt="happy people" />
      </div>
    </main>
  );
};

export default App;
