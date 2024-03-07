import PlayerInfo from './PlayerInfo';
import PlayerCamps from './PlayerCamps';

const Player = ({
  playerId,
  playerClass,
  camps,
  handleShowCampModal,
  handleShowCastleModal,
  handleCloseModal,
  activeModal,
  currentPlayer,
}) => {
  return (
    <div className={playerClass}>
      <PlayerInfo
        playerId={playerId}
        handleShowCastleModal={handleShowCastleModal}
        handleCloseModal={handleCloseModal}
        activeModal={activeModal}
        currentPlayer={currentPlayer}
      />
      <PlayerCamps
        playerId={playerId}
        camps={camps}
        handleShowCampModal={handleShowCampModal}
        handleCloseModal={handleCloseModal}
        activeModal={activeModal}
        currentPlayer={currentPlayer}
      />
    </div>
  );
};

export default Player;
