import styles from './EndTurnScore.module.scss';

import { settings } from '../data/settings';

const { turns } = settings;

const EndTurnScore = ({
  turnNumber,
  startNextTurn,
  showGameResults,
  campOneWinner,
  campTwoWinner,
  campThreeWinner,
  endTurnOutcomeMessage,
}) => {
  const buttonText = turnNumber === turns.maximum ? 'Show Game Results' : `New Turn (${turnNumber + 1})`;

  return (
    <div className={styles.endTurnScore}>
      <p>Turn {turnNumber} outcome</p>
      <p>{endTurnOutcomeMessage}</p>
      <div>
        <p>{campOneWinner === 'Draw' ? `Camp 1 ended in a draw` : `Camp 1 winner: ${campOneWinner}`}</p>
        <p>{campTwoWinner === 'Draw' ? `Camp 2 ended in a draw` : `Camp 2 winner: ${campTwoWinner}`}</p>
        <p>{campThreeWinner === 'Draw' ? `Camp 3 ended in a draw` : `Camp 3 winner: ${campThreeWinner}`}</p>
      </div>
      <button onClick={turnNumber === 10 ? showGameResults : startNextTurn}>{buttonText}</button>
    </div>
  );
};

export default EndTurnScore;
