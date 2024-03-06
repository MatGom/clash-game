import styles from './CampModal.module.scss';

import { units } from '../data/units-data';
import { useSelector } from 'react-redux';

import UnitCard from './UnitCard';

const CampModal = ({ playerId, campId, name, handleCloseModal }) => {
  const campAttack = useSelector(state => state.campStatsState.totalCampAttack[campId]);
  const campDefence = useSelector(state => state.campStatsState.totalCampDefence[campId]);
  const goldToSpendThisTurn = useSelector(state => state.goldState.players[playerId]?.goldToSpendThisTurn);

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
        <button className={styles.close} onClick={handleCloseModal}>
          Close
        </button>
      </div>
    </div>
  );
};

export default CampModal;
