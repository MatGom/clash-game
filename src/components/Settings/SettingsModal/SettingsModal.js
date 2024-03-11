import styles from './SettingsModal.module.scss';

import Button from '../../UI/Button';

const SettingsModal = ({ closeModal, restartGame }) => {
  return (
    <div className={styles.settingsModal}>
      <h2>Restart game?</h2>
      <div>
        <Button theme='emerald' size='medium' onClick={restartGame}>
          Yes
        </Button>
        <Button theme='ruby' size='medium' onClick={closeModal}>
          Cancel
        </Button>
      </div>
    </div>
  );
};

export default SettingsModal;
