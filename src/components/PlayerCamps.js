import styles from './PlayerCamps.module.scss';

import Camp from './Camp';

const PlayerCamps = ({
  campOneAttack,
  campOneDefence,
  campTwoAttack,
  campTwoDefence,
  campThreeAttack,
  campThreeDefence,
}) => {
  return (
    <div className={styles.playerCamps}>
      <Camp attack={campOneAttack} defence={campOneDefence} />
      <Camp attack={campTwoAttack} defence={campTwoDefence} />
      <Camp attack={campThreeAttack} defence={campThreeDefence} />
    </div>
  );
};

export default PlayerCamps;
