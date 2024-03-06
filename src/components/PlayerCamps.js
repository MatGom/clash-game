import styles from './PlayerCamps.module.scss';

import Camp from './Camp';

const PlayerCamps = ({ playerId, camps, handleShowCampModal, handleCloseModal, activeModal }) => {
  return (
    <div className={styles.playerCamps}>
      {camps.map(camp => (
        <Camp
          key={camp.id}
          playerId={playerId}
          campId={camp.id}
          name={camp.name}
          handleShowCampModal={handleShowCampModal}
          handleCloseModal={handleCloseModal}
          activeModal={activeModal}
        />
      ))}
    </div>
  );
};

export default PlayerCamps;
