import React from 'react';
import PropTypes from 'prop-types';
import { pathFromBezierCurve } from '../utils/formulas';

const Arena = (props) => {
  const arenaStyle = {
    fill: '#e1bee7',
  };
  const arenaWidth = 4000;
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

Arena.propTypes = {
};

export default Arena;