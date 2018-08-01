import React from 'react';
import {collide} from '../utils/formulas';

const checkBadCollisions = (self, opps) => {
  let flag = false;
  opps.forEach((opp) => {
    if (collide(self, opp) === 1){
      flag = true;
    }
  });
  return flag;
};

export default checkBadCollisions;