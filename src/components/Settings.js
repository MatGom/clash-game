import { useState } from 'react';

import styles from './Settings.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleQuestion, faGear } from '@fortawesome/free-solid-svg-icons';

import SettingsModal from './SettingsModal';
import Button from './UI/Button';

const Settings = ({ turnNumber, endTurn, showRulesModal, endGame }) => {
  const [settingsModalIsOpen, setSettingsModalIsOpen] = useState(false);

  const handleShowSettingsModal = () => {
    setSettingsModalIsOpen(true);
  };

  const handleCloseSettingsModal = () => {
    setSettingsModalIsOpen(false);
  };

  return (
    <>
      <div className={styles.settings}>
        <FontAwesomeIcon className={styles.rulesIcon} onClick={showRulesModal} icon={faCircleQuestion} />
        <Button theme='ruby' size='medium' onClick={endTurn}>
          End turn {turnNumber}
        </Button>
        <FontAwesomeIcon className={styles.settingsIcon} onClick={handleShowSettingsModal} icon={faGear} />
      </div>
      {settingsModalIsOpen ? <SettingsModal closeSettingsModal={handleCloseSettingsModal} endGame={endGame} /> : null}
    </>
  );
};

export default Settings;
