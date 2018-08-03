import React from 'react';
import { Card, CardTitle } from 'material-ui/Card';


const HomePage = () => (
  <Card className="container">
    <CardTitle title="Rock Paper Scramble" subtitle="A classic game in living circles."/>
      <text>Click on the “Tap to Start” text to begin the game.

          Your yellow player circle will follow your mouse cursor. Move your cursor around to move your circle to places
          you’d like to go.
          Collide with yellow (Paper) and green (Rock) circles to improve your score. Stay away from the red circles
          (Scissors), the game will end when you collide with one.
          Once the game is over, click on the “Tap to Start” text to play again.</text>
  </Card>
);

export default HomePage;