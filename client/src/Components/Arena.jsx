import React from 'react';

const Arena = () => {
  const arenaStyle = {
    fill: '#e1bee7',
  };
  const arenaWidth = innerWidth;
  const gameHeight = innerHeight;
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