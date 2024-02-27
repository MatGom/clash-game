import styles from './Game.module.scss';

import Player from './Player';

const Game = ({ playerOneName, playerTwoName }) => {
  const castle = {
    levelOne: 100,
    levelTwo: 150,
    levelThree: 200,
  };

  const players = [
    {
      id: 'playerOne',
      name: playerOneName,
      playerClass: 'player-one',
      gold: 1000,
      castleStats: {
        level: 2,
        gold: castle.levelTwo,
      },
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
      name: playerTwoName,
      playerClass: 'player-two',
      gold: 1200,
      castleStats: {
        level: 1,
        gold: castle.levelOne,
      },
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
          castleStats={player.castleStats}
          campStats={player.campStats}
        />
      ))}
    </div>
  );
};

export default Game;
