import React from 'react';
import PropTypes from 'prop-types';

function Opponent(x, y, r) {
	const circleStyle = {
    fill: 'pink',
  };
  return (
    <circle
      style={circleStyle}
      cx={props.position.x}
      cy={props.position.y}
      r={props.radius.r}
    />
  );
};
    componentDidUpdate() {
        const { size, playerPosition, info: { top, left }} = this.props;
        
        if ( playerPosition.left < (left + size) && 
             playerPosition.top  < (top + size)  &&
            (playerPosition.left + size) > left &&
            (playerPosition.top  + size) > top) {
            
            this.props.onCollide()
        }
    }

    render() {
        const { size, info: { top, left }} = this.props;
        
        return (
            <Square 
                size={size}
                position={{ top, left }}
                color='firebrick' />
        );
    }
}





Circle.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired
};


export default Circle;