import { useState } from 'react';

import styles from './PlayerInfo.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFortAwesome } from '@fortawesome/free-brands-svg-icons';
import { faCoins } from '@fortawesome/free-solid-svg-icons';

import CastleModal from './CastleModal';

const PlayerInfo = ({ name, gold, goldToSpendThisTurn, castle }) => {
  const [castleModalIsOpen, setCastleModalIsOpen] = useState(false);

  const handleShowCastleModal = () => {
    setCastleModalIsOpen(true);
  };

  const handleUpgradeCastleModal = () => {
    setCastleModalIsOpen(false);
  };

  const handleCancelCastleModal = () => {
    setCastleModalIsOpen(false);
  };

  return (
    <>
      <div className={styles.info}>
        <div className={styles.name}>{name}</div>
        <div className={styles.score}>
          <div className={styles.gold}>
            <FontAwesomeIcon className={styles.goldIcon} icon={faCoins} />
            <p className={styles.goldAmount}>{gold}</p>
          </div>
          <div className={styles.mine} onClick={handleShowCastleModal}>
            <FontAwesomeIcon className={styles.mineIcon} icon={faFortAwesome} />
            <p className={styles.mineLevel}>{castle.level}</p>
          </div>
        </div>
      </div>
      {castleModalIsOpen ? (
        <CastleModal
          goldToSpendThisTurn={goldToSpendThisTurn}
          castle={castle}
          upgradeCastle={handleUpgradeCastleModal}
          cancelCastle={handleCancelCastleModal}
        />
      ) : null}
    </>
  );
};

export default PlayerInfo;
