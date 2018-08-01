import React from 'react';
import PropTypes from 'prop-types';

const Circle = (props) => {
	const circleStyle = {
    fill: 'red',
   
  };
  return (
    <circle
      style={circleStyle}
      cx={props.position.x}
      cy={props.position.y}
      r={props.radius.r}
    />
  );
};

Circle.propTypes = {
  position: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired
  }).isRequired,
};


export default Circle;