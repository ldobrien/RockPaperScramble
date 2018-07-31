
import React from 'react';
import Arena from './Arena.jsx';
import Circle from './Circle.jsx';
import PropTypes from 'prop-types';
import DashboardPage from '../containers/DashboardPage.jsx';
// import Login from './Login.jsx';

import CurrentScore from './CurrentScore.jsx';
import FlyingObject from './FlyingObject.jsx';
import Heart from './Heart.jsx';
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
  // console.log(lives);
  //   console.log(LoginPage.user.email);
    if (lives === 0){
        var str = localStorage.getItem('email');
        var strNew = str.replace("%40","@");    
        console.log(strNew);

      let currScore = 0;
      fetch('/api/users/currscores/' + strNew, {
        method: 'GET',
        headers: { 'Authorization': `bearer ${Auth.getToken()}`,
        'Content-Type': 'application/json' }
      }) 
      .then(res => res.json())
      .then(json => {
        console.log("THE HIG JSON:", json);
        currScore = json
        if (currScore.maxScore < props.score){
            fetch('/api/users/topscores/' + strNew /*localStorage.getItem('email')*/, {
            method: 'PUT',
            headers: { 'Authorization': `bearer ${Auth.getToken()}`,
                'Content-Type': 'application/json' },
            body: JSON.stringify({
                //email: localStorage.getItem('email'),
                // email: "sean@sean.com",
                score: props.score,
            })

        })
        .then(res => res.json());
        console.log("DB SCORE:", currScore.maxScore);
        }
        });
        

        console.log("CURR SCORE:", currScore.maxScore);
        console.log("GAME SCORE:", props.score);

      // if (props.score > currScore.maxScore) {
        
      // // call server to update score using
      //   console.log('stored email:', strNew /*localStorage.getItem('email')*/);
      // //   console.log('score', props.score);
      //   fetch('/api/users/topscores/' + strNew /*localStorage.getItem('email')*/, {
      //       method: 'PUT',
      //       headers: { 'Authorization': `bearer ${Auth.getToken()}`,
      //           'Content-Type': 'application/json' },
      //       body: JSON.stringify({
      //           //email: localStorage.getItem('email'),
      //           // email: "sean@sean.com",
      //           score: props.score,
      //       })

      //   })
      //   .then(res => res.json());
      // } 

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


         <CurrentScore score={props.score}/>
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
    }
};

// LoginPage.Proptypes = {
//   user: PropTypes.shape({
//       email: PropTypes.string.isRequired,
//   }).isRequired
// };
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
// export {circles};
