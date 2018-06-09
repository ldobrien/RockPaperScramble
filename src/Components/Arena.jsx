import React from 'react';
import PropTypes from 'prop-types';
import { pathFromBezierCurve } from '../utils/formulas';

const Arena = (props) => {
  const arenaStyle = {
    fill: '#30abef',
  };
  const arenaWidth = 100;
  const gameHeight = 100;
  const transform = `rotate(${props.rotation}, 0, 0)`;
  return (
    <g transform={transform}>
    <rect
      style={arenaStyle}
      x={arenaWidth / -2}
      y={gameHeight / -2}
      width={arenaWidth}
      height={gameHeight}
    />
    </g>
  );
};

Arena.propTypes = {
  rotation: PropTypes.number.isRequired,
};

export default Arena;