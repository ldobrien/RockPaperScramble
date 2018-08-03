import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import { gameHeight } from '../utils/constants';

const moveVertically = keyframes`
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(${gameHeight}px);
  }
`;

const Move = styled.g`
  animation: ${moveVertically} 8s linear;
`;

const Opponents = props => (
  <Move>
    <FlyingObjectBase position={props.position} color={props.color}/>
  </Move>
);

const FlyingObjectBase = (props) => {
  if(props.color === "green"){
      return (
          <g>
              <ellipse
                  cx={props.position.x}
                  cy={props.position.y}
                  rx="10"
                  ry="10"
                  fill ={props.color}
                  stroke = 'black'
              />
              <text textAnchor="middle" x={props.position.x} y={props.position.y}>ROCK</text>
          </g>
      );
  }
    if(props.color === "yellow"){
        return (
            <g>
                <ellipse
                    cx={props.position.x}
                    cy={props.position.y}
                    rx="10"
                    ry="10"
                    fill ={props.color}
                    stroke = 'black'
                />
                <text textAnchor="middle" x={props.position.x} y={props.position.y}>PAPER</text>
            </g>
        );
    }
  return (
      <g>
    <ellipse
      cx={props.position.x}
      cy={props.position.y}
      rx="10"
      ry="10"
      fill ={props.color}
      stroke = 'black'
    />
        <text textAnchor="middle" x={props.position.x} y={props.position.y}>SCRAMBLE</text>
      </g>
  );
};

Opponents.propTypes = {
    position: PropTypes.shape({
        x: PropTypes.number.isRequired,
        y: PropTypes.number.isRequired
    }).isRequired,
    color: PropTypes.string.isRequired,
};

FlyingObjectBase.propTypes = {
  position: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired
  }).isRequired,
  color: PropTypes.string.isRequired,
};

export default Opponents;