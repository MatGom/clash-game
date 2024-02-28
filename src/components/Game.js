import styles from './Game.module.scss';

import { useSelector } from 'react-redux';

import Player from './Player';
import Settings from './Settings';

const Game = ({ playerOneName, playerTwoName, showRulesModal, endGame }) => {
  const { totalGold } = useSelector(state => state.totalGold);

  const players = [
    {
      id: 'playerOne',
      name: playerOneName,
      playerClass: 'player-one',
      gold: totalGold,
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
      playerClass: 'player-two',
      gold: totalGold,
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

  return (
    <div className={styles.game}>
      {players.map(player => (
        <Player
          key={player.id}
          playerId={player.id}
          playerClass={player.playerClass}
          name={player.name}
          gold={player.gold}
          camps={player.camps}
        />
      ))}
      <Settings showRulesModal={showRulesModal} endGame={endGame} />
    </div>
  );
};

export default Game;
