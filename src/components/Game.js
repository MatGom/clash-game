import { useState } from 'react';
import styles from './Game.module.scss';

import Player from './Player';
import Settings from './Settings';

const Game = ({ playerOneName, playerTwoName, showRulesModal, endGame }) => {
  const [currentPlayer, setCurrentPlayer] = useState('playerOne');
  const [turnNumber, setTurnNumber] = useState(1);
  const [isTurnStart, setIsTurnStart] = useState(true);

  let playerOneClasses;
  let playerTwoClasses;

  if (currentPlayer === 'playerOne') {
    playerOneClasses = 'player';
    playerTwoClasses = `${'player'} ${'player-inactive'}`;
  } else if (currentPlayer === 'playerTwo') {
    playerOneClasses = `${'player'} ${'player-inactive'}`;
    playerTwoClasses = 'player';
  }

  const players = [
    {
      id: 'playerOne',
      name: playerOneName,
      playerClass: playerOneClasses,
      camps: [
        {
          id: 'player1camp1',
          name: 'Camp 1',
        },
        {
          id: 'player1camp2',
          name: 'Camp 2',
        },
        {
          id: 'player1camp3',
          name: 'Camp 3',
        },
      ],
    },
    {
      id: 'playerTwo',
      name: playerTwoName,
      playerClass: playerTwoClasses,
      camps: [
        {
          id: 'player2camp1',
          name: 'Camp 1',
        },
        {
          id: 'player2camp2',
          name: 'Camp 2',
        },
        {
          id: 'player2camp3',
          name: 'Camp 3',
        },
      ],
    },
  ];

  const handleStartTurn = () => {
    setIsTurnStart(false);
  };

  const handleEndTurn = () => {
    setIsTurnStart(true);

    if (currentPlayer === 'playerTwo' && turnNumber === 10) {
      endGame();
      return;
    }

    setCurrentPlayer(current => (current === 'playerOne' ? 'playerTwo' : 'playerOne'));

    if (currentPlayer === 'playerTwo') {
      setTurnNumber(turn => turn + 1);
    }
  };

  return (
    <div className={`${styles.game} ${currentPlayer === 'playerOne' ? styles.playerOneTurn : styles.playerTwoTurn}`}>
      <div className={styles.hideInactive}></div>
      {isTurnStart ? (
        <div className={styles.playerTurn}>
          <h2>{currentPlayer === 'playerOne' ? playerOneName : playerTwoName}</h2>
          <p>Turn {turnNumber}</p>
          <button className={styles.startTurnButton} onClick={handleStartTurn}>
            Start
          </button>
        </div>
      ) : null}
      {players.map(player => (
        <Player
          key={player.id}
          playerId={player.id}
          playerClass={player.playerClass}
          name={player.name}
          camps={player.camps}
        />
      ))}
      <Settings
        turnNumber={turnNumber}
        showRulesModal={showRulesModal}
        endGame={endGame}
        handleEndTurn={handleEndTurn}
      />
    </div>
  );
};

export default Game;
