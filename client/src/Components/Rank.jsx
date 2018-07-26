import React from 'react';
import PropTypes from 'prop-types';

const Rank = (props) => {
  const { x, y } = props.position;

  const rectId = 'rect' + props.player.rank;
  const clipId = 'clip' + props.player.rank;

  const pictureStyle = {
    height: 60,
    width: 60,
  };

  const textStyle = {
    fontFamily: 'Times New Roman, Arial',
    fontSize: 35,
    fill: '#e3e3e3',
    cursor: 'default',
  };

  if (props.player.currentPlayer) textStyle.fill = '#e9ea64';



  return (
    <g>
      <use xlinkHref={'#' + rectId} strokeWidth="2" stroke="black" />
      <text filter="url(#shadow)" style={textStyle} x={x - 200} y={y}>{props.player.rank}º</text>
      <text filter="url(#shadow)" style={textStyle} x={x - 60} y={y}>{props.player.name}</text>
      <text filter="url(#shadow)" style={textStyle} x={x + 350} y={y}>{props.player.maxScore}</text>
    </g>
  );
};

Rank.propTypes = {
  player: PropTypes.shape({
    name: PropTypes.string.isRequired,
    rank: PropTypes.number.isRequired,
    currentPlayer: PropTypes.bool.isRequired,
  }).isRequired,
  position: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired
  }).isRequired,
};

export default Rank;