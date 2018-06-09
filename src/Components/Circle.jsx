import React from 'react';
import PropTypes from 'prop-types';

const Circle = (props) => {
	const circleStyle = {
    fill: 'pink',
  };
  return (
    <circle
      style={circleStyle}
      x={props.x}
      y={props.y}
      r={20}
    />
  );
};


export default Circle;