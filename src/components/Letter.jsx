import React, { useState } from 'react';
import ConfirmationDialog from './ConfirmationDialog';
import './Letter.css';

const Letter = ({ onClose }) => {
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleCloseClick = () => {
    setShowConfirmation(true);
  };

  const handleConfirmation = (confirmed) => {
    setShowConfirmation(false);
    if (confirmed) {
      onClose();
    }
  };

  return (
    <>
      <div className="letter-container">
        <div className="letter">
          <button className="close-button" onClick={handleCloseClick}>
            ×
          </button>
          
          <div className="letter-content">
            {/* Girlfriend's Image Section */}
            <div className="girlfriend-image-section">
              <img 
                src="src/gf.jpg" 
                alt="My Beautiful Girlfriend" 
                className="girlfriend-image"
              />
              <div className="image-caption">To the most beautiful person in my life 💖</div>
            </div>
            
            <div className="letter-header">
              <h2>To My Dearest Love,</h2>
            </div>
            
            <div className="letter-body">
              <p>
                Happy Birthday to the most amazing person in my life! 🎉
              </p>
              
              <p>
                On this special day, I want you to know how much you mean to me. 
                Every moment with you is like a beautiful dream come true. 
                Your smile lights up my world, and your love fills my heart with joy.
              </p>
              
              <p>
                Looking at your beautiful face reminds me how lucky I am to have you. 
                You're not just my girlfriend; you're my best friend, my partner, 
                and my greatest blessing.
              </p>
              
              <p>
                I am so grateful for every laugh we've shared, every memory we've created, 
                and every moment we've spent together. You make everything better just by being you.
              </p>
              
              <p>
                May this year bring you all the happiness, success, and love you deserve. 
                I can't wait to create more beautiful memories with you.
              </p>
              
              <p className="signature">
                With all my love,<br />
                Forever yours... 💖
              </p>
            </div>
          </div>
        </div>
      </div>

      {showConfirmation && (
        <ConfirmationDialog onConfirm={handleConfirmation} />
      )}
    </>
  );
};

export default Letter;