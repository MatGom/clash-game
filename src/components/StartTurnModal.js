import styles from './StartTurnModal.module.scss';

import Button from './UI/Button';

const StartTurnModal = ({ currentPlayer, playerOneName, playerTwoName, turnNumber, startCurrentTurn }) => {
  return (
    <div className={styles.playerTurn}>
      <h2>{currentPlayer === 'playerOne' ? playerOneName : playerTwoName}</h2>
      <p>Turn {turnNumber}</p>
      <Button theme='emerald' size='large' onClick={startCurrentTurn}>Start</Button>
    </div>
  );
};

export default StartTurnModal;
