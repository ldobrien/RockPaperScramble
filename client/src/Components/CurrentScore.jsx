import React from 'react';
import PropTypes from 'prop-types';

const CurrentScore = (props) => {
  const width = window.innerWidth;
  const height = window.innerHeight;

  const scoreStyle = {
    fontFamily: '"Joti One", cursive',
    fontSize: 80,
    fill: '#ffffba',
  };
  return (
    <g filter="url(#shadow)">
      <text style={scoreStyle} x={width/2 - 100} y={height/2 -200}>
        {props.score}
      </text>
    </g>
  );
};

CurrentScore.propTypes = {
  score: PropTypes.number.isRequired,
};

export default CurrentScore;