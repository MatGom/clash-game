import PlayerInfo from './PlayerInfo';
import PlayerCamps from './PlayerCamps';

const Player = ({ playerClass, name, gold, castleStats, campStats }) => {
  return (
    <div className={playerClass}>
      <PlayerInfo name={name} gold={gold} castleStats={castleStats} />
      <PlayerCamps campStats={campStats} />
    </div>
  );
};

export default Player;
