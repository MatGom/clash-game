import styles from './Camp.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCampground, faShield, faSkull } from '@fortawesome/free-solid-svg-icons';

const Camp = ({ attack, defence }) => {
  return (
    <div className={`${styles.camp} camp`}>
      <div className={styles.campImage}>
        <FontAwesomeIcon icon={faCampground} />
      </div>
      <div className={styles.campStats}>
        <div className={styles.campAttack}>
          <FontAwesomeIcon className={styles.campStatIcon} icon={faSkull} />
          <p className={styles.campStat}>{attack}</p>
        </div>
        <div className={styles.campDefence}>
          <FontAwesomeIcon className={styles.campStatIcon} icon={faShield} />
          <p className={styles.campStat}>{defence}</p>
        </div>
      </div>
    </div>
  );
};

export default Camp;
