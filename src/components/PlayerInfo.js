import styles from './PlayerInfo.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFortAwesome } from '@fortawesome/free-brands-svg-icons';
import { faCoins } from '@fortawesome/free-solid-svg-icons';

const PlayerInfo = ({ name, gold, level }) => {
  return (
    <div className={styles.info}>
      <div className={styles.name}>{name}</div>
      <div className={styles.score}>
        <div className={styles.gold}>
          <FontAwesomeIcon className={styles.goldIcon} icon={faCoins} />
          <p className={styles.goldAmount}>{gold}</p>
        </div>
        <div className={styles.mine}>
          <FontAwesomeIcon className={styles.mineIcon} icon={faFortAwesome} />
          <p className={styles.mineLevel}>{level}</p>
        </div>
      </div>
    </div>
  );
};

export default PlayerInfo;
