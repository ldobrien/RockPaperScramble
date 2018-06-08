import Leaderboard from './Leaderboard';

const Canvas = (props) => {
  // ... const definitions
  const leaderboard = [
    { id: 'a1', maxScore: 250, name: 'Rogue' },
    { id: 'b2', maxScore: 245, name: 'Lisa'},
    { id: 'c3', maxScore: 243, name: 'Vahid'},
    { id: 'd4', maxScore: 198, name: 'Stacy'},
    { id: 'e5', maxScore: 171, name: 'Kaavya'}
    { id: 'f6', maxScore: 132, name: 'Jenessa'},
    { id: 'g7', maxScore: 94, name: 'Kaye'},
    { id: 'h8', maxScore: 76, name: 'Shannon'}
  return (
    <svg ...>
      // ... other elements

      { ! props.gameState.started &&
      <g>
        // ... StartGame and Title Autenticate: This is the same parameter that you would add to login component
        <Leaderboard currentPlayer={leaderboard[6]} authenticate={signIn} leaderboard={leaderboard} />
      </g>
      }

      // ... game.map
    </svg>
  );
};

// ... propTypes definition and export statement