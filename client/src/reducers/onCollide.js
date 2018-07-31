import circles from '../Components/Canvas.jsx';
import PropTypes from 'prop-types';

function onCollide(state, action) {
  if (!action.mousePosition) return state;

   const { x, y } = action.mousePosition;
   const currx = {x};

  for(var i = 0; i < circles.length; i++){
 
  }
  return {
    ...state,
    
  };
}

export default onCollide;