import React from 'react';

const Arena = () => {
  const arenaStyle = {
    fill: '#30abef',
  };
  const arenaWidth = 5000;
  const gameHeight = 1200;
  return (
    <rect
      style={arenaStyle}
      x={arenaWidth / -2}
      y={gameHeight / -2}
      width={arenaWidth}
      height={gameHeight}
    />
  );
};

export default Arena;