import React from 'react';
import Arena from './Arena.jsx';
import Circle from './Circle.jsx';
import PropTypes from 'prop-types';
import CurrentScore from './CurrentScore.jsx';
import FlyingObject from './FlyingObject.jsx';
import StartGame from './StartGame.jsx';
import Title from './Title.jsx';
import Leaderboard from './LeaderBoard.jsx';
import Auth from "../modules/Auth";

const Canvas = (props) => {
  const gameHeight = innerHeight;
  const viewBox = [window.innerWidth / -2, 0, window.innerWidth, gameHeight / 4];
  const leaderboard = props.leaderboard;

  let lives = props.gameState.lives;

    if (lives === 0){
        const str = localStorage.getItem('email');
        const strNew = str.replace("%40","@");
      let currScore = 0;
      fetch('/api/users/topscores/' + strNew, {
        method: 'GET',
        headers: { 'Authorization': `bearer ${Auth.getToken()}`,
        'Content-Type': 'application/json' }
      }) 
      .then(res => res.json())
      .then(json => {
        currScore = json;
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
            // preserveAspectRatio="XMaxYMax none"
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

