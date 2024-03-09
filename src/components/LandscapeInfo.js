import styles from './LandscapeInfo.module.scss';

const LandscapeInfo = () => {
  return (
    <div className={styles.landscapeInfo}>
      <h2>This game is not designed for landscape view</h2>
      <p>Please switch to portrait view</p>
    </div>
  );
};

export default LandscapeInfo;
