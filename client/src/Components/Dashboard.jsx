import React from 'react';
import { Card, CardTitle } from 'material-ui/Card';

const Dashboard = () => (

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