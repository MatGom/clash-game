import PlayerInfo from './PlayerInfo';
import PlayerCamps from './PlayerCamps';

const Player = ({ playerClass, name, gold, goldToSpendThisTurn, castle, camps }) => {
  return (
    <div className={playerClass}>
      <PlayerInfo name={name} gold={gold} goldToSpendThisTurn={goldToSpendThisTurn} castle={castle} />
      <PlayerCamps camps={camps} goldToSpendThisTurn={goldToSpendThisTurn} />
    </div>
  );
};

export default Player;
