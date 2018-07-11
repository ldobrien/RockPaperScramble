
import React from 'react';
import Arena from './Arena.jsx';
import Circle from './Circle.jsx';
import PropTypes from 'prop-types';
// import Login from './Login.jsx';

import CurrentScore from './CurrentScore.jsx';
import FlyingObject from './FlyingObject.jsx';
import Heart from './Heart.jsx';
import StartGame from './StartGame.jsx';
import Title from './Title.jsx';
import Leaderboard from './LeaderBoard.jsx';
import Rank from './Rank.jsx';

const opponents = 50;
const width = window.innerWidth;
const height = window.innerHeight;
// let circles = [];
// function addOpponents(){
//       for(var i = 0; i < 50; i++){
//         circles.push({position:{
//           x:Math.random() * (2*width) - width, 
//           y:Math.random() * (2*height) - height},
//           r:15})
//       }
//     }

// addOpponents();
// var xhttp = new XMLHttpRequest();
// var leaderboard;
// xhttp.onreadystatechange = function(){
//   if(this.readyState == 4 && this.status == 200){
//     leaderboard = JSON.parse(this.response);
//   }
// };
// xhttp.open("GET", "/getusers", true);
// xhttp.send();
// const db = mongoose;
// var cursor = db.collection('users').find({});


const Canvas = (props) => {
  const gameHeight = 1200;
  const viewBox = [window.innerWidth / -2, 600 - gameHeight, window.innerWidth, gameHeight];
  const leaderboard = [
    { id: 'd4', maxScore: 82, name: 'Ado Kukic', },
    { id: 'a1', maxScore: 235, name: 'Bruno Krebs', },
    { id: 'c3', maxScore: 99, name: 'Diego Poza', },
    { id: 'b2', maxScore: 129, name: 'Jeana Tahnk', },
    { id: 'e5', maxScore: 34, name: 'Jenny Obrien', },
    { id: 'f6', maxScore: 153, name: 'Kim Maida', },
    { id: 'g7', maxScore: 55, name: 'Luke Oliff', },
    { id: 'h8', maxScore: 146, name: 'Sebastián Peyrott', },
  ];
  // const viewBox = [width / -2, height / -2, width, height];
    // circles is the array of circle objects
    // console.log(props);
    // console.log(cursor);
    // console.log("X: " + props.x);
    // console.log("radius: " + props.r);
    // const colors = ['red', 'green', 'blue'];
    // const color = colors[Math.floor(Math.random() * colors.length)];
  return (
    <svg
      id="RockPaperScramble"
      // preserveAspectRatio="xMaxYMax none"
      onMouseMove={props.trackMouse}
      viewBox={viewBox}
    >
    <defs>
      <filter id="shadow">
        <feDropShadow dx="1" dy="1" stdDeviation="2" />
      </filter>
    </defs>
      
     <Arena position={{x: props.x, y: props.y}}/> 

     <Circle position={{x: props.x, y: props.y}} radius={{r: props.r}}/>

     <CurrentScore score={15}/>
      <Heart position={{x: -600, y: 35}} />
      
      { ! props.gameState.started &&
      <g>
          <StartGame onClick={() => props.startGame()} />
          <Title />
        <Leaderboard currentPlayer={leaderboard[3]} leaderboard={leaderboard} />
      </g>
      }

      {props.gameState.flyingObjects.map(flyingObject => (
        <FlyingObject
          key={flyingObject.id}
          position={flyingObject.position}
          color={flyingObject.color}
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
      color: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    })).isRequired,
  }).isRequired,
  trackMouse: PropTypes.func.isRequired,
  startGame: PropTypes.func.isRequired,
};



export default Canvas;
// export {circles};
