import React, { PropTypes } from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import Leaderboard from "./LeaderBoard.jsx";

const Dashboard = (props) => (

    <div>
  <Card className="container">
    <CardTitle
      title="GAME OVER"
      subtitle="Thanks for playing!"
    />

  </Card>
        <Leaderboard currentPlayer={props.leaderboard[3]} leaderboard={props.leaderboard}/>
    </div>
);

Dashboard.propTypes = {
  // leaderboard: PropTypes.string.isRequired
};

export default Dashboard;