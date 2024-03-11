import styles from './EndTurnScore.module.scss';

import Button from '../UI/Button';

import { settings } from '../../data/settings-data';

const { turns } = settings;

const EndTurnScore = ({
  turnNumber,
  startNextTurn,
  showGameResults,
  campOneWinner,
  campTwoWinner,
  campThreeWinner,
  endTurnOutcomeMessage,
  turnResult,
}) => {
  let endTurnScoreClasses;

  if (turnResult === 'playerOne') {
    endTurnScoreClasses = `${styles.endTurnScore} ${styles.blue}`;
  } else if (turnResult === 'playerTwo') {
    endTurnScoreClasses = `${styles.endTurnScore} ${styles.red}`;
  } else {
    endTurnScoreClasses = `${styles.endTurnScore} ${styles.gray}`;
  }

  return (
    <div className={endTurnScoreClasses}>
      <p className={styles.turnOutcome}>Turn {turnNumber} outcome</p>
      <p className={styles.turnOutcomeMessage}>{endTurnOutcomeMessage}</p>
      <div>
        <p className={styles.campResults}>Camp battle results</p>
        <p className={styles.campWinner}>{campOneWinner === 'Draw' ? `Camp 1: Draw` : `Camp 1: ${campOneWinner}`}</p>
        <p className={styles.campWinner}>{campTwoWinner === 'Draw' ? `Camp 2: Draw` : `Camp 2: ${campTwoWinner}`}</p>
        <p className={styles.campWinner}>
          {campThreeWinner === 'Draw' ? `Camp 3: Draw` : `Camp 3: ${campThreeWinner}`}
        </p>
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
