import styles from './UnitCard.module.scss';

import Button from '../../../../UI/Button';

import { useDispatch, useSelector } from 'react-redux';
import { increaseOwned } from '../../../../../redux/unitsOwnedStateSlice';
import { increaseAttack, increaseDefence } from '../../../../../redux/campStatsStateSlice';
import { decreaseTotalGold, decreaseGoldToSpendThisTurn } from '../../../../../redux/goldStateSlice';

const UnitCard = ({ playerId, campId, unitId, name, icon, attack, defence, cost, currentPlayer }) => {
  const unitsOwned = useSelector(state => state.unitsOwnedState.camps[campId]?.[unitId]) || 0;
  const goldToSpendThisTurn = useSelector(state => state.goldState.players[playerId]?.goldToSpendThisTurn);

  const dispatch = useDispatch();

  const handleBuyUnit = () => {
    if (goldToSpendThisTurn >= cost) {
      dispatch(decreaseGoldToSpendThisTurn({ playerId, amount: cost }));
      dispatch(decreaseTotalGold({ playerId, amount: cost }));
      dispatch(increaseOwned({ campId, unitId }));
      dispatch(increaseAttack({ campId, attack }));
      dispatch(increaseDefence({ campId, defence }));
    } else {
      return;
    }
  };

  return (
    <div
      className={`${styles.unitCard} ${
        currentPlayer === 'playerOne' && playerId === 'playerOne' ? styles.unitCardBorderBlue : styles.unitCardBorderRed
      }`}>
      <h3 className={styles.unitCardTitle}>{name}</h3>
      <div className={styles.unitCardIcon}>{icon}</div>
      <div className={styles.unitCardStats}>
        <p>Attack: {attack}</p>
        <p>Defence: {defence}</p>
        <p>Cost: {cost}</p>
        <p>Owned: {unitsOwned}</p>
      </div>
      <Button
        disabled={goldToSpendThisTurn < cost}
        theme={goldToSpendThisTurn < cost ? 'disabled' : 'emerald'}
        size='extra-small'
        onClick={handleBuyUnit}>
        Train
      </Button>
    </div>
  );
};

export default UnitCard;
