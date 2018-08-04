import React from 'react';
import { collide } from '../utils/formulas';

const checkCollisions = (self, opps) => {
  const objectsDestroyed = [];
  opps.forEach((opp) => {
    if (collide(self, opp) === 2) {
        objectsDestroyed.push({
          oppId: opp.id,
        });
        self.r += 1;
        if(self.gameState.lives > 0){
            self.score += 1;
        }

    }
  });
  return objectsDestroyed;
};

export default checkCollisions;