import { useSelector } from 'react-redux';

import styles from './Camp.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCampground, faShield, faSkull } from '@fortawesome/free-solid-svg-icons';

import CampModal from './Modal/CampModal';

const Camp = ({
  playerId,
  campId,
  name,
  handleShowCampModal,
  handleCloseModal,
  activeModal,
  currentPlayer,
  showBattleResults,
}) => {
  const campAttack = useSelector(state => state.campStatsState.totalCampAttack[campId]);
  const campDefence = useSelector(state => state.campStatsState.totalCampDefence[campId]);

  const isCampModalActive = activeModal.type === 'camp' && activeModal.campId === campId;

  return (
    <>
      <div
        className={`${styles.camp} camp ${
          currentPlayer === 'playerOne' && playerId === 'playerOne' ? styles.blueCamp : styles.redCamp
        } ${isCampModalActive ? styles.activeCamp : ''}`}
        onClick={() => {
          if (!showBattleResults) {
            handleShowCampModal(campId);
          }
        }}>
        <div className={styles.campIcon}>
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
      {isCampModalActive && (
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
