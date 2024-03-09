import { useState } from 'react';
import { useDispatch } from 'react-redux';

import styles from './Start.module.scss';

import Game from './Game';
import RulesModal from './RulesModal';
import Button from './UI/Button';

import { resetCastle } from '../redux/castleStateSlice';
import { resetGold } from '../redux/goldStateSlice';
import { resetCampStats } from '../redux/campStatsStateSlice';
import { resetUnitsOwned } from '../redux/unitsOwnedStateSlice';

const Start = () => {
  const [gameIsOn, setGameIsOn] = useState(false);
  const [playerOneName, setPlayerOneName] = useState('');
  const [playerTwoName, setPlayerTwoName] = useState('');
  const [rulesModalIsOpen, setRulesModalIsOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  const dispatch = useDispatch();

  const handleStartGame = () => {
    if (playerOneName.trim().length >= 1 && playerTwoName.trim().length >= 1) {
      setErrorMessage(false);
      setGameIsOn(true);
    } else {
      setErrorMessage(true);
      return;
    }
  };

  const resetGame = () => {
    setPlayerOneName('');
    setPlayerTwoName('');
    setRulesModalIsOpen(false);

    dispatch(resetCastle());
    dispatch(resetGold());
    dispatch(resetCampStats());
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
          <Button theme='sapphire' size='medium' onClick={handleShowRulesModal}>
            Rules
          </Button>
          <form className={styles.playersSettings}>
            <p className={styles.playersNames}>Enter player's names</p>
            {!errorMessage ? (
              <p className={styles.playersMessage}>Maximum 10 characters</p>
            ) : (
              <p className={styles.playersErrorMessage}>Enter both names</p>
            )}
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
          <Button theme='emerald' size='large' onClick={handleStartGame}>
            Start
          </Button>
        </div>
      ) : (
        <Game
          playerOneName={playerOneName}
          playerTwoName={playerTwoName}
          showRulesModal={handleShowRulesModal}
          resetGame={resetGame}
        />
      )}
      {rulesModalIsOpen ? <RulesModal closeModal={handleCloseRulesModal} /> : null}
    </>
  );
};

export default Start;
