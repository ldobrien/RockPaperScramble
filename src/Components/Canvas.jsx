
import React from 'react';
import Arena from './Arena';

const Canvas = () => {
  const viewBox = [window.innerWidth / -2, window.innerHeight / -2, window.innerWidth, window.innerHeight];
  return (
    <svg
      id="RockPaperScramble"
      preserveAspectRatio="xMaxYMax none"
      viewBox={viewBox}
    >
      <Arena />
      <circle cx={0} cy={0} r={50} />
    </svg>
  );
};
export default Canvas;

