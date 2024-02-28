import styles from './Game.module.scss';

import { useSelector } from 'react-redux';
import { useState } from 'react';

import Player from './Player';
import Settings from './Settings';

const Game = ({ playerOneName, playerTwoName, showRulesModal, endGame }) => {
  const { totalGold } = useSelector(state => state.totalGold);
  const { castleLevel } = useSelector(state => state.castleLevel);
  const { totalCampAttack } = useSelector(state => state.totalCampAttack);
  const { totalCampDefence } = useSelector(state => state.totalCampDefence);
  const { goldPerTurn } = useSelector(state => state.goldPerTurn);
  const [goldToSpendThisTurn, setGoldToSpendThisTurn] = useState(100);

  const players = [
    {
      id: 'playerOne',
      name: playerOneName,
      playerClass: 'player-one',
      gold: totalGold,
      goldToSpendThisTurn: goldToSpendThisTurn,
      castle: {
        level: castleLevel,
        gold: goldPerTurn,
      },
      camps: [
        {
          id: 'player1camp1',
          name: 'Camp 1',
          attack: totalCampAttack.player1camp1,
          defence: totalCampDefence.player1camp1,
        },
        {
          id: 'player1camp2',
          name: 'Camp 2',
          attack: totalCampAttack.player1camp2,
          defence: totalCampDefence.player1camp2,
        },
        {
          id: 'player1camp3',
          name: 'Camp 3',
          attack: totalCampAttack.player1camp3,
          defence: totalCampDefence.player1camp3,
        },
      ],
    },
    {
      id: 'playerTwo',
      name: playerTwoName,
      playerClass: 'player-two',
      gold: totalGold,
      goldToSpendThisTurn: goldToSpendThisTurn,
      castle: {
        level: castleLevel,
        gold: goldPerTurn,
      },
      camps: [
        {
          id: 'player2camp1',
          name: 'Camp 1',
          attack: totalCampAttack.player2camp1,
          defence: totalCampDefence.player2camp1,
        },
        {
          id: 'player2camp2',
          name: 'Camp 2',
          attack: totalCampAttack.player2camp2,
          defence: totalCampDefence.player2camp2,
        },
        {
          id: 'player2camp3',
          name: 'Camp 3',
          attack: totalCampAttack.player2camp3,
          defence: totalCampDefence.player2camp3,
        },
      ],
    },
  ];

  return (
    <div className={styles.game}>
      {players.map(player => (
        <Player
          key={player.id}
          playerClass={player.playerClass}
          name={player.name}
          gold={player.gold}
          goldToSpendThisTurn={player.goldToSpendThisTurn}
          castle={player.castle}
          camps={player.camps}
        />
      ))}
      <Settings showRulesModal={showRulesModal} endGame={endGame} />
    </div>
  );
};

export default Game;
