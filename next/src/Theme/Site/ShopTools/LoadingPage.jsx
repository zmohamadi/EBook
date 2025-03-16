import React from 'react';

const LoadingPage = () => {
  return (
    <div className="loading-container">
      <div className="loading-circle">
        <div className="circle1"></div>
        <div className="circle2"></div>
        <div className="circle3"></div>
      </div>
      <div className="loading-text">در حال بارگیری...</div>
    </div>
  );
};

export default LoadingPage;