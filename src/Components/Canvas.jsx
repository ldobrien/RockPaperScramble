
import React from 'react';
import Arena from './Arena';
import Circle from './Circle';
import PropTypes from 'prop-types';
import Login from './Login';
import { signIn } from 'auth0-web';
import CurrentScore from './CurrentScore';
import FlyingObject from './FlyingObject';
import Heart from './Heart';
import StartGame from './StartGame';
import Title from './Title';

const opponents = 50;
const width = window.innerWidth;
const height = window.innerHeight;
let circles = [];
function addOpponents(){
      for(var i = 0; i < 50; i++){
        circles.push({position:{
          x:Math.random() * (2*width) - width, 
          y:Math.random() * (2*height) - height},
          r:15})
      }
    }

addOpponents();

const Canvas = (props) => {
  const gameHeight = 1200;
  const viewBox = [window.innerWidth / -2, 600 - gameHeight, window.innerWidth, gameHeight];
  // const viewBox = [width / -2, height / -2, width, height];
    // circles is the array of circle objects
    // console.log(props);
    
  return (
    <svg
      id="RockPaperScramble"
      preserveAspectRatio="xMaxYMax none"
      onMouseMove={props.trackMouse}
      viewBox={viewBox}
    >
    <defs>
      <filter id="shadow">
        <feDropShadow dx="1" dy="1" stdDeviation="2" />
      </filter>
    </defs>
      
     <Arena/> 

     <Circle position={{x: props.x, y: props.y}} radius={{r: props.r}}/>
     <CurrentScore score={15}/>
      <Heart position={{x: -600, y: 35}} />

      <StartGame onClick={() => console.log('RockPaperScramble')} />
      <Title />

      { ! props.gameState.started &&
        <g>
          <StartGame onClick={() => props.startGame()} />
          <Title />
        </g>
      }

      { props.gameState.started &&
        <g>

        </g>
      }
      {props.gameState.flyingObjects.map(flyingObject => (
        <FlyingObject
          key={flyingObject.id}
          position={flyingObject.position}
        />
      ))}
    </svg>
  );
};

Canvas.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  gameState: PropTypes.shape({
    started: PropTypes.bool.isRequired,
    kills: PropTypes.number.isRequired,
    lives: PropTypes.number.isRequired,
  flyingObjects: PropTypes.arrayOf(PropTypes.shape({
      position: PropTypes.shape({
        x: PropTypes.number.isRequired,
        y: PropTypes.number.isRequired
      }).isRequired,
      id: PropTypes.number.isRequired,
    })).isRequired,
  }).isRequired,
  trackMouse: PropTypes.func.isRequired,
  startGame: PropTypes.func.isRequired,
};



export default Canvas;
export {circles};
