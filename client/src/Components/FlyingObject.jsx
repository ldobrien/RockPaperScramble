import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import { gameHeight } from '../utils/constants';
import { gameWidth } from '../utils/constants';


const moveVertically = keyframes`
  0% {
    transform: translateY(0);
  }
  // 50%{
  //   transform: translate(${gameHeight}px,${gameWidth}px);
  // }
  100% {
    transform: translateY(${gameHeight}px);
  }
`;

const Move = styled.g`
  animation: ${moveVertically} 8s linear;
`;

const FlyingObject = props => (
  <Move>
    <FlyingObjectBase position={props.position} color={props.color}/>
  </Move>
);



FlyingObject.propTypes = {
  position: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired
  }).isRequired,
  color: PropTypes.string.isRequired,
};


const FlyingObjectBase = (props) => {
  return (
    <ellipse
      cx={props.position.x}
      cy={props.position.y}
      rx="10"
      ry="10"
      fill ={props.color}
      stroke = 'black'
    />
  );
};

FlyingObjectBase.propTypes = {
  position: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired
  }).isRequired,
  color: PropTypes.string.isRequired,
};

export default FlyingObject;