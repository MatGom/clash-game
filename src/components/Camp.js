import { useSelector } from 'react-redux';

import styles from './Camp.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCampground, faShield, faSkull } from '@fortawesome/free-solid-svg-icons';

import CampModal from './CampModal';

const Camp = ({ playerId, campId, name, handleShowCampModal, handleCloseModal, activeModal, currentPlayer }) => {
  const campAttack = useSelector(state => state.campStatsState.totalCampAttack[campId]);
  const campDefence = useSelector(state => state.campStatsState.totalCampDefence[campId]);

  return (
    <>
      <div className={`${styles.camp} camp`} onClick={() => handleShowCampModal(campId)}>
        <div className={styles.campImage}>
          <FontAwesomeIcon icon={faCampground} />
        </div>
        <div className={styles.campStats}>
          <div className={styles.campAttack}>
            <FontAwesomeIcon className={styles.campStatIcon} icon={faSkull} />
            <p className={styles.campStat}>{campAttack}</p>
          </div>
          <div className={styles.campDefence}>
            <FontAwesomeIcon className={styles.campStatIcon} icon={faShield} />
            <p className={styles.campStat}>{campDefence}</p>
          </div>
        </div>
      </div>
      {activeModal.type === 'camp' && activeModal.campId === campId && (
        <CampModal
          playerId={playerId}
          campId={campId}
          name={name}
          handleCloseModal={handleCloseModal}
          currentPlayer={currentPlayer}
        />
      )}
    </>
  );
};

export default Camp;
