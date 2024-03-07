import styles from './CastleModal.module.scss';

import { useSelector } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFortAwesome } from '@fortawesome/free-brands-svg-icons';
import { faCoins } from '@fortawesome/free-solid-svg-icons';

import Button from './UI/Button';

import { settings } from '../data/settings';

const { gold } = settings;

const CastleModal = ({ castleCost, playerId, upgradeCastle, closeModal, currentPlayer }) => {
  const castleLevel = useSelector(state => state.castleState.players[playerId]?.castleLevel);
  const goldIncome = useSelector(state => state.goldState.players[playerId]?.goldIncome);
  const goldToSpendThisTurn = useSelector(state => state.goldState.players[playerId]?.goldToSpendThisTurn);

  return (
    <div
      className={`${styles.castleModal} ${
        currentPlayer === 'playerOne' && playerId === 'playerOne' ? styles.blue : styles.red
      }`}>
      <div className={styles.castleHeader}>
        <h2 className={styles.castleTitle}>Castle</h2>
        <h3 className={styles.castleLevel}>Level {castleLevel}</h3>
      </div>
      <FontAwesomeIcon className={styles.castleIcon} icon={faFortAwesome} />
      <div className={styles.castleInfo}>
        <div
          className={`${styles.castleLevelInfo} ${
            currentPlayer === 'playerOne' && playerId === 'playerOne' ? styles.castleBorderBlue : styles.castleBorderRed
          }`}>
          <p>Current level {castleLevel}</p>
          <p>
            Income per turn <FontAwesomeIcon className={styles.goldIcon} icon={faCoins} /> {goldIncome}
          </p>
        </div>
        <div
          className={`${styles.castleLevelInfo} ${
            currentPlayer === 'playerOne' && playerId === 'playerOne' ? styles.castleBorderBlue : styles.castleBorderRed
          }`}>
          <p>Next level {castleLevel + 1}</p>
          <p>
            Income per turn <FontAwesomeIcon className={styles.goldIcon} icon={faCoins} />{' '}
            {goldIncome + gold.income.increaseBy}
          </p>
        </div>
        <p className={styles.goldLevelInfo}>
          Every upgrade increases gold limit to spend each turn by {gold.limit.nextTurn.increaseBy} from next turn
        </p>
      </div>
      <div className={styles.castleUpgradeWrapper}>
        <p className={styles.castleUpgradeCost}>
          Cost <FontAwesomeIcon className={styles.goldIcon} icon={faCoins} /> {castleCost}
        </p>
        <Button theme='sapphire' size='small' onClick={() => upgradeCastle(playerId)}>
          Upgrade
        </Button>
        <Button theme='ruby' size='small' onClick={closeModal}>
          Close
        </Button>
      </div>
      <p className={styles.goldToSpendThisTurn}>Gold to spend this turn {goldToSpendThisTurn}</p>
    </div>
  );
};

export default CastleModal;
