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
        x: self.x,
        y: self.y,
        r: self.r,
    };
    const currentLifeTime = (new Date()).getTime() - opp.createdAt;
    const calculatedPosition = {
        x: opp.position.x,
        y: opp.position.y + ((currentLifeTime / 8000) * gameHeight),
    };
    const calculatedColor = opp.color;
    const rectA = {
        x: calculatedPosition.x,
        y: calculatedPosition.y,
        r: 10,
        rectclr:calculatedColor,
    };
    const dist = Math.sqrt((rectB.x - rectA.x)*(rectB.x - rectA.x) +(rectB.y - rectA.y)*(rectB.y - rectA.y));
    if(dist <= (rectB.r + (rectA.r / 2))){
        if(rectA.rectclr === "yellow" || rectA.rectclr === "green"){
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