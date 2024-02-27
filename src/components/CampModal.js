import styles from './CampModal.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSkull, faShield, faWandSparkles, faShieldHalved } from '@fortawesome/free-solid-svg-icons';

const CampModal = ({ saveCamp, cancelCamp, attack, defence, name }) => {
  return (
    <div className={styles.campModal}>
      <h2 className={styles.campName}>{name}</h2>
      <div className={styles.campStats}>
        <p>Attack {attack}</p>
        <p>Defence {defence}</p>
      </div>
      <div className={styles.unitsWrapper}>
        <div className={styles.unit}>
          <h3 className={styles.unitTitle}>Attacker</h3>
          <div className={styles.unitImage}>
            <FontAwesomeIcon className={styles.icon} icon={faSkull} />
          </div>
          <div className={styles.unitStats}>
            <p>Attack: 8</p>
            <p>Defence: 2</p>
            <p>Cost: 10</p>
            <p>Amount: 5</p>
          </div>
          <button className={styles.unitBuy}>Buy</button>
        </div>
        <div className={styles.unit}>
          <h3 className={styles.unitTitle}>Defender</h3>
          <div className={styles.unitImage}>
            <FontAwesomeIcon className={styles.icon} icon={faShield} />
          </div>
          <div className={styles.unitStats}>
            <p>Attack: 1</p>
            <p>Defence: 9</p>
            <p>Cost: 10</p>
            <p>Amount: 5</p>
          </div>
          <button className={styles.unitBuy}>Buy</button>
        </div>
        <div className={styles.unit}>
          <h3 className={styles.unitTitle}>Commander</h3>
          <div className={styles.unitImage}>
            <FontAwesomeIcon className={styles.icon} icon={faShieldHalved} />
          </div>
          <div className={styles.unitStats}>
            <p>Attack: +10%</p>
            <p>Defence: +20%</p>
            <p>Cost: 50</p>
            <p>Amount: 5</p>
          </div>
          <button className={styles.unitBuy}>Buy</button>
        </div>
        <div className={styles.unit}>
          <h3 className={styles.unitTitle}>Wizzard</h3>
          <div className={styles.unitImage}>
            <FontAwesomeIcon className={styles.icon} icon={faWandSparkles} />
          </div>
          <div className={styles.unitStats}>
            <p>Attack: +20%</p>
            <p>Defence: +10%</p>
            <p>Cost: 50</p>
            <p>Amount: 5</p>
          </div>
          <button className={styles.unitBuy}>Buy</button>
        </div>
      </div>
      <p className={styles.goldThisTurn}>Gold to spend this turn 100</p>
      <div className={styles.buttons}>
        <button className={styles.save} onClick={saveCamp}>
          Save
        </button>
        <button className={styles.cancel} onClick={cancelCamp}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default CampModal;
