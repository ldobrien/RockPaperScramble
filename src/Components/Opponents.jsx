import React from 'react';
import PropTypes from 'prop-types';

function Opponents = (props) => {
  const enemystyle = {
    fill: "yellow"
    // transition: 5s
  };
  return {circles.map((circle)=>{return <Circle position={circle.position} radius={{r:circle.r}} />;})}
}


function addOpponents(){
    for(var i = 0; i < 50; i++){
      circles.push({position:{
        x:Math.random() * (2*width) - width, 
        y:Math.random() * (2*height) - height},
        r:15})
    }
  }


Circle.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired
};


export default Circle;