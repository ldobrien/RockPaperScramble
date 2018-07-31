import React from 'react';
import PropTypes from 'prop-types';
import { checkCol } from '../utils/formulas';
import { checkBad } from '../utils/formulas';
import { gameHeight } from '../utils/constants';

const checkBadCollisions = (state, flyingObjects) => {
  let flag= false;
  // const rectB = {
  //   x1: state.x - state.r,
  //   y1: state.y - state.r,
  //   x2: state.x + state.r,
  //   y2: state.y + state.r,
  // };
  // flyingObjects.forEach((opp) => {
  //   const currentLifeTime = (new Date()).getTime() - opp.createdAt;
  //   const calculatedPosition = {
  //     x: opp.position.x,
  //     y: opp.position.y + ((currentLifeTime / 8000) * gameHeight),
  //   };
  //
  //   const calculatedColor = opp.color;
  //
  //   const rectA = {
  //     x1: calculatedPosition.x - 10,
  //     y1: calculatedPosition.y - 10,
  //     x2: calculatedPosition.x + 10,
  //     y2: calculatedPosition.y + 10,
  //     rectclr:calculatedColor,
  //   };
  //   flag = flag || checkBad(rectA, rectB);
  // });
  return flag;
};

export default checkBadCollisions;