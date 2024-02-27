import { useSelector } from 'react-redux';
import styles from './Game.module.scss';

import Player from './Player';
import Settings from './Settings';

const Game = ({ playerOneName, playerTwoName, showRulesModal, endGame }) => {
  const { totalGold } = useSelector(state => state.totalGold);
  const { castleLevel } = useSelector(state => state.castleLevel);
  const { totalCampAttack } = useSelector(state => state.totalCampAttack);
  const { totalCampDefence } = useSelector(state => state.totalCampDefence);
  const { goldPerTurn } = useSelector(state => state.goldPerTurn);

  const players = [
    {
      id: 'playerOne',
      name: playerOneName,
      playerClass: 'player-one',
      gold: totalGold,
      castleStats: {
        level: castleLevel,
        gold: goldPerTurn,
      },
      campStats: {
        campOne: {
          name: 'Camp 1',
          attack: totalCampAttack,
          defence: totalCampDefence,
        },
        campTwo: {
          name: 'Camp 2',
          attack: totalCampAttack,
          defence: totalCampDefence,
        },
        campThree: {
          name: 'Camp 3',
          attack: totalCampAttack,
          defence: totalCampDefence,
        },
      },
    },
    {
      id: 'playerTwo',
      name: playerTwoName,
      playerClass: 'player-two',
      gold: totalGold,
      castleStats: {
        level: castleLevel,
        gold: goldPerTurn,
      },
      campStats: {
        campOne: {
          name: 'Camp 1',
          attack: totalCampAttack,
          defence: totalCampDefence,
        },
        campTwo: {
          name: 'Camp 2',
          attack: totalCampAttack,
          defence: totalCampDefence,
        },
        campThree: {
          name: 'Camp 3',
          attack: totalCampAttack,
          defence: totalCampDefence,
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
      <Settings showRulesModal={showRulesModal} endGame={endGame} />
    </div>
  );
};

export default Game;
