import React from 'react';
import PropTypes from 'prop-types';
import { checkCollision } from '../utils/formulas';
import { checkBadCollision } from '../utils/formulas';
import { gameHeight } from '../utils/constants';

const checkCollisions = (self, opps) => {
  const objectsDestroyed = [];
  const rectB = {
    x1: self.x - self.r,
    y1: self.y - self.r,
    x2: self.x + self.r,
    y2: self.y + self.r,
  };
  opps.forEach((opp) => {
    const currentLifeTime = (new Date()).getTime() - opp.createdAt;
    const calculatedPosition = {
      x: opp.position.x,
      y: opp.position.y + ((currentLifeTime / 8000) * gameHeight),
    };

    const calculatedColor = opp.color;
    
    const rectA = {
      x1: calculatedPosition.x - 40,
      y1: calculatedPosition.y - 10,
      x2: calculatedPosition.x + 40,
      y2: calculatedPosition.y + 10,
      rectclr:calculatedColor,
    };

    if (checkCollision(rectA, rectB)) {
        objectsDestroyed.push({
          oppId: opp.id,
        });
        self.r += 1;
        self.score += 1;
    };
     if (checkBadCollision(rectA, rectB)) {
      // return self.gameState.lives - 1;
    };
  });
  return objectsDestroyed;
};

export default checkCollisions;