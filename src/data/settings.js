import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSkull, faShield, faWandSparkles, faShieldHalved } from '@fortawesome/free-solid-svg-icons';

export const settings = {
  units: {
    unit1: {
      id: 'unit1',
      name: 'Attacker',
      attack: 8,
      defence: 2,
      cost: 10,
      icon: <FontAwesomeIcon icon={faSkull} />,
    },
    unit2: {
      id: 'unit2',
      name: 'Defender',
      attack: 1,
      defence: 9,
      cost: 10,
      icon: <FontAwesomeIcon icon={faShield} />,
    },
    unit3: {
      id: 'unit3',
      name: 'Wizzard',
      attack: 40,
      defence: 10,
      cost: 50,
      icon: <FontAwesomeIcon icon={faWandSparkles} />,
    },
    unit4: {
      id: 'unit4',
      name: 'Commander',
      attack: 10,
      defence: 40,
      cost: 50,
      icon: <FontAwesomeIcon icon={faShieldHalved} />,
    },
  },
  castle: {
    level: {
      initial: 1,
      upgradeBy: 1,
    },
    cost: {
      initial: 50,
      increaseBy: 10,
    },
  },
  gold: {
    total: {
      initial: 1000,
    },
    income: {
      initial: 100,
      increaseBy: 50,
    },
    limit: {
      thisTurn: {
        initial: 100,
      },
      nextTurn: {
        initial: 100,
        increaseBy: 10,
      },
    },
  },
  turns: {
    maximum: 10,
  },
  loot: {
    percent: 10,
  },
};
