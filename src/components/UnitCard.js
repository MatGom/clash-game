import styles from './UnitCard.module.scss';

import { useDispatch, useSelector } from 'react-redux';
import { incrementOwned } from '../redux/unitsOwned';
import { incrementAttack } from '../redux/totalCampAttack';
import { incrementDefence } from '../redux/totalCampDefence';

const UnitCard = ({ campId, unitId, name, icon, attack, defence, cost }) => {
  const unitsOwned = useSelector(state => state.unitsOwned.camps[campId]?.[unitId] || 0);

  const dispatch = useDispatch();

  const handleBuyUnit = () => {
    dispatch(incrementOwned({ campId, unitId }));
    dispatch(incrementAttack({ campId, attack }));
    dispatch(incrementDefence({ campId, defence }));
  };

  return (
    <div className={styles.unit}>
      <h3 className={styles.unitTitle}>{name}</h3>
      <div className={styles.unitImage}>{icon}</div>
      <div className={styles.unitStats}>
        <p>Attack: {attack}</p>
        <p>Defence: {defence}</p>
        <p>Cost: {cost}</p>
        <p>Owned: {unitsOwned}</p>
      </div>
      <button className={styles.unitBuy} onClick={handleBuyUnit}>
        Buy
      </button>
    </div>
  );
};

export default UnitCard;
