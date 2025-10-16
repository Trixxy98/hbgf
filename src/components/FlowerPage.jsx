import React, { useState, useRef } from 'react';
import './FlowerPage.css';

const FlowerPage = () => {
  const [showVideo, setShowVideo] = useState(false);
  const videoRef = useRef(null);

  const handleFlowerClick = () => {
    setShowVideo(true);
  };

  const handleCloseVideo = () => {
    setShowVideo(false);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <div className="flower-page">
      <div className="flower-content">
        <h1 className="flower-title">For You, My Only Kesayangan 💐</h1>
        <p className="flower-instruction">Click the flowers to reveal a special message!</p>
        
        <div 
          className="flower-image bounce"
          onClick={handleFlowerClick}
        >
          💐
        </div>
      </div>

      {showVideo && (
        <div className="video-overlay">
          <div className="video-container">
            <button className="video-close-button" onClick={handleCloseVideo}>
              ×
            </button>
            <video 
              ref={videoRef}
              controls 
              autoPlay 
              className="video-player"
            >
              <source src="src/test.mov" type="video/mp4" />
              
              Your browser does not support the video tag.
            </video>
            <p className="video-message">A special message just for you! 💕</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default FlowerPage;