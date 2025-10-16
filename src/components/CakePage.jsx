import React, { useState, useEffect } from 'react';
import Letter from './Letter';
import './CakePage.css';

const CakePage = ({ onComplete }) => {
  const [showLetter, setShowLetter] = useState(false);

  useEffect(() => {
    // Add wind cursor to body
    document.body.classList.add('wind-cursor');
    
    return () => {
      document.body.classList.remove('wind-cursor');
    };
  }, []);

  const handleCakeClick = () => {
    setShowLetter(true);
  };

  const handleLetterClose = () => {
    onComplete();
  };

  return (
    <div className={`cake-page ${showLetter ? 'blur-background' : ''}`}>
      {!showLetter ? (
        <div className="cake-content">
          <h1 className="birthday-title">HAPPY BIRTHDAY!</h1>
          <p className="instruction">Please blow the cake</p>
          <div 
            className="cake-image bounce neon-glow"
            onClick={handleCakeClick}
          >
            🎂
          </div>
        </div>
      ) : (
        <Letter onClose={handleLetterClose} />
      )}
    </div>
  );
};

export default CakePage;