import React, { useState } from 'react';
import './ConfirmationDialog.css';

const ConfirmationDialog = ({ onConfirm }) => {
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });

  const handleNoButtonHover = () => {
    const x = Math.random() * 200 - 100;
    const y = Math.random() * 200 - 100;
    setNoButtonPosition({ x, y });
  };

  const handleYesClick = () => {
    onConfirm(true);
  };

  const handleNoClick = () => {
    onConfirm(false);
  };

  return (
    <div className="dialog-overlay">
      <div className="dialog">
        <h3>Do you want to continue?</h3>
        <p>Say yes to see the next surprise! 💝</p>
        
        <div className="dialog-buttons">
          <button 
            className="yes-button" 
            onClick={handleYesClick}
          >
            Yes! 💖
          </button>
          <button 
            className="no-button"
            onClick={handleNoClick}
            onMouseEnter={handleNoButtonHover}
            style={{
              transform: `translate(${noButtonPosition.x}px, ${noButtonPosition.y}px)`
            }}
          >
            No 😢
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationDialog;