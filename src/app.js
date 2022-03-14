import React, { useState } from 'react';

const App = () => {
  return (
    <main>
      <div className="card">
        <div className="left-panel">
          <h1>
            Get <span>insights</span> that help your business grow.
          </h1>
          <p className="left-panel__description">
            Discover the benefits of data analytics and make better decisions
            regarding revenue, customer experience, and overall efficiency.
          </p>
          <div className="left-panel__metrics-container">
            <div className="left-panel__metrics-container__metric first">
              <p className="left-panel__metrics-container__metric__stats">
                10k+
              </p>
              <p className="left-panel__metrics-container__metric__heading">
                Companies
              </p>
            </div>
            <div className="left-panel__metrics-container__metric">
              <p className="left-panel__metrics-container__metric__stats">
                314
              </p>
              <p className="left-panel__metrics-container__metric__heading">
                Templates
              </p>
            </div>
            <div className="left-panel__metrics-container__metric last">
              <p className="left-panel__metrics-container__metric__stats">
                12M+
              </p>
              <p className="left-panel__metrics-container__metric__heading">
                Queries
              </p>
            </div>
          </div>
        </div>
        <div className="right-panel">
          <img alt="" className="right-panel__image" />
        </div>
      </div>
    </main>
  );
};

export default App;
