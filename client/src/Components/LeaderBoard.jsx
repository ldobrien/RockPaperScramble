import React from 'react';
import PropTypes from 'prop-types';
// import Login from './Login';
import Rank from "./Rank.jsx";

const Leaderboard = (props) => {
  const style = {
    fill: 'transparent',
    stroke: 'blue',
    strokeDasharray: '14',   //container it lives in
    x: -1050,
    y: -200
    // x: "-350",
    // y: "-600"
  };

  //what it will look like
  const leaderboardTitle = {
    fontFamily: 'Times New Roman, Arial',
    fontSize: 50,
    fill: '#ffe6ff',
    cursor: 'default',
    // x:"-150",
    // y:"-630"

  };

  let leaderboard = props.leaderboard || [];  //Sorting the top score on top
  leaderboard = leaderboard.sort((prev, next) => {
    //sort by name if tied
    if (prev.maxScore === next.maxScore) {
      return prev.name <= next.name ? 1 : -1;
    }
    return prev.maxScore < next.maxScore ? 1 : -1;
  })
// Calling map to show player flag and highlight ranking of active player
  .map((member, index) => ({
    ...member,
    rank: index + 1,
    currentPlayer: member.id === props.currentPlayer.id,
  }))
// Remove from view players who are in the top 3
  .filter((member, index) => {
    if (index < 4) return member;
    return null;
  });

  return (
    <g>
      <text filter="url(#shadow)" style={leaderboardTitle} x="-900" y="-220">Leaderboard</text>
      <rect style={style} width={700} height="330" />
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
    maxScore: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }),
  leaderboard: PropTypes.arrayOf(PropTypes.shape({
    // maxScore: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    ranking: PropTypes.number,
  })),
};
//
// Leaderboard.defaultProps = {
//   currentPlayer: null,
//   leaderboard: null,
// };

export default Leaderboard;