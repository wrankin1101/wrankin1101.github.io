import React from 'react';

const RotatingIcons = ({ duration, icons}) => {
  const degreeWidth = 360 / icons.length;
  const offset = 11;
  const getRotation = (index) => (index * degreeWidth) - offset;
  return (
    <div className="circle-container">
      {icons.map((icon, index) => (
        <div key={index} className="circle-item" style={{ transform: `rotate(${getRotation(index)}deg)` }}>
          <div
            className="circle-icon"
            style={{
              '--starting-degree': `${-getRotation(index)}deg`,
              '--duration': `${duration}s`,
            }}
          >
            {icon}
          </div>
        </div>
      ))}
    </div>
  );
};

export default RotatingIcons;
