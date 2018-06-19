
import React from 'react';
import Arena from './Arena';
import Circle from './Circle';
import PropTypes from 'prop-types';

const opponents = 50;
const width = window.innerWidth;
const height = window.innerHeight;
let circles = [];
function addOpponents(){
      for(var i = 0; i < 50; i++){
        circles.push({position:{
          x:Math.random() * (2*width) - width, 
          y:Math.random() * (2*height) - height},
          r:15})
      }
    }

addOpponents();

const Canvas = (props) => {

  const viewBox = [width / -2, height / -2, width, height];
    // circles is the array of circle objects
    // console.log(props);
    
  return (
    <svg
      id="RockPaperScramble"
      // preserveAspectRatio="xMaxYMax none"
      onMouseMove={props.trackMouse}
      viewBox={viewBox}
    >
      <Arena/>
    {circles.map((circle)=>{return <Circle position={circle.position} radius={{r:circle.r}} />;})}
     <Circle position={{x: props.x, y: props.y}} radius={{r: props.r}}/>

    </svg>
  );
};

Canvas.propTypes = {
  // angle: PropTypes.number.isRequired,
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  trackMouse: PropTypes.func.isRequired,
};

export default Canvas;
export {circles};

// {circles.map((circle)=>{return <Circle position={circle.position} radius={{r:circle.r}} />;})}