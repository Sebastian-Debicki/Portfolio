import React from 'react';

const Spinner = () => {
  return (
    <div className="spinner">
      <div className="spinner__box">
        <p className="spinner__text-main">Loading...</p>
        <p className="spinner__text-sub">Dębicki Portfolio</p>
        <div className="spinner__progress-bar"></div>
      </div>
    </div>
  );
};

export default Spinner;
