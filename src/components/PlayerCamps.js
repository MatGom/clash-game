import styles from './PlayerCamps.module.scss';

import Camp from './Camp';

const PlayerCamps = ({ playerId, camps }) => {
  return (
    <div className={styles.playerCamps}>
      {camps.map(camp => (
        <Camp
          key={camp.id}
          playerId={playerId}
          campId={camp.id}
          name={camp.name}
        />
      ))}
    </div>
  );
};

export default PlayerCamps;
