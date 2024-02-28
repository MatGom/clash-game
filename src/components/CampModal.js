import styles from './CampModal.module.scss';

import { units } from '../data/units-data';
import { useSelector } from 'react-redux';

import UnitCard from './UnitCard';

const CampModal = ({ playerId, campId, saveCamp, cancelCamp, name }) => {
  const campAttack = useSelector(state => state.totalCampAttack.totalCampAttack[campId]);
  const campDefence = useSelector(state => state.totalCampDefence.totalCampDefence[campId]);
  const goldToSpendThisTurn = useSelector(state => state.goldToSpendThisTurn.players[playerId]?.goldToSpendThisTurn);

  return (
    <div className={styles.campModal}>
      <h2 className={styles.campName}>{name}</h2>
      <div className={styles.campStats}>
        <p>Attack {campAttack}</p>
        <p>Defence {campDefence}</p>
      </div>
      <div className={styles.unitsWrapper}>
        {units.map(unit => (
          <UnitCard
            key={unit.id}
            playerId={playerId}
            unitId={unit.id}
            campId={campId}
            name={unit.name}
            icon={unit.icon}
            attack={unit.attack}
            defence={unit.defence}
            cost={unit.cost}
          />
        ))}
      </div>
      <p className={styles.goldThisTurn}>Gold to spend this turn {goldToSpendThisTurn}</p>
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
