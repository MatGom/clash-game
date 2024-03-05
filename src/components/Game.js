import { useState } from 'react';
import styles from './Game.module.scss';

import Player from './Player';
import Settings from './Settings';
import EndTurnScore from './EndTurnScore';
import GameResultsModal from './GameResultsModal';

import { useDispatch, useSelector } from 'react-redux';
import { updateTotalGold, transferGold, setGoldToSpendNextTurn } from '../redux/goldStateSlice';

import { settings } from '../data/settings';
import StartTurnModal from './StartTurnModal';

const Game = ({ playerOneName, playerTwoName, showRulesModal, endGame, resetGame }) => {
  const { loot } = settings;

  const [currentPlayer, setCurrentPlayer] = useState('playerOne');
  const [turnNumber, setTurnNumber] = useState(1);
  const [isTurnStart, setIsTurnStart] = useState(true);
  const [showBattleResults, setShowBattleResults] = useState(false);
  const [campOneWinner, setCampOneWinner] = useState('');
  const [campTwoWinner, setCampTwoWinner] = useState('');
  const [campThreeWinner, setCampThreeWinner] = useState('');
  const [endTurnOutcomeMessage, setEndTurnOutcomeMessage] = useState('');
  const [showInactiveOverlay, setShowInactiveOverlay] = useState(true);
  const [showGameResultsModal, setShowGameResultsModal] = useState(false);

  const dispatch = useDispatch();

  const playerOneGoldIncome = useSelector(state => state.goldState.players.playerOne.goldIncome);
  const playerTwoGoldIncome = useSelector(state => state.goldState.players.playerTwo.goldIncome);

  const playerOneTotalGold = useSelector(state => state.goldState.players.playerOne.totalGold);
  const playerTwoTotalGold = useSelector(state => state.goldState.players.playerTwo.totalGold);

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

  const camps = {
    playerOne: [
      {
        totalAttack: useSelector(state => state.campStatsState.totalCampAttack.player1camp1),
        totalDefence: useSelector(state => state.campStatsState.totalCampDefence.player1camp1),
      },
      {
        totalAttack: useSelector(state => state.campStatsState.totalCampAttack.player1camp2),
        totalDefence: useSelector(state => state.campStatsState.totalCampDefence.player1camp2),
      },
      {
        totalAttack: useSelector(state => state.campStatsState.totalCampAttack.player1camp3),
        totalDefence: useSelector(state => state.campStatsState.totalCampDefence.player1camp3),
      },
    ],
    playerTwo: [
      {
        totalAttack: useSelector(state => state.campStatsState.totalCampAttack.player2camp1),
        totalDefence: useSelector(state => state.campStatsState.totalCampDefence.player2camp1),
      },
      {
        totalAttack: useSelector(state => state.campStatsState.totalCampAttack.player2camp2),
        totalDefence: useSelector(state => state.campStatsState.totalCampDefence.player2camp2),
      },
      {
        totalAttack: useSelector(state => state.campStatsState.totalCampAttack.player2camp3),
        totalDefence: useSelector(state => state.campStatsState.totalCampDefence.player2camp3),
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
      if (camp.totalAttack > opponentCamp.totalDefence) {
        playerOneVictories += 1;
        if (index === 0) setCampOneWinner(playerOneName);
        else if (index === 1) setCampTwoWinner(playerOneName);
        else if (index === 2) setCampThreeWinner(playerOneName);
      } else if (opponentCamp.totalAttack > camp.totalDefence) {
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

    const playerOneTransferPercentage = playerOneVictories * loot.percent;
    const playerTwoTransferPercentage = playerTwoVictories * loot.percent;

    if (playerOneVictories > playerTwoVictories) {
      const amountToTransfer = Math.round(
        playerTwoTotalGold * ((playerOneTransferPercentage - playerTwoTransferPercentage) / 100)
      );
      dispatch(transferGold({ winnerId: 'playerOne', loserId: 'playerTwo', amount: amountToTransfer }));
      setEndTurnOutcomeMessage(
        `${playerOneName} wins and takes ${
          playerOneTransferPercentage - playerTwoTransferPercentage
        }% of opponents total gold`
      );
    } else if (playerTwoVictories > playerOneVictories) {
      const amountToTransfer = Math.round(
        playerOneTotalGold * ((playerTwoTransferPercentage - playerOneTransferPercentage) / 100)
      );
      dispatch(transferGold({ winnerId: 'playerTwo', loserId: 'playerOne', amount: amountToTransfer }));
      setEndTurnOutcomeMessage(
        `${playerTwoName} wins and takes ${
          playerTwoTransferPercentage - playerOneTransferPercentage
        }% of opponents total gold`
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

    dispatch(updateTotalGold({ playerId: 'playerOne', goldIncome: playerOneGoldIncome }));
    dispatch(updateTotalGold({ playerId: 'playerTwo', goldIncome: playerTwoGoldIncome }));

    dispatch(setGoldToSpendNextTurn({ playerId: 'playerOne' }));
    dispatch(setGoldToSpendNextTurn({ playerId: 'playerTwo' }));
  };

  const endTurn = () => {
    setIsTurnStart(true);

    const nextPlayerId = currentPlayer === 'playerOne' ? 'playerTwo' : 'playerOne';

    setCurrentPlayer(nextPlayerId);

    if (currentPlayer === 'playerTwo') {
      setShowInactiveOverlay(false);
      setIsTurnStart(false);
      performBattlePhase();
    }
  };

  const showGameResults = () => {
    setShowGameResultsModal(true);
  };

  const restartGame = () => {
    setShowGameResultsModal(false);
    resetGame();
  };

  return (
    <div className={`${styles.game} ${currentPlayer === 'playerOne' ? styles.playerOneTurn : styles.playerTwoTurn}`}>
      {showInactiveOverlay && <div className={styles.hideInactive}></div>}
      {isTurnStart ? (
        <StartTurnModal
          currentPlayer={currentPlayer}
          playerOneName={playerOneName}
          playerTwoName={playerTwoName}
          turnNumber={turnNumber}
          startCurrentTurn={startCurrentTurn}
        />
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
          showGameResults={showGameResults}
          startNextTurn={startNextTurn}
          campOneWinner={campOneWinner}
          campTwoWinner={campTwoWinner}
          campThreeWinner={campThreeWinner}
        />
      ) : (
        <Settings turnNumber={turnNumber} showRulesModal={showRulesModal} endGame={endGame} endTurn={endTurn} />
      )}
      {showGameResultsModal && (
        <GameResultsModal restartGame={restartGame} playerOneName={playerOneName} playerTwoName={playerTwoName} />
      )}
    </div>
  );
};

export default Game;
