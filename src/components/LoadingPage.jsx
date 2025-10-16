import React, { useState, useEffect } from 'react';
import './LoadingPage.css';

const LoadingPage = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 1;
      });
    }, 30);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className="loading-page">
      <div className="loading-content">
        <h1 className="loading-title">Surprise Loading...</h1>
        <div className="loading-bar-container">
          <div 
            className="loading-bar" 
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <div className="loading-percentage">{progress}%</div>
        <div className="loading-message">
          {progress < 30 && "Getting things ready..."}
          {progress >= 30 && progress < 60 && "Preparing your surprise..."}
          {progress >= 60 && progress < 90 && "Almost there..."}
          {progress >= 90 && "Ready!"}
        </div>
      </div>
    </div>
  );
};

export default LoadingPage;