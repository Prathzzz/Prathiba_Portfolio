import React from 'react';
import './ButtonSpace.scss';

const ButtonSpace = () => {
  return (
    <div className="btn-container">
      <button type="submit" name="space-button" id="space-btn">
        <span>What we do?</span>
        <span className="moon"><span className="moon1"></span></span>
        <span className="planet"></span>
        {[...Array(34)].map((_, index) => (
          <div
            className="star"
            key={index}
            style={{
              left: `${Math.random() * 200}px`,
              top: `${Math.random() * 60}px`,
              animationDelay: `${Math.random() * 5}s`,
              transform: `scale(${Math.random() * 2})`,
            }}
          />
        ))}
      </button>
    </div>
  );
};

export default ButtonSpace;
