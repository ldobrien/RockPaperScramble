import React from 'react';
import Arena from './Arena.jsx';
import Circle from './Circle.jsx';
import PropTypes from 'prop-types';
import DashboardPage from '../containers/DashboardPage.jsx';
// import Login from './Login.jsx';

import CurrentScore from './CurrentScore.jsx';
import FlyingObject from './FlyingObject.jsx';
import Heart from './Heart.jsx';
import StartGame from './StartGame.jsx';
import Title from './Title.jsx';
import Leaderboard from './LeaderBoard.jsx';
import LoginPage from '../containers/LoginPage.jsx';
import Rank from './Rank.jsx';
import Auth from "../modules/Auth";
import Game from "../containers/game";
import {fetchLeaders} from "../actions/LeaderboardActions.jsx";
import {connect} from 'react-redux';

class Canvas extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
          leaderboard: [],
        };
    }

    componentWillMount() {
        fetchLeaders();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.leaders) {
            this.setState({ leaderboard: nextProps.leaderboard });
        }
    }

    render() {
        const gameHeight = 1200;
        const viewBox = [window.innerWidth / -2, 600 - gameHeight, window.innerWidth, gameHeight];

        // this.props.actions.fetchLeaders();

        // const leaderboard = props.leaderboard;

        let lives = props.gameState.lives;
        if (lives === 0) {
            fetch('/api/users/topscores', {
                method: 'PUT',
                headers: {
                    'Authorization': `bearer ${Auth.getToken()}`,
                    'Content-Type': 'application/json'
                },
                body: {
                    email: localStorage.getItem('email'),
                    // email: "sean@sean.com",
                    score: props.score,
                }

            })
                .then(res => res.json());
            console.log(this.leaderboard);
            return (
                <Leaderboard currentPlayer={leaderboard[3]} leaderboard={leaderboard}/>
            );
        }
        else if (lives < 0) {
            return (
                <Leaderboard currentPlayer={leaderboard[3]} leaderboard={leaderboard}/>
            );
        }
        else {
            return (
                <svg
                    id="RockPaperScramble"
                    // preserveAspectRatio="xMaxYMax none"
                    onMouseMove={props.trackMouse}
                    viewBox={viewBox}
                >
                    <defs>
                        <filter id="shadow">
                            <feDropShadow dx="1" dy="1" stdDeviation="2"/>
                        </filter>
                    </defs>
                    <Arena position={{x: props.x, y: props.y}}/>
                    <Circle position={{x: props.x, y: props.y}} radius={{r: props.r}}/>
                    <CurrentScore score={props.score}/>
                    <Heart position={{x: -600, y: 35}}/>
                    {!props.gameState.started &&
                    <g>
                        <StartGame onClick={() => props.startGame()}/>
                        <Title/>
                        <Leaderboard currentPlayer={leaderboard[3]} leaderboard={leaderboard}/>
                    </g>
                    }

                    {props.gameState.flyingObjects.map(flyingObject => (
                        <FlyingObject
                            key={flyingObject.id}
                            position={flyingObject.position}
                            color={flyingObject.color}
                        />
                    ))}
                </svg>
            );
        }
    }
};


Canvas.propTypes = {
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    score: PropTypes.number.isRequired,
    gameState: PropTypes.shape({
        started: PropTypes.bool.isRequired,
        kills: PropTypes.number.isRequired,
        lives: PropTypes.number.isRequired,
        flyingObjects: PropTypes.arrayOf(PropTypes.shape({
            position: PropTypes.shape({
                x: PropTypes.number.isRequired,
                y: PropTypes.number.isRequired
            }).isRequired,
            color: PropTypes.string.isRequired,
            id: PropTypes.number.isRequired,
        })).isRequired,
    }).isRequired,
    trackMouse: PropTypes.func.isRequired,
    startGame: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired
};

// is called when the redux store updates, and takes those store
// updates and turns them into props for the React Component 
const mapStateToProps = state => ({
    leaderboard: state.leaders,
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(LeaderboardActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Canvas);
