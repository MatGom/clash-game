import PlayerInfo from './PlayerInfo';
import PlayerCamps from './PlayerCamps';

const Player = ({
  playerClass,
  name,
  gold,
  level,
  campOneAttack,
  campOneDefence,
  campTwoAttack,
  campTwoDefence,
  campThreeAttack,
  campThreeDefence,
}) => {
  return (
    <div className={playerClass}>
      <PlayerInfo name={name} gold={gold} level={level} />
      <PlayerCamps
        campOneAttack={campOneAttack}
        campOneDefence={campOneDefence}
        campTwoAttack={campTwoAttack}
        campTwoDefence={campTwoDefence}
        campThreeAttack={campThreeAttack}
        campThreeDefence={campThreeDefence}
      />
    </div>
  );
};

export default Player;
