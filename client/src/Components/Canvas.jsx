
import React from 'react';
import Arena from './Arena.jsx';
import Circle from './Circle.jsx';
import PropTypes from 'prop-types';
import DashboardPage from '../containers/DashboardPage.jsx';
// import Login from './Login.jsx';

import CurrentScore from './CurrentScore.jsx';
import FlyingObject from './FlyingObject.jsx';
//import Heart from './Heart.jsx';
import StartGame from './StartGame.jsx';
import Title from './Title.jsx';
import Leaderboard from './LeaderBoard.jsx';
import LoginPage from '../containers/LoginPage.jsx';
import Rank from './Rank.jsx';
import Auth from "../modules/Auth";
import Game from "../containers/game";



const opponents = 50;
const width = window.innerWidth;
const height = window.innerHeight;


const Canvas = (props) => {
  const gameHeight = 1200;
  const viewBox = [window.innerWidth / -2, 600 - gameHeight, window.innerWidth, gameHeight];
  const leaderboard = props.leaderboard;

  let lives = props.gameState.lives;

    if (lives === 0){
        var str = localStorage.getItem('email');
        var strNew = str.replace("%40","@");    
        console.log(strNew);

      let currScore = 0;
      fetch('/api/users/topscores/' + strNew, {
        method: 'GET',
        headers: { 'Authorization': `bearer ${Auth.getToken()}`,
        'Content-Type': 'application/json' }
      }) 
      .then(res => res.json())
      .then(json => {
        console.log("THE HIG JSON:", json);
        currScore = json
        console.log("DB SCORE:", currScore.maxScore);
        if (currScore.maxScore < props.score){
            fetch('/api/users/topscores/' + strNew, {
            method: 'PUT',
            headers: { 'Authorization': `bearer ${Auth.getToken()}`,
                'Content-Type': 'application/json' },
            body: JSON.stringify({
             
                score: props.score,
            })

        })
        .then(res => res.json());
        }
        });
        

    
        console.log("GAME SCORE:", props.score);



        return(
            <Leaderboard currentPlayer={leaderboard[3]} leaderboard={leaderboard} />
        );
    }
    else if (lives < 0){
        return(
            <Leaderboard currentPlayer={leaderboard[3]} leaderboard={leaderboard} />
        );
    }
    else{
      return (
        <svg
          id="RockPaperScramble"
      
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


         <CurrentScore score={props.score}/>
        

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
    }
};


Canvas.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
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
  email: PropTypes.string.isRequired
};



export default Canvas;

