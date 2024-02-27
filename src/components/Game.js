import styles from './Game.module.scss';

import Player from './Player';

const Game = () => {
  const players = [
    {
      id: 'playerOne',
      name: 'Player 1',
      playerClass: 'player-one',
      gold: 1000,
      level: 2,
      campStats: {
        campOne: {
          name: 'Camp 1',
          attack: 120,
          defence: 110,
        },
        campTwo: {
          name: 'Camp 2',
          attack: 70,
          defence: 100,
        },
        campThree: {
          name: 'Camp 3',
          attack: 110,
          defence: 80,
        },
      },
    },
    {
      id: 'playerTwo',
      name: 'Player 2',
      playerClass: 'player-two',
      gold: 1200,
      level: 1,
      campStats: {
        campOne: {
          name: 'Camp 1',
          attack: 80,
          defence: 110,
        },
        campTwo: {
          name: 'Camp 2',
          attack: 100,
          defence: 70,
        },
        campThree: {
          name: 'Camp 3',
          attack: 110,
          defence: 120,
        },
      },
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
          level={player.level}
          campStats={player.campStats}
        />
      ))}
    </div>
  );
};

export default Game;
