import styles from './RulesModal.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';

const RulesModal = ({ closeModal }) => {
  return (
    <div className={styles.rulesModal}>
      <h2 className={styles.rulesModalTitle}>Rules</h2>
      <p className={styles.rulesModalRules}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Turpis massa sed elementum tempus egestas. Natoque penatibus et magnis dis parturient montes. Eget
        nunc scelerisque viverra mauris in aliquam. Euismod lacinia at quis risus sed vulputate odio ut. Nibh tortor id
        aliquet lectus. Enim lobortis scelerisque fermentum dui faucibus. Purus sit amet volutpat consequat mauris nunc
        congue nisi. Quam pellentesque nec nam aliquam sem et. Ultricies mi quis hendrerit dolor magna. Id diam vel quam
        elementum pulvinar etiam. Sapien faucibus et molestie ac feugiat sed lectus. Condimentum lacinia quis vel eros
        donec ac odio. Dignissim suspendisse in est ante. Placerat in egestas erat imperdiet sed euismod. Nisi
        scelerisque eu ultrices vitae auctor eu. Malesuada fames ac turpis egestas maecenas pharetra convallis posuere
        morbi. Felis bibendum ut tristique et egestas quis. Nunc id cursus metus aliquam. Adipiscing bibendum est
        ultricies integer quis auctor elit sed. Feugiat nisl pretium fusce id. Id neque aliquam vestibulum morbi. Est
        placerat in egestas erat imperdiet sed euismod. Aliquet porttitor lacus luctus accumsan tortor posuere. Sed sed
        risus pretium quam. Sed turpis tincidunt id aliquet risus feugiat. Pulvinar neque laoreet suspendisse interdum
        consectetur libero id faucibus. Eget mi proin sed libero enim sed faucibus turpis. Porttitor rhoncus dolor purus
        non enim praesent elementum facilisis leo. Non blandit massa enim nec dui nunc mattis enim. Proin sed libero
        enim sed faucibus turpis in eu mi
      </p>
      <div className={styles.closeModal} onClick={closeModal}>
        <FontAwesomeIcon icon={faCircleXmark} />
      </div>
    </div>
  );
};

export default RulesModal;
