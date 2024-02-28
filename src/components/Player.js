import PlayerInfo from './PlayerInfo';
import PlayerCamps from './PlayerCamps';

const Player = ({ playerId, playerClass, name, gold, camps }) => {
  return (
    <div className={playerClass}>
      <PlayerInfo playerId={playerId} name={name} gold={gold} />
      <PlayerCamps playerId={playerId} camps={camps} />
    </div>
  );
};

export default Player;
