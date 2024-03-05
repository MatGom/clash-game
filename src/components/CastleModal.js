import styles from './CastleModal.module.scss';

import { useSelector } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFortAwesome } from '@fortawesome/free-brands-svg-icons';
import { faCoins } from '@fortawesome/free-solid-svg-icons';

import { settings } from '../data/settings';
const { gold } = settings;

const CastleModal = ({ castleCost, playerId, upgradeCastle, cancelCastle }) => {
  const castleLevel = useSelector(state => state.castleLevel.players[playerId]?.castleLevel);
  const goldPerTurn = useSelector(state => state.goldPerTurn.players[playerId]?.goldPerTurn);
  const goldToSpendThisTurn = useSelector(state => state.goldToSpendPerTurn.players[playerId]?.goldToSpendThisTurn);

  return (
    <div className={styles.castleModal}>
      <div className={styles.castleHeader}>
        <h2 className={styles.castleTitle}>Castle</h2>
        <h3 className={styles.castleLevel}>Level {castleLevel}</h3>
      </div>
      <FontAwesomeIcon className={styles.castleIcon} icon={faFortAwesome} />
      <div className={styles.castleInfo}>
        <div className={styles.castleCurrentLevel}>
          <p>Current level ({castleLevel})</p>
          <p>{goldPerTurn} gold per turn</p>
        </div>
        <div className={styles.castleNextLevel}>
          <p>Next level ({castleLevel + 1})</p>
          <p>{goldPerTurn + gold.income.increaseBy} gold per turn</p>
        </div>
      </div>
      <div className={styles.castleUpgradeWrapper}>
        <p className={styles.castleUpgradeCost}>
          Cost <FontAwesomeIcon className={styles.goldIcon} icon={faCoins} />
          {castleCost}
        </p>
        <button className={styles.castleUpgradeButton} onClick={() => upgradeCastle(playerId)}>
          Upgrade
        </button>
        <button className={styles.castleCancelButton} onClick={cancelCastle}>
          Cancel
        </button>
      </div>
      <p>Gold to spend this turn {goldToSpendThisTurn}</p>
    </div>
  );
};

export default CastleModal;
