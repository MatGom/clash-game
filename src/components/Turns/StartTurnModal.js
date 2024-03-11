import styles from './StartTurnModal.module.scss';

import Button from '../UI/Button';

const StartTurnModal = ({ currentPlayer, playerOneName, playerTwoName, turnNumber, startCurrentTurn }) => {
  const backgroundTheme = currentPlayer === 'playerOne' ? 'blue' : 'red';
  const buttonTheme = currentPlayer === 'playerOne' ? 'sapphire' : 'ruby';

  return (
    <div className={`${styles.playerTurnModal} ${styles[backgroundTheme]}`}>
      <p className={styles.turnNumber}>Turn {turnNumber}</p>
      <p className={styles.playerName}>{currentPlayer === 'playerOne' ? playerOneName : playerTwoName}</p>
      <Button theme={buttonTheme} size='large' onClick={startCurrentTurn}>
        Start
      </Button>
    </div>
  );
};

export default StartTurnModal;
