import { useState } from 'react';
import { useDispatch } from 'react-redux';

import styles from './Start.module.scss';

import Game from './Game';
import RulesModal from './RulesModal';
import { resetCastleCost } from '../redux/castleCost';
import { resetCastleLevel } from '../redux/castleLevel';
import { resetGoldPerTurn } from '../redux/goldPerTurn';
import { resetGoldToSpendPerTurn } from '../redux/goldToSpendPerTurn';
import { resetTotalCampAttack } from '../redux/totalCampAttack';
import { resetTotalCampDefence } from '../redux/totalCampDefence';
import { resetTotalGold } from '../redux/totalGold';
import { resetUnitsOwned } from '../redux/unitsOwned';

const Start = () => {
  const [gameIsOn, setGameIsOn] = useState(false);
  const [playerOneName, setPlayerOneName] = useState('');
  const [playerTwoName, setPlayerTwoName] = useState('');
  const [rulesModalIsOpen, setRulesModalIsOpen] = useState(false);

  const dispatch = useDispatch();

  const handleStartGame = () => {
    if (playerOneName.trim().length >= 3 && playerTwoName.trim().length >= 3) {
      setGameIsOn(true);
    } else {
      alert('Please enter names for both players to start the game.');
    }
  };

  const handleEndGame = () => {
    alert('Game Over! Thanks for playing.');
    setGameIsOn(false);
  };

  const resetGame = () => {
    setPlayerOneName('');
    setPlayerTwoName('');
    setRulesModalIsOpen(false);

    dispatch(resetCastleCost());
    dispatch(resetCastleLevel());
    dispatch(resetGoldPerTurn());
    dispatch(resetGoldToSpendPerTurn());
    dispatch(resetTotalCampAttack());
    dispatch(resetTotalCampDefence());
    dispatch(resetTotalGold());
    dispatch(resetUnitsOwned());
    setGameIsOn(false);
  };

  const handleShowRulesModal = () => {
    setRulesModalIsOpen(true);
  };

  const handleCloseRulesModal = () => {
    setRulesModalIsOpen(false);
  };

  return (
    <>
      {!gameIsOn ? (
        <div className={styles.start}>
          <h1 className={styles.gameTitle}>Clash Game</h1>
          <button className={styles.gameRulesButton} onClick={handleShowRulesModal}>
            Rules
          </button>
          <form className={styles.playersSettings}>
            <label className={styles.playersNames}>Enter player's names</label>
            <input
              type='text'
              minLength='3'
              maxLength='10'
              placeholder='Player 1'
              value={playerOneName}
              onChange={event => setPlayerOneName(event.target.value)}
            />
            <input
              type='text'
              minLength='3'
              maxLength='10'
              placeholder='Player 2'
              value={playerTwoName}
              onChange={event => setPlayerTwoName(event.target.value)}
            />
          </form>
          <button className={styles.gameStartButton} onClick={handleStartGame}>
            Start
          </button>
        </div>
      ) : (
        <Game
          playerOneName={playerOneName}
          playerTwoName={playerTwoName}
          showRulesModal={handleShowRulesModal}
          endGame={handleEndGame}
          resetGame={resetGame}
        />
      )}
      {rulesModalIsOpen ? <RulesModal closeModal={handleCloseRulesModal} /> : null}
    </>
  );
};

export default Start;
