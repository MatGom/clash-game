import styles from './Settings.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleQuestion, faGear } from '@fortawesome/free-solid-svg-icons';

import SettingsModal from './SettingsModal';
import Button from './UI/Button';

const Settings = ({ endTurn, restartGame, showRulesModal, showSettingsModal, closeModal, activeModal }) => {
  return (
    <>
      <div className={styles.settings}>
        <FontAwesomeIcon className={styles.rulesIcon} onClick={showRulesModal} icon={faCircleQuestion} />
        <Button theme='ruby' size='medium' onClick={endTurn}>
          End turn
        </Button>
        <FontAwesomeIcon className={styles.settingsIcon} onClick={showSettingsModal} icon={faGear} />
      </div>
      {activeModal.type === 'settings' && <SettingsModal closeModal={closeModal} restartGame={restartGame} />}
    </>
  );
};

export default Settings;
