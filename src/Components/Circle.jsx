import React from 'react';
import PropTypes from 'prop-types';

const Circle = (props) => {
	const circleStyle = {
    fill: 'pink',
  };
  const transform = `translate(${props.x},${props.y})`;
  // const transform = `translate(10,100)`;
  return (
  	<g transform={transform}>

    <circle
      style={circleStyle}
      x={props.x}
      y={props.y}
      r={20}
    /></g>
  );
};

// Circle.propTypes = {
//   translate: PropTypes.number.isRequired,
// };

export default Circle;