import styles from './RulesModal.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';

import { settings } from '../data/settings';

const RulesModal = ({ closeModal }) => {
  return (
    <div className={styles.rulesModal}>
      <div className={styles.rulesModalRules}>
        <h2 className={styles.rulesTitle}>Clash Game</h2>
        <h3 className={styles.rulesSubtitle}>A Strategy Game for Two Players</h3>
        <p>
          Welcome to Clash Game, a strategic contest designed for two players. Prepare to enter your names and embark on
          a turn-based journey where player one kicks off the game. Navigate through resource management, castle
          upgrades, and intense battles to emerge victorious.
        </p>

        <h3 className={styles.rulesSubtitle}>Game Resources</h3>
        <ul>
          <li>
            <strong>Starting Conditions</strong>
            <p>
              Each player begins with {settings.gold.total.initial} gold and a spending limit of{' '}
              {settings.gold.limit.thisTurn.initial} gold per turn.
            </p>
          </li>
          <li>
            <strong>Assets</strong> <p>Every player owns a castle and three military camps.</p>
          </li>
        </ul>

        <h3 className={styles.rulesSubtitle}>Turn Phase</h3>
        <p>The game unfolds in turns, starting with player one. During your turn, you have several options:</p>
        <ul>
          <li>
            <strong>Upgrade the Castle</strong>
            <p>
              Upgrade your castle to boost gold income by {settings.gold.income.increaseBy} and increase your spending
              limit by {settings.gold.limit.nextTurn.increaseBy} gold per turn, starting from the next round.
            </p>
          </li>
          <li>
            <strong>Train Units in Camps</strong>
            <p>
              Improve your camps' total attack and defense stats. Note: Opponents' camp stats remain hidden during this
              phase.
            </p>
          </li>
        </ul>
        <p>
          After completing a turn, the next player takes their turn. When both players have acted,
          battle phase begins.
        </p>

        <h3 className={styles.rulesSubtitle}>Battle Phase</h3>
        <p>
          As the battle commences, all camp stats are revealed. Each camp from one player faces off against the
          corresponding camp of the other player.
        </p>
        <ul>
          <li>
            <strong>Victory Conditions</strong>
            <p>
              To win a camp clash, a player's units in a camp must have higher attack than the opponent's defense and at
              least equal defense against the opponent's attack. Failing to meet these conditions results in a draw.
            </p>
          </li>
        </ul>

        <h3 className={styles.rulesSubtitle}>Battle Phase Scoring</h3>
        <p>
          The player with more camp victories wins the battle phase. If there's no clear winner, the turn ends in a
          draw.
        </p>
        <strong>Gold Rewards</strong>
        <p>
          Victorious players claim a portion of the opponent's gold, calculated based on the number of camp victories:
        </p>
        <ul className={styles.conditions}>
          <li>
            <strong>One victory more than the opponent:</strong> The winning player takes {settings.loot.percent}% of the opponent's total
            gold.
          </li>
          <li>
            <strong>Two victories more than the opponent:</strong> The winning player takes {settings.loot.percent + 10}% of the opponent's total
            gold.
          </li>
          <li>
            <strong>Three victories more than the opponent:</strong> The winning player takes {settings.loot.percent + 20}% of the opponent's
            total gold.
          </li>
        </ul>

        <h3 className={styles.rulesSubtitle}>End Game</h3>
        <p>The game concludes after {settings.turns.maximum} turns. The player with the most accumulated gold is declared the winner.</p>

        <h3 className={styles.rulesSubtitle}>Conclusion</h3>
        <p>
          Embark on this strategic journey, where careful planning and bold decisions lead to glory. Good luck, and
          enjoy the game!
        </p>

        <h3 className={styles.rulesSubtitle}>Credits</h3>
        <p>
          Game Designer and Creator: <a href='https://mateuszgomolka.com'>Mateusz Gomolka</a>
        </p>
      </div>
      <div className={styles.closeModal} onClick={closeModal}>
        <FontAwesomeIcon icon={faCircleXmark} />
      </div>
    </div>
  );
};

export default RulesModal;
