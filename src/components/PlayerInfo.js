import { useState } from 'react';

import styles from './PlayerInfo.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFortAwesome } from '@fortawesome/free-brands-svg-icons';
import { faCoins } from '@fortawesome/free-solid-svg-icons';

import { useDispatch, useSelector } from 'react-redux';
import { upgradeCastleLevel } from '../redux/castleLevel';
import { increaseGoldPerTurn } from '../redux/goldPerTurn';
import { upgradeGoldToSpendThisTurn } from '../redux/goldToSpendThisTurn';

import CastleModal from './CastleModal';

const PlayerInfo = ({ playerId, name, gold }) => {
  const [castleModalIsOpen, setCastleModalIsOpen] = useState(false);

  const castleLevel = useSelector(state => state.castleLevel.players[playerId]?.castleLevel || 1);
  const goldToSpendThisTurn = useSelector(
    state => state.goldToSpendThisTurn.players[playerId]?.goldToSpendThisTurn || 100
  );
  const dispatch = useDispatch();

  const handleShowCastleModal = () => {
    setCastleModalIsOpen(true);
  };

  const handleUpgradeCastleModal = playerId => {
    dispatch(upgradeCastleLevel({ playerId }));
    dispatch(increaseGoldPerTurn({ playerId }));
    dispatch(upgradeGoldToSpendThisTurn({ playerId }));
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
          <div className={styles.castle} onClick={handleShowCastleModal}>
            <FontAwesomeIcon className={styles.castleIcon} icon={faFortAwesome} />
            <p className={styles.castleLevel}>{castleLevel}</p>
          </div>
        </div>
      </div>
      {castleModalIsOpen ? (
        <CastleModal
          playerId={playerId}
          goldToSpendThisTurn={goldToSpendThisTurn}
          upgradeCastle={handleUpgradeCastleModal}
          cancelCastle={handleCancelCastleModal}
        />
      ) : null}
    </>
  );
};

export default PlayerInfo;
