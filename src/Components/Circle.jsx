import React from 'react';

const Circle = () => {
	const circleStyle = {
    fill: 'pink',
  };
  return (
    <circle
      style={circleStyle}
      // x={arenaWidth / -2}
      // y={gameHeight / -2}
      r={10}
    />
  );
}

export default Circle;