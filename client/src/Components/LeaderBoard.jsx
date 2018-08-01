import React from 'react';
import PropTypes from 'prop-types';
// import Login from './Login';
import Rank from "./Rank.jsx";

const Leaderboard = (props) => {
  const style = {
    fill: 'transparent',
    stroke: 'blue',
    strokeDasharray: '14',  
    x: -1050,
    y: -200
  };

  const leaderboardTitle = {
    fontFamily: 'Times New Roman, Arial',
    fontSize: 50,
    fill: '#ffe6ff',
    cursor: 'default',
  };

  let leaderboard = props.leaderboard || [];  
  leaderboard = leaderboard.sort((prev, next) => {
    if (prev.maxScore === next.maxScore) {
      return prev.name <= next.name ? 1 : -1;
    }
    return prev.maxScore < next.maxScore ? 1 : -1;
  })
  .map((member, index) => ({
    ...member,
    rank: index + 1,
    currentPlayer: member.id === props.currentPlayer.id,
  }))
  .filter((member, index) => {
    if (index < 4) return member;
    return null;
  });

  return (
    <g>
      <text filter="url(#shadow)" style={leaderboardTitle} x="-900" y="-220">Leaderboard</text>
      <rect style={style} width="700" height="330" />
      {
        props.currentPlayer && leaderboard.map((player, idx) => {
          const position = {
            x: -800,
            y: -130 + (70 * idx)
          };
          return <Rank key={player.rank} player={player} position={position}/>
        })
      }
    </g>
  );
};

Leaderboard.propTypes = {
  currentPlayer: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }),
  leaderboard: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    ranking: PropTypes.number,
  })),
};
//


export default Leaderboard;