import styles from './PlayerCamps.module.scss';

import Camp from './Camp';

const PlayerCamps = ({ campStats }) => {
  return (
    <div className={styles.playerCamps}>
      <Camp name={campStats.campOne.name} attack={campStats.campOne.attack} defence={campStats.campOne.defence} />
      <Camp name={campStats.campTwo.name} attack={campStats.campTwo.attack} defence={campStats.campTwo.defence} />
      <Camp name={campStats.campThree.name} attack={campStats.campThree.attack} defence={campStats.campThree.defence} />
    </div>
  );
};

export default PlayerCamps;
