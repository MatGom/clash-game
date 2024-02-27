import styles from './Settings.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleQuestion, faGear } from '@fortawesome/free-solid-svg-icons';

const Settings = ({ showRulesModal }) => {
  return (
    <div className={styles.settings}>
      <FontAwesomeIcon className={styles.rulesIcon} onClick={showRulesModal} icon={faCircleQuestion} />
      <button className={styles.endTurnButton}>End turn</button>
      <FontAwesomeIcon className={styles.settingsIcon} icon={faGear} />
    </div>
  );
};

export default Settings;
