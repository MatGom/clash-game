import styles from './GameResultsModal.module.scss';

import Button from '../UI/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoins } from '@fortawesome/free-solid-svg-icons';

import { useSelector } from 'react-redux';

const GameResultsModal = ({ restartGame, playerOneName, playerTwoName }) => {
  const playerOneTotalGold = useSelector(state => state.goldState.players.playerOne.totalGold);
  const playerTwoTotalGold = useSelector(state => state.goldState.players.playerTwo.totalGold);

  let winnerMessage;
  let gameResultsClasses;
  if (playerOneTotalGold > playerTwoTotalGold) {
    winnerMessage = `${playerOneName} wins!`;
    gameResultsClasses = `${styles.gameResultsModal} ${styles.blue}`;
  } else if (playerTwoTotalGold > playerOneTotalGold) {
    winnerMessage = `${playerTwoName} wins!`;
    gameResultsClasses = `${styles.gameResultsModal} ${styles.red}`;
  } else {
    winnerMessage = 'The game ends in a draw!';
    gameResultsClasses = `${styles.gameResultsModal} ${styles.gray}`;
  }

  return (
    <div className={gameResultsClasses}>
      <h2 className={styles.gameResultsTitle}>Game Results</h2>
      <p className={styles.gameResultsMessage}>{winnerMessage}</p>
      <div>
        <p className={styles.gameResultsScore}>
          {playerOneName} <FontAwesomeIcon className={styles.goldIcon} icon={faCoins} /> {playerOneTotalGold}
        </p>
        <p className={styles.gameResultsScore}>
          {playerTwoName} <FontAwesomeIcon className={styles.goldIcon} icon={faCoins} /> {playerTwoTotalGold}
        </p>
      </div>
      <Button theme='emerald' size='large' onClick={restartGame}>
        Main Menu
      </Button>
    </div>
  );
};

export default GameResultsModal;
