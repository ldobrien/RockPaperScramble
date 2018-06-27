import React from 'react';
import Auth from '../modules/Auth';
import Dashboard from '../Components/Dashboard.jsx';
import PropTypes from 'prop-types';
import { getCanvasPosition } from '../utils/formulas';
import Canvas from '../Components/Canvas.jsx';
import Circle from '../Components/Circle.jsx';
import Game from './game.js';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from '../reducers';



class DashboardPage extends React.Component {

  /**
   * Class constructor.
   */
  constructor(props) {
    super(props);

    this.state = {
      secretData: ''
    };
  }

  /**
   * This method will be executed after initial rendering.
   */
  componentDidMount() {
    const xhr = new XMLHttpRequest();
    xhr.open('get', '/api/dashboard');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    // set the authorization HTTP header
    xhr.setRequestHeader('Authorization', `bearer ${Auth.getToken()}`);
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
      if (xhr.status === 200) {
        this.setState({
          secretData: xhr.response.message
        });
      }
    });
    xhr.send();
    const self = this;

    setInterval(() => {
        self.props.moveObjects(self.canvasMousePosition);
    }, 10);
    setInterval(() => {
        self.props.onCollide(self.canvasMousePosition);
    }, 1);

    window.onresize = () => {
      const cnv = document.getElementById('RockPaperScramble');
      cnv.style.width = `${window.innerWidth}px`;
      cnv.style.height = `${window.innerHeight}px`;
    };
    window.onresize();
  }

  trackMouse(event) {
    this.canvasMousePosition = getCanvasPosition(event);
  }
  /**
   * Render the component.
   */
  render() {
    const store = createStore(
    reducer, /* preloadedState, */
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
    return (
      <div>
    <Provider store={store}>
        <Game />
    </Provider>,
          <Dashboard secretData={this.state.secretData} />
        </div>);
  }

}

// DashboardPage.propTypes = {
//   x: PropTypes.number.isRequired,
//   y: PropTypes.number.isRequired,
//   gameState: PropTypes.shape({
//     started: PropTypes.bool.isRequired,
//     kills: PropTypes.number.isRequired,
//     lives: PropTypes.number.isRequired,
//     flyingObjects: PropTypes.arrayOf(PropTypes.shape({
//       position: PropTypes.shape({
//         x: PropTypes.number.isRequired,
//         y: PropTypes.number.isRequired
//       }).isRequired,
//       id: PropTypes.number.isRequired,
//     })).isRequired,
//   }).isRequired,
//   moveObjects: PropTypes.func.isRequired,
//   startGame: PropTypes.func.isRequired,
//   moveObjects: PropTypes.func.isRequired,
// };


export default DashboardPage;