import styles from './GameResultsModal.module.scss';

import { useSelector } from 'react-redux';

const GameResultsModal = ({ restartGame, playerOneName, playerTwoName }) => {
  const playerOneTotalGold = useSelector(state => state.totalGold.players.playerOne.totalGold);
  const playerTwoTotalGold = useSelector(state => state.totalGold.players.playerTwo.totalGold);

  let winnerMessage;
  if (playerOneTotalGold > playerTwoTotalGold) {
    winnerMessage = `${playerOneName} won the game!`;
  } else if (playerTwoTotalGold > playerOneTotalGold) {
    winnerMessage = `${playerTwoName} won the game!`;
  } else {
    winnerMessage = 'The game ended in a draw!';
  }
  return (
    <div className={styles.gameResultsModal}>
      <h2>Game Results</h2>
      <p>{winnerMessage}</p>
      <div>
        <p>{`${playerOneName} total gold ${playerOneTotalGold}`}</p>
        <p>{`${playerTwoName} total gold ${playerTwoTotalGold}`}</p>
      </div>
      <button onClick={restartGame}>Start New Game</button>
    </div>
  );
};

export default GameResultsModal;
