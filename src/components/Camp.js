import { useState } from 'react';
import { useSelector } from 'react-redux';

import styles from './Camp.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCampground, faShield, faSkull } from '@fortawesome/free-solid-svg-icons';

import CampModal from './CampModal';

const Camp = ({ campId, name, goldToSpendThisTurn }) => {
  const [campModalIsOpen, setCampModalIsOpen] = useState(false);

  const campAttack = useSelector(state => state.totalCampAttack.totalCampAttack[campId]);
  const campDefence = useSelector(state => state.totalCampDefence.totalCampDefence[campId]);

  const handleShowCampModal = () => {
    setCampModalIsOpen(true);
  };

  const handleSaveCampModal = () => {
    setCampModalIsOpen(false);
  };

  const handleCancelCampModal = () => {
    setCampModalIsOpen(false);
  };

  return (
    <>
      <div className={`${styles.camp} camp`} onClick={handleShowCampModal}>
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
      {campModalIsOpen ? (
        <CampModal
          campId={campId}
          name={name}
          saveCamp={handleSaveCampModal}
          cancelCamp={handleCancelCampModal}
          goldToSpendThisTurn={goldToSpendThisTurn}
        />
      ) : null}
    </>
  );
};

export default Camp;
