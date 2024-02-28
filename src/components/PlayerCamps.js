import styles from './PlayerCamps.module.scss';

import Camp from './Camp';

const PlayerCamps = ({ camps, goldToSpendThisTurn }) => {
  return (
    <div className={styles.playerCamps}>
      {camps.map(camp => (
        <Camp key={camp.id} campId={camp.id} name={camp.name} goldToSpendThisTurn={goldToSpendThisTurn} />
      ))}
    </div>
  );
};

export default PlayerCamps;
