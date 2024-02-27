import styles from './UnitCard.module.scss';

import { useSelector } from 'react-redux';

const UnitCard = ({ name, icon, attack, defence, cost }) => {
  const { unitsOwned } = useSelector(state => state.unitsOwned);

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
      <button className={styles.unitBuy}>Buy</button>
    </div>
  );
};

export default UnitCard;
