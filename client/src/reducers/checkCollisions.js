import { checkCollision } from '../utils/formulas';
import { gameHeight } from '../utils/constants';

const checkCollisions = (x, y, r, opps) => {
  const objectsDestroyed = [];
  const rectB = {
      x1: x - r,
      y1: y - r,
      x2: x + r,
      y2: y + r,
    };
  opps.forEach((opp) => {
    const currentLifeTime = (new Date()).getTime() - opp.createdAt;
    const calculatedPosition = {
      x: opp.position.x,
      y: opp.position.y + ((currentLifeTime / 4000) * gameHeight),
    };
    const rectA = {
      x1: calculatedPosition.x - 40,
      y1: calculatedPosition.y - 10,
      x2: calculatedPosition.x + 40,
      y2: calculatedPosition.y + 10,
    };
    // console.log(opp.id);
    if (checkCollision(rectA, rectB)) {
      console.log("COLLISION");
      objectsDestroyed.push({
        oppId: opp.id,
      });
    };
  });
  return objectsDestroyed;
};

export default checkCollisions;