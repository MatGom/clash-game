import { useState } from 'react';

import styles from './PlayerInfo.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFortAwesome } from '@fortawesome/free-brands-svg-icons';
import { faCoins } from '@fortawesome/free-solid-svg-icons';

import { useDispatch, useSelector } from 'react-redux';
import { upgradeGoldPerTurn } from '../redux/goldPerTurn';
import { decreaseTotalGold } from '../redux/totalGold';
import { upgradeGoldToSpendNextTurn, decreaseGoldToSpendThisTurn } from '../redux/goldToSpendPerTurn';

import { increaseCastleCost, upgradeCastleLevel } from '../redux/castleStateSlice';

import CastleModal from './CastleModal';

const PlayerInfo = ({ playerId, name }) => {
  const [castleModalIsOpen, setCastleModalIsOpen] = useState(false);

  const castleLevel = useSelector(state => state.castleState.players[playerId]?.castleLevel);
  const castleCost = useSelector(state => state.castleState.players[playerId]?.castleCost);
  const goldToSpendThisTurn = useSelector(state => state.goldToSpendPerTurn.players[playerId]?.goldToSpendThisTurn);
  const totalGold = useSelector(state => state.totalGold.players[playerId]?.totalGold);
  const dispatch = useDispatch();

  const handleShowCastleModal = () => {
    setCastleModalIsOpen(true);
  };

  const handleUpgradeCastleModal = playerId => {
    if (goldToSpendThisTurn >= castleCost) {
      dispatch(increaseCastleCost({ playerId }));
      dispatch(decreaseGoldToSpendThisTurn({ playerId, amount: castleCost }));
      dispatch(decreaseTotalGold({ playerId, amount: castleCost }));
      dispatch(upgradeCastleLevel({ playerId }));
      dispatch(upgradeGoldPerTurn({ playerId }));
      dispatch(upgradeGoldToSpendNextTurn({ playerId }));
    } else {
      alert('No more gold!');
    }
  };

  const handleCloseCastleModal = () => {
    setCastleModalIsOpen(false);
  };

  return (
    <>
      <div className={styles.info}>
        <div className={styles.name}>{name}</div>
        <div className={styles.score}>
          <div className={styles.gold}>
            <FontAwesomeIcon className={styles.goldIcon} icon={faCoins} />
            <p className={styles.goldAmount}>{totalGold}</p>
          </div>
          <div className={styles.castle} onClick={handleShowCastleModal}>
            <FontAwesomeIcon className={styles.castleIcon} icon={faFortAwesome} />
            <p className={styles.castleLevel}>{castleLevel}</p>
          </div>
        </div>
      </div>
      {castleModalIsOpen ? (
        <CastleModal
          castleCost={castleCost}
          playerId={playerId}
          goldToSpendThisTurn={goldToSpendThisTurn}
          upgradeCastle={handleUpgradeCastleModal}
          closeCastle={handleCloseCastleModal}
        />
      ) : null}
    </>
  );
};

export default PlayerInfo;
