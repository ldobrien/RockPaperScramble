import React from 'react';
import { pathFromBezierCurve } from '../utils/formulas';

const Title = () => {
  const textStyle = {
    fontFamily: '"Alfa Slab One", cursive',
    fontSize: 100,
    fill: '#baffc9',
  };
  const scrambleStyle = {
    fontFamily: '"Eater", cursive',
    fontSize: 100,
    fill: '#4dd0e1',
  };
  const paperStyle = {
    fontFamily: '"Gloria Hallelujah", cursive',
    fontSize: 100,
    fill: '#ffdfba',
  };

  const width = window.innerWidth/4 - 100;
  const height = window.innerHeight;
  const RockLine = {
    initialAxis: {
      x: width,
      y: height / -4,
    },
    initialControlPoint: {
      x: 100,
      y: -50,
    },
    endingControlPoint: {
      x: 100,
      y: -50,
    },
    endingAxis: {
      x: 360,
      y: 0,
    },
  };
  const PaperLine = {
    initialAxis: {
      x: width,
      y: height / -4 + 150,
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
    // ...PaperLine,
    initialAxis: {
      x: width - 100,
      y: height / -4 + 300,
    },
    initialControlPoint: {
      x: 125,
      y: -90,
    },
    endingControlPoint: {
      x: 450,
      y: -90,
    },
    endingAxis: {
      x: 600,
      y: 0,
    },
  };

  return (
    <g filter="url(#shadow)">
      <defs>
        <path
          id="rPath"
          d={pathFromBezierCurve(RockLine)}
        />
        <path
          id="pPath"
          d={pathFromBezierCurve(PaperLine)}
        />
        <path
          id="ScramblePath"
          d={pathFromBezierCurve(ScrambleLine)}
        />
      </defs>
      <text {...textStyle}>
      <textPath xlinkHref="#rPath">
      Rock
      </textPath>
      </text>
      <text {...paperStyle}>
        <textPath xlinkHref="#pPath">
          PAPER
        </textPath>
      </text>
      <text {...scrambleStyle}>
        <textPath xlinkHref="#ScramblePath">
          SCRAMBLE
        </textPath>
      </text>
    </g>
  );
};

export default Title;