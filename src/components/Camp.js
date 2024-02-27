import { useState } from 'react';

import styles from './Camp.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCampground, faShield, faSkull } from '@fortawesome/free-solid-svg-icons';

import CampModal from './CampModal';

const Camp = ({ name, attack, defence }) => {
  const [campModalIsOpen, setCampModalIsOpen] = useState(false);

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
            <p className={styles.campStat}>{attack}</p>
          </div>
          <div className={styles.campDefence}>
            <FontAwesomeIcon className={styles.campStatIcon} icon={faShield} />
            <p className={styles.campStat}>{defence}</p>
          </div>
        </div>
      </div>
      {campModalIsOpen ? (
        <CampModal
          name={name}
          attack={attack}
          defence={defence}
          saveCamp={handleSaveCampModal}
          cancelCamp={handleCancelCampModal}
        />
      ) : null}
    </>
  );
};

export default Camp;
