import { useState } from 'react';

import styles from './Start.module.scss';

import Game from './Game';

const Start = () => {
  const [gameIsOn, setGameIsOn] = useState(false);
  const [playerOneName, setPlayerOneName] = useState('');
  const [playerTwoName, setPlayerTwoName] = useState('');

  const handleStartGame = () => {
    if (playerOneName.trim().length >= 3 && playerTwoName.trim().length >= 3) {
      setGameIsOn(true);
    } else {
      alert('Please enter names for both players to start the game.');
    }
  };

  return (
    <>
      {!gameIsOn ? (
        <div className={styles.start}>
          <h1 className={styles.gameTitle}>Clash Game</h1>
          <button className={styles.gameRulesButton}>Rules</button>
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
        <Game playerOneName={playerOneName} playerTwoName={playerTwoName} />
      )}
    </>
  );
};

export default Start;