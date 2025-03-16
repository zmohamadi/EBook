import React from 'react';
// import './Loading.css';

const LoadingSppiner = () => {
//   return <p>در حال بارگیری...</p>;
  return (
    <div className="loading-container">
      <div className="loading-spinner">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
      <div className="loading-text">در حال بارگیری...</div>
    </div>
  );
};

export default LoadingSppiner;