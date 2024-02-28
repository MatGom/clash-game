import styles from './CastleModal.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFortAwesome } from '@fortawesome/free-brands-svg-icons';
import { faCoins } from '@fortawesome/free-solid-svg-icons';

const CastleModal = ({ castle, upgradeCastle, cancelCastle, goldToSpendThisTurn }) => {
  return (
    <div className={styles.castleModal}>
      <div className={styles.castleHeader}>
        <h2 className={styles.castleTitle}>Castle</h2>
        <h3 className={styles.castleLevel}>Level {castle.level}</h3>
      </div>
      <FontAwesomeIcon className={styles.castleIcon} icon={faFortAwesome} />
      <div className={styles.castleInfo}>
        <div className={styles.castleCurrentLevel}>
          <p>Current level ({castle.level})</p>
          <p>{castle.gold} gold per turn</p>
        </div>
        <div className={styles.castleNextLevel}>
          <p>Next level ({castle.level + 1})</p>
          <p>{castle.gold + 50} gold per turn</p>
        </div>
      </div>
      <div className={styles.castleUpgradeWrapper}>
        <p className={styles.castleUpgradeCost}>
          Cost <FontAwesomeIcon className={styles.goldIcon} icon={faCoins} />
          50
        </p>
        <button className={styles.castleUpgradeButton} onClick={upgradeCastle}>
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
