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
  showBattleResults,
}) => {
  return (
    <div className={playerClass}>
      <PlayerInfo
        playerId={playerId}
        handleShowCastleModal={handleShowCastleModal}
        handleCloseModal={handleCloseModal}
        activeModal={activeModal}
        currentPlayer={currentPlayer}
        showBattleResults={showBattleResults}
      />
      <PlayerCamps
        playerId={playerId}
        camps={camps}
        handleShowCampModal={handleShowCampModal}
        handleCloseModal={handleCloseModal}
        activeModal={activeModal}
        currentPlayer={currentPlayer}
        showBattleResults={showBattleResults}
      />
    </div>
  );
};

export default Player;
