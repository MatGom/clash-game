import styles from './CastleModal.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFortAwesome } from '@fortawesome/free-brands-svg-icons';
import { faCoins } from '@fortawesome/free-solid-svg-icons';

const CastleModal = ({ castleStats, upgradeCastle, cancelCastle }) => {
  return (
    <div className={styles.castleModal}>
      <div className={styles.castleHeader}>
        <h2 className={styles.castleTitle}>Castle</h2>
        <h3 className={styles.castleLevel}>Level {castleStats.level}</h3>
      </div>
      <FontAwesomeIcon className={styles.castleIcon} icon={faFortAwesome} />
      <div className={styles.castleInfo}>
        <div className={styles.castleCurrentLevel}>
          <p>Current level ({castleStats.level})</p>
          <p>{castleStats.gold} gold per turn</p>
        </div>
        <div className={styles.castleNextLevel}>
          <p>Next level ({castleStats.level + 1})</p>
          <p>{castleStats.gold + 50} gold per turn</p>
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
    </div>
  );
};

export default CastleModal;