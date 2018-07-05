import circles from '../Components/Canvas.jsx';
// import { PropTypes } from 'react'
import PropTypes from 'prop-types';

function onCollide(state, action) {
  if (!action.mousePosition) return state;
  // if (!action.collide) return state;
  // const { x, y } = action.mousePosition;
   const { x, y } = action.mousePosition;
   const currx = {x};
  // console.log(vx);
  // const r = radius1 + radius2;

  // console.log(circles.length);
  for(var i = 0; i < circles.length; i++){
    // console.log(circles[i]);
    // if(circles[i].x === currx){
    //   console.log("HIT");
    //   //
    // }
  }
  return {
    ...state,
    // r,
  };
}

export default onCollide;