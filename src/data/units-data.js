import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSkull, faShield, faWandSparkles, faShieldHalved } from '@fortawesome/free-solid-svg-icons';

export const units = [
  {
    id: 'unit1',
    name: 'Attacker',
    attack: 8,
    defence: 2,
    cost: 10,
    icon: <FontAwesomeIcon icon={faSkull} />,
  },
  {
    id: 'unit2',
    name: 'Defender',
    attack: 1,
    defence: 9,
    cost: 10,
    icon: <FontAwesomeIcon icon={faShield} />,
  },
  {
    id: 'unit3',
    name: 'Commander',
    attack: 10,
    defence: 40,
    cost: 50,
    icon: <FontAwesomeIcon icon={faShieldHalved} />,
  },
  {
    id: 'unit4',
    name: 'Wizzard',
    attack: 40,
    defence: 10,
    cost: 50,
    icon: <FontAwesomeIcon icon={faWandSparkles} />,
  },
];
