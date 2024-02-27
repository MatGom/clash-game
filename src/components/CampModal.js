import styles from './CampModal.module.scss';

import { units } from '../data/units-data';

import UnitCard from './UnitCard';

const CampModal = ({ saveCamp, cancelCamp, attack, defence, name }) => {
  return (
    <div className={styles.campModal}>
      <h2 className={styles.campName}>{name}</h2>
      <div className={styles.campStats}>
        <p>Attack {attack}</p>
        <p>Defence {defence}</p>
      </div>
      <div className={styles.unitsWrapper}>
        {units.map(unit => (
          <UnitCard
            key={unit.id}
            name={unit.name}
            icon={unit.icon}
            attack={unit.attack}
            defence={unit.defence}
            cost={unit.cost}
          />
        ))}
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
