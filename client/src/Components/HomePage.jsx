import React from 'react';
import { Card, CardTitle } from 'material-ui/Card';


const HomePage = () => (
  <Card className="container">
    <CardTitle title="Rock Paper Scramble" subtitle="A classic game in living circles."/>
      <text>Follows the rules of Rock Paper Scissors - You start as paper, so paper and rocks are safe to eat -
          don't get destoryed by the scissors though!</text>
  </Card>
);

export default HomePage;