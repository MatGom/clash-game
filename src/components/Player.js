import PlayerInfo from './PlayerInfo';
import PlayerCamps from './PlayerCamps';

const Player = ({
  playerId,
  playerClass,
  name,
  camps,
  handleShowCampModal,
  handleShowCastleModal,
  handleCloseModal,
  activeModal,
}) => {
  return (
    <div className={playerClass}>
      <PlayerInfo
        playerId={playerId}
        name={name}
        handleShowCastleModal={handleShowCastleModal}
        handleCloseModal={handleCloseModal}
        activeModal={activeModal}
      />
      <PlayerCamps
        playerId={playerId}
        camps={camps}
        handleShowCampModal={handleShowCampModal}
        handleCloseModal={handleCloseModal}
        activeModal={activeModal}
      />
    </div>
  );
};

export default Player;
