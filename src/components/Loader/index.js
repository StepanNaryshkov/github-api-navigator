import React from 'react';

const Loader = () => {
  return (
    <div className="progress-bar-preloader">
      <div className="progress-bar-preloader__progress-bar">
        <div className="progress-bar-preloader__loaded" />
      </div>
    </div>
  );
};

export default Loader;
