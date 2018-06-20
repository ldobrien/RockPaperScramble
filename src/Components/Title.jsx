import React from 'react';
import { pathFromBezierCurve } from '../utils/formulas';

const Title = () => {
  const textStyle = {
    fontFamily: '"Joti One", cursive',
    fontSize: 60,
    fill: '#cbca62',
  };

  const RockPaperLine = {
    initialAxis: {
      x: 0,
      y: -400,
    },
    initialControlPoint: {
      x: 95,
      y: -50,
    },
    endingControlPoint: {
      x: 285,
      y: -50,
    },
    endingAxis: {
      x: 380,
      y: 0,
    },
  };

  const ScrambleLine = {
    ...RockPaperLine,
    initialAxis: {
      x: 0,
      y: -300,
    },
    initialControlPoint: {
      x: 125,
      y: -90,
    },
    endingControlPoint: {
      x: 375,
      y: -90,
    },
    endingAxis: {
      x: 500,
      y: 0,
    },
  };

  return (
    <g filter="url(#shadow)">
      <defs>
        <path
          id="rpPath"
          d={pathFromBezierCurve(RockPaperLine)}
        />
        <path
          id="ScramblePath"
          d={pathFromBezierCurve(ScrambleLine)}
        />
      </defs>
      <text {...textStyle}>
        <textPath xlinkHref="#rpPath">
          ROCK PAPER
        </textPath>
      </text>
      <text {...textStyle}>
        <textPath xlinkHref="#ScramblePath">
          SCRAMBLE
        </textPath>
      </text>
    </g>
  );
};

export default Title;