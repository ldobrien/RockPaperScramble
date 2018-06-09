import React from 'react';
import Arena from './Arena';
import Circle from './Circle';
import PropTypes from 'prop-types';

const Canvas = (props) => {
  const viewBox = [window.innerWidth / -2, window.innerHeight / -2, window.innerWidth, window.innerHeight];
  return (
    <svg
      id="RockPaperScramble"
      // preserveAspectRatio="xMaxYMax none"
      onMouseMove={props.trackMouse}
      viewBox={viewBox}
    >
      <Arena />
      <Circle position={props.x, props.y}/>

    </svg>
  );
};

Canvas.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  trackMouse: PropTypes.func.isRequired,
};

export default Canvas;