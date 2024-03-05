import styles from './StartTurnModal.module.scss';

const StartTurnModal = ({ currentPlayer, playerOneName, playerTwoName, turnNumber, startCurrentTurn }) => {
  return (
    <div className={styles.playerTurn}>
      <h2>{currentPlayer === 'playerOne' ? playerOneName : playerTwoName}</h2>
      <p>Turn {turnNumber}</p>
      <button className={styles.startTurnButton} onClick={startCurrentTurn}>
        Start
      </button>
    </div>
  );
};

export default StartTurnModal;
