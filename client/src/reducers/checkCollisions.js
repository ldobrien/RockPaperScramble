import { checkCollision } from '../utils/formulas';
import { gameHeight } from '../utils/constants';
import Circle  from '../Components/Circle.jsx';

const checkCollisions = (Circle, opps) => {
  const objectsDestroyed = [];
  
  opps.forEach((opp) => {
    const currentLifeTime = (new Date()).getTime() - opp.createdAt;
    const calculatedPosition = {
      x: opp.position.x,
      y: opp.position.y + ((currentLifeTime / 8000) * gameHeight), // THIS NEEDS TO BE UPDATED
    };
    const rectA = {
      x1: calculatedPosition.x - 40,
      y1: calculatedPosition.y - 10,
      x2: calculatedPosition.x + 40,
      y2: calculatedPosition.y + 10,
    };

    const rectB = {
      x1: Circle.position.cx - 8,
      y1: Circle.position.cy - 8,
      x2: Circle.position.cx - 8,
      y2: Circle.position.cy - 8,
    };
    // console.log(opp.id);
    if (checkCollision(rectA, rectB)) {
      console.log("COLLISION");
      objectsDestroyed.push({
        oppId: opp.id,
      });
      // console.log(objectsDestroyed[0]);
    };
});
  return objectsDestroyed;
};

export default checkCollisions;