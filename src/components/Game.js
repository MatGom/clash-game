import styles from './Game.module.scss';

import Player from './Player';

const Game = () => {
  return (
    <div className={styles.game}>
      <Player
        playerClass={'player-one'}
        name={'Player 1'}
        gold={1000}
        level={2}
        campOneAttack={120}
        campOneDefence={110}
        campTwoAttack={70}
        campTwoDefence={100}
        campThreeAttack={110}
        campThreeDefence={80}
      />
      <Player
        playerClass={'player-two'}
        name={'Player 2'}
        gold={1200}
        level={1}
        campOneAttack={80}
        campOneDefence={110}
        campTwoAttack={100}
        campTwoDefence={70}
        campThreeAttack={110}
        campThreeDefence={120}
      />
    </div>
  );
};

export default Game;
