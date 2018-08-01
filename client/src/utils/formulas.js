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

export const checkCollision = (rectA, rectB) => (
  rectA.x1 < rectB.x2 && rectA.x2 > rectB.x1 &&
  rectA.y1 < rectB.y2 && rectA.y2 > rectB.y1 
 && (rectA.rectclr == "blue" ||rectA.rectclr == "red")
);

export const checkBadCollision = (rectA, rectB) => (
  rectA.x1 < rectB.x2 && rectA.x2 > rectB.x1 &&
  rectA.y1 < rectB.y2 && rectA.y2 > rectB.y1 
 && (rectA.rectclr == "green")
);

export const getCanvasPosition = (event) => {

  const svg = document.getElementById('RockPaperScramble');
  const point = svg.createSVGPoint();

  point.x = event.clientX;
  point.y = event.clientY;
  const { x, y } = point.matrixTransform(svg.getScreenCTM().inverse());
  return {x, y};
};