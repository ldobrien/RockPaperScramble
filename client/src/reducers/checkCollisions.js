import { checkCollision } from '../utils/formulas';
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
      y: opp.position.y + ((currentLifeTime / 8000) * gameHeight), // THIS NEEDS TO BE UPDATED
    };
    // const calculatedColor = {
    //   color: opp.color,
    // };
    const rectA = {
      x1: calculatedPosition.x - 40,
      y1: calculatedPosition.y - 10,
      x2: calculatedPosition.x + 40,
      y2: calculatedPosition.y + 10,
      // color: calculatedColor,
    };
    // console.log(opp.id);
    if (checkCollision(rectA, rectB)) {
      // console.log("COLLISION: ");
      // console.log(opp.id);
      // if (calculatedColor = "red"){
      objectsDestroyed.push({
        oppId: opp.id,
      });
      // console.log(objectsDestroyed[0]);
    };
  });
  return objectsDestroyed;
};

export default checkCollisions;