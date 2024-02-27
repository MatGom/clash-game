import PlayerInfo from './PlayerInfo';
import PlayerCamps from './PlayerCamps';

const Player = ({ playerClass, name, gold, level, campStats }) => {
  return (
    <div className={playerClass}>
      <PlayerInfo name={name} gold={gold} level={level} />
      <PlayerCamps campStats={campStats} />
    </div>
  );
};

export default Player;
