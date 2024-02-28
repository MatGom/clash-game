import PlayerInfo from './PlayerInfo';
import PlayerCamps from './PlayerCamps';

const Player = ({ playerId, playerClass, name, camps }) => {
  return (
    <div className={playerClass}>
      <PlayerInfo playerId={playerId} name={name} />
      <PlayerCamps playerId={playerId} camps={camps} />
    </div>
  );
};

export default Player;
