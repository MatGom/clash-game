import styles from './CampModal.module.scss';

import { units } from '../data/units-data';
import { useSelector } from 'react-redux';

import UnitCard from './UnitCard';
import Button from './UI/Button';

const CampModal = ({ playerId, campId, name, handleCloseModal, currentPlayer }) => {
  const campAttack = useSelector(state => state.campStatsState.totalCampAttack[campId]);
  const campDefence = useSelector(state => state.campStatsState.totalCampDefence[campId]);
  const goldToSpendThisTurn = useSelector(state => state.goldState.players[playerId]?.goldToSpendThisTurn);

  return (
    <div
      className={`${styles.campModal} ${
        currentPlayer === 'playerOne' && playerId === 'playerOne' ? styles.blue : styles.red
      }`}>
      <h2 className={styles.campName}>{name}</h2>
      <div className={styles.campStats}>
        <p className={styles.attack}>Attack {campAttack}</p>
        <p className={styles.defence}>Defence {campDefence}</p>
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
            currentPlayer={currentPlayer}
          />
        ))}
      </div>
      <p className={styles.goldToSpendThisTurn}>Gold to spend this turn {goldToSpendThisTurn}</p>
      <Button theme='ruby' size='small' onClick={handleCloseModal}>
        Close
      </Button>
    </div>
  );
};

export default CampModal;
