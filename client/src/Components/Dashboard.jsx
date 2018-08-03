import React, { PropTypes } from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import App from '../App.js';
import CurrentScore from './CurrentScore.jsx';


const Dashboard = (props) => (

    <div>
  <Card className="container">
    <CardTitle
      title="GAME OVER"
      subtitle="Thanks for playing!"
    />
      <div>Score: {localStorage.getItem('score')}</div>

  </Card>
    </div>
);

export default Dashboard;