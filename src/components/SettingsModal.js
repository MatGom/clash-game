import styles from './SettingsModal.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';

const SettingsModal = ({ closeSettingsModal, endGame }) => {
  return (
    <div className={styles.settingsModal}>
      <div className={styles.closeModal} onClick={closeSettingsModal}>
        <FontAwesomeIcon icon={faCircleXmark} />
      </div>
      <h2>Settings</h2>
      <button onClick={endGame}>End game</button>
    </div>
  );
};

export default SettingsModal;
