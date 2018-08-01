import {gameHeight} from "./constants";

export const pathFromBezierCurve = (cubicBezierCurve) => {
  const {
    initialAxis, initialControlPoint, endingControlPoint, endingAxis,
  } = cubicBezierCurve;
  return `
    M${initialAxis.x} ${initialAxis.y}
    c ${initialControlPoint.x} ${initialControlPoint.y}
    ${endingControlPoint.x} ${endingControlPoint.y}
    ${endingAxis.x} ${endingAxis.y}
  `;
};

// returns 2 for successful collision
// returns 1 for bad collision (dead)
// returns 0 for no collision
export const collide = (self, opp) => {
    const rectB = {
        x1: self.x - self.r,
        y1: self.y - self.r,
        x2: self.x + self.r,
        y2: self.y + self.r,

    };
    const currentLifeTime = (new Date()).getTime() - opp.createdAt;
    const calculatedPosition = {
        x: opp.position.x,
        y: opp.position.y + ((currentLifeTime / 8000) * gameHeight),
    };
    const calculatedColor = opp.color;
    const rectA = {
        x1: calculatedPosition.x - 10,
        y1: calculatedPosition.y - 10,
        x2: calculatedPosition.x + 10,
        y2: calculatedPosition.y + 10,
        rectclr:calculatedColor,
    };

    if(rectA.x1 < rectB.x2 && rectA.x2 > rectB.x1 && rectA.y1 < rectB.y2 && rectA.y2 > rectB.y1){
      if(rectA.rectclr === "blue" || rectA.rectclr === "red"){
          return 2;
      }
      else {
        return 1;
      }
    }
    return 0;

};

export const getCanvasPosition = (event) => {

  const svg = document.getElementById('RockPaperScramble');
  const point = svg.createSVGPoint();

  point.x = event.clientX;
  point.y = event.clientY;
  const { x, y } = point.matrixTransform(svg.getScreenCTM().inverse());
  return {x, y};
};