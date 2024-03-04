import { useState, useEffect } from 'react';
import styles from './Game.module.scss';

import Player from './Player';
import Settings from './Settings';

import { useDispatch, useSelector } from 'react-redux';
import { resetGoldToSpendThisTurn } from '../redux/goldToSpendThisTurn';
import { updateTotalGold, transferGold } from '../redux/totalGold';

const Game = ({ playerOneName, playerTwoName, showRulesModal, endGame }) => {
  const [currentPlayer, setCurrentPlayer] = useState('playerOne');
  const [turnNumber, setTurnNumber] = useState(1);
  const [isTurnStart, setIsTurnStart] = useState(true);

  const dispatch = useDispatch();

  const playerOneGoldPerTurn = useSelector(state => state.goldPerTurn.players.playerOne.goldPerTurn);
  const playerTwoGoldPerTurn = useSelector(state => state.goldPerTurn.players.playerTwo.goldPerTurn);

  const playerOneTotalGold = useSelector(state => state.totalGold.players.playerOne.totalGold);
  const playerTwoTotalGold = useSelector(state => state.totalGold.players.playerTwo.totalGold);

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

  useEffect(() => {
    if (playerOneTotalGold <= 0) {
      alert(`${playerOneName} lost!`);
      endGame();
    } else if (playerTwoTotalGold <= 0) {
      alert(`${playerTwoName} lost!`);
      endGame();
    }
  }, [playerOneTotalGold, playerTwoTotalGold, playerOneName, playerTwoName, endGame]);

  const camps = {
    playerOne: [
      {
        totalAttack: useSelector(state => state.totalCampAttack.totalCampAttack.player1camp1),
        totalDefense: useSelector(state => state.totalCampDefence.totalCampDefence.player1camp1),
      },
      {
        totalAttack: useSelector(state => state.totalCampAttack.totalCampAttack.player1camp2),
        totalDefense: useSelector(state => state.totalCampDefence.totalCampDefence.player1camp2),
      },
      {
        totalAttack: useSelector(state => state.totalCampAttack.totalCampAttack.player1camp3),
        totalDefense: useSelector(state => state.totalCampDefence.totalCampDefence.player1camp3),
      },
    ],
    playerTwo: [
      {
        totalAttack: useSelector(state => state.totalCampAttack.totalCampAttack.player2camp1),
        totalDefense: useSelector(state => state.totalCampDefence.totalCampDefence.player2camp1),
      },
      {
        totalAttack: useSelector(state => state.totalCampAttack.totalCampAttack.player2camp2),
        totalDefense: useSelector(state => state.totalCampDefence.totalCampDefence.player2camp2),
      },
      {
        totalAttack: useSelector(state => state.totalCampAttack.totalCampAttack.player2camp3),
        totalDefense: useSelector(state => state.totalCampDefence.totalCampDefence.player2camp3),
      },
    ],
  };

  const performBattlePhase = () => {
    let playerOneVictories = 0;
    let playerTwoVictories = 0;

    camps.playerOne.forEach((camp, index) => {
      const opponentCamp = camps.playerTwo[index];
      if (camp.totalAttack > opponentCamp.totalDefense) {
        console.log(`Player One wins Camp ${index + 1}`);
        playerOneVictories += 1;
      } else if (opponentCamp.totalAttack > camp.totalDefense) {
        console.log(`Player Two wins Camp ${index + 1}`);
        playerTwoVictories += 1;
      } else {
        console.log(`Camp ${index + 1} is a draw`);
      }
    });

    const playerOneTransferPercentage = playerOneVictories * 10;
    const playerTwoTransferPercentage = playerTwoVictories * 10;

    if (playerOneVictories > playerTwoVictories) {
      const amountToTransfer = Math.round(playerTwoTotalGold * (playerOneTransferPercentage / 100));
      dispatch(transferGold({ winnerId: 'playerOne', loserId: 'playerTwo', amount: amountToTransfer }));
      console.log(`Player One Wins and takes ${playerOneTransferPercentage}% gold`);
    } else if (playerTwoVictories > playerOneVictories) {
      const amountToTransfer = Math.round(playerOneTotalGold * (playerTwoTransferPercentage / 100));
      dispatch(transferGold({ winnerId: 'playerTwo', loserId: 'playerOne', amount: amountToTransfer }));
      console.log(`Player Two Wins and takes ${playerTwoTransferPercentage}% gold`);
    } else {
      console.log('The overall battle phase ends in a draw');
    }
  };

  const handleStartTurn = () => {
    setIsTurnStart(false);
  };

  const handleEndTurn = () => {
    setIsTurnStart(true);

    const nextPlayerId = currentPlayer === 'playerOne' ? 'playerTwo' : 'playerOne';
    const nextPlayerGoldPerTurn = nextPlayerId === 'playerOne' ? playerOneGoldPerTurn : playerTwoGoldPerTurn;

    dispatch(resetGoldToSpendThisTurn({ playerId: nextPlayerId, goldPerTurn: nextPlayerGoldPerTurn }));

    if (currentPlayer === 'playerTwo' && turnNumber === 10) {
      endGame();
      return;
    }

    setCurrentPlayer(nextPlayerId);

    if (currentPlayer === 'playerTwo') {
      performBattlePhase();

      dispatch(updateTotalGold({ playerId: 'playerOne', goldPerTurn: playerOneGoldPerTurn }));
      dispatch(updateTotalGold({ playerId: 'playerTwo', goldPerTurn: playerTwoGoldPerTurn }));

      if (playerOneTotalGold <= 0 || playerTwoTotalGold <= 0) {
        endGame();
        return;
      }

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
