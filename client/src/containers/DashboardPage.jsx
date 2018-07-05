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
import ReactDOM from 'react-dom';
import registerServiceWorker from '../registerServiceWorker.js';
import moveObjects from '../reducers/moveObjects';



var store = createStore(reducer, /* preloadedState, */
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),);

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
    // const self = this;
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

    // const self = this;

    // setInterval(() => {
    //     self.props.moveObjects(self.canvasMousePosition);
    // }, 10);
    // setInterval(() => {
    //     self.props.onCollide(self.canvasMousePosition);
    // }, 1);

    // window.onresize = () => {
    //   const cnv = document.getElementById('RockPaperScramble');
    //   cnv.style.width = `${window.innerWidth}px`;
    //   cnv.style.height = `${window.innerHeight}px`;
    // };
    // window.onresize();
  }

  // trackMouse(event) {
  //   this.canvasMousePosition = getCanvasPosition(event);
  // }
  /**
   * Render the component.
   */

  render() {
  //   // export default function configureStore(initialState) {
  //   const store = createStore(reducer, /* preloadedState, */
  //   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),);
  //   if (module.hot) {
  //   // Enable Webpack hot module replacement for reducers
  //   module.hot.accept('../reducers', () => {
  //     const nextRootReducer = require('../reducers/index');
  //     store.replaceReducer(nextRootReducer);
  //   });
  // }
    
//     reducer, /* preloadedState, */
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
// );
    return (
      <div>
        <Provider store={store}>
            <Game />
        </Provider>,
        // document.getElementById('root');
        <Dashboard secretData={this.state.secretData} />

      </div>);
    registerServiceWorker();

}
}


export default DashboardPage;