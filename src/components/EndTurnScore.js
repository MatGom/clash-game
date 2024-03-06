import styles from './EndTurnScore.module.scss';

import Button from './UI/Button';

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
  return (
    <div className={styles.endTurnScore}>
      <p>Turn {turnNumber} outcome</p>
      <p>{endTurnOutcomeMessage}</p>
      <div>
        <p>{campOneWinner === 'Draw' ? `Camp 1 ended in a draw` : `Camp 1 winner: ${campOneWinner}`}</p>
        <p>{campTwoWinner === 'Draw' ? `Camp 2 ended in a draw` : `Camp 2 winner: ${campTwoWinner}`}</p>
        <p>{campThreeWinner === 'Draw' ? `Camp 3 ended in a draw` : `Camp 3 winner: ${campThreeWinner}`}</p>
      </div>
      {turnNumber === turns.maximum ? (
        <Button theme='sapphire' size='medium' onClick={showGameResults}>
          Show Game Results
        </Button>
      ) : (
        <Button theme='emerald' size='medium' onClick={startNextTurn}>
          Start turn {turnNumber + 1}
        </Button>
      )}
    </div>
  );
};

export default EndTurnScore;
