import { useState, useEffect } from 'react';
import styles from './Game.module.scss';

import Player from './Player';
import Settings from './Settings';
import EndTurnScore from './EndTurnScore';

import { useDispatch, useSelector } from 'react-redux';
import { resetGoldToSpendThisTurn } from '../redux/goldToSpendThisTurn';
import { updateTotalGold, transferGold } from '../redux/totalGold';

const Game = ({ playerOneName, playerTwoName, showRulesModal, endGame }) => {
  const [currentPlayer, setCurrentPlayer] = useState('playerOne');
  const [turnNumber, setTurnNumber] = useState(1);
  const [isTurnStart, setIsTurnStart] = useState(true);
  const [showBattleResults, setShowBattleResults] = useState(false);
  const [campOneWinner, setCampOneWinner] = useState('');
  const [campTwoWinner, setCampTwoWinner] = useState('');
  const [campThreeWinner, setCampThreeWinner] = useState('');
  const [endTurnOutcomeMessage, setEndTurnOutcomeMessage] = useState('');

  const [showInactiveOverlay, setShowInactiveOverlay] = useState(true);

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

    setCampOneWinner('');
    setCampTwoWinner('');
    setCampThreeWinner('');

    camps.playerOne.forEach((camp, index) => {
      const opponentCamp = camps.playerTwo[index];
      if (camp.totalAttack > opponentCamp.totalDefense) {
        playerOneVictories += 1;
        if (index === 0) setCampOneWinner(playerOneName);
        else if (index === 1) setCampTwoWinner(playerOneName);
        else if (index === 2) setCampThreeWinner(playerOneName);
      } else if (opponentCamp.totalAttack > camp.totalDefense) {
        playerTwoVictories += 1;
        if (index === 0) setCampOneWinner(playerTwoName);
        else if (index === 1) setCampTwoWinner(playerTwoName);
        else if (index === 2) setCampThreeWinner(playerTwoName);
      } else {
        if (index === 0) setCampOneWinner('Draw');
        else if (index === 1) setCampTwoWinner('Draw');
        else if (index === 2) setCampThreeWinner('Draw');
      }
    });

    const playerOneTransferPercentage = playerOneVictories * 10;
    const playerTwoTransferPercentage = playerTwoVictories * 10;

    if (playerOneVictories > playerTwoVictories) {
      const amountToTransfer = Math.round(playerTwoTotalGold * (playerOneTransferPercentage / 100));
      dispatch(transferGold({ winnerId: 'playerOne', loserId: 'playerTwo', amount: amountToTransfer }));
      setEndTurnOutcomeMessage(
        `${playerOneName} wins and takes ${playerOneTransferPercentage}% of opponents total gold`
      );
    } else if (playerTwoVictories > playerOneVictories) {
      const amountToTransfer = Math.round(playerOneTotalGold * (playerTwoTransferPercentage / 100));
      dispatch(transferGold({ winnerId: 'playerTwo', loserId: 'playerOne', amount: amountToTransfer }));
      setEndTurnOutcomeMessage(
        `${playerTwoName} wins and takes ${playerTwoTransferPercentage}% of opponents total gold`
      );
    } else {
      setEndTurnOutcomeMessage('The battle ended in a draw');
    }

    setShowBattleResults(true);
  };

  const startCurrentTurn = () => {
    setIsTurnStart(false);
  };

  const startNextTurn = () => {
    setShowBattleResults(false);
    setShowInactiveOverlay(true);
    setIsTurnStart(true);

    setTurnNumber(prevTurnNumber => prevTurnNumber + 1);

    setCurrentPlayer('playerOne');

    dispatch(updateTotalGold({ playerId: 'playerOne', goldPerTurn: playerOneGoldPerTurn }));
    dispatch(updateTotalGold({ playerId: 'playerTwo', goldPerTurn: playerTwoGoldPerTurn }));
  };

  const endTurn = () => {
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
      setShowInactiveOverlay(false);
      setIsTurnStart(false);
      performBattlePhase();

      if (playerOneTotalGold <= 0 || playerTwoTotalGold <= 0) {
        endGame();
        return;
      }
    }
  };

  return (
    <div className={`${styles.game} ${currentPlayer === 'playerOne' ? styles.playerOneTurn : styles.playerTwoTurn}`}>
      {showInactiveOverlay && <div className={styles.hideInactive}></div>}
      {isTurnStart ? (
        <div className={styles.playerTurn}>
          <h2>{currentPlayer === 'playerOne' ? playerOneName : playerTwoName}</h2>
          <p>Turn {turnNumber}</p>
          <button className={styles.startTurnButton} onClick={startCurrentTurn}>
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
      {showBattleResults ? (
        <EndTurnScore
          endTurnOutcomeMessage={endTurnOutcomeMessage}
          turnNumber={turnNumber}
          startNextTurn={startNextTurn}
          campOneWinner={campOneWinner}
          campTwoWinner={campTwoWinner}
          campThreeWinner={campThreeWinner}
        />
      ) : (
        <Settings turnNumber={turnNumber} showRulesModal={showRulesModal} endGame={endGame} endTurn={endTurn} />
      )}
    </div>
  );
};

export default Game;
