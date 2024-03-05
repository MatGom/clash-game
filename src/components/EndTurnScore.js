import styles from './EndTurnScore.module.scss';

const EndTurnScore = ({
  turnNumber,
  startNextTurn,
  campOneWinner,
  campTwoWinner,
  campThreeWinner,
  endTurnOutcomeMessage,
}) => {
  return (
    <div className={styles.endTurnScore}>
      <p>Turn {turnNumber} outcome</p>
      <p>{endTurnOutcomeMessage}</p>
      <div>
        <p>{campOneWinner === 'Draw' ? `Camp 1 ended in a draw` : `Camp 1 winner: ${campOneWinner}`}</p>
        <p>{campTwoWinner === 'Draw' ? `Camp 2 ended in a draw` : `Camp 2 winner: ${campTwoWinner}`}</p>
        <p>{campThreeWinner === 'Draw' ? `Camp 3 ended in a draw` : `Camp 3 winner: ${campThreeWinner}`}</p>
      </div>
      <button onClick={startNextTurn}>New turn ({turnNumber + 1})</button>
    </div>
  );
};

export default EndTurnScore;
