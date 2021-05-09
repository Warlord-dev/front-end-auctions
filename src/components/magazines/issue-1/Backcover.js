import React from 'react';
import styles from './backcover.module.scss';

const Backcover = () => {
  return (
    <div className={styles.wrapper}>
      <img src="./magazine/backcover/moshed-05-08-2-50-3 1.png" className={styles.background} />
      <img src="./magazine/backcover/image 408.png" className={styles.logo} />
      <img src="./magazine/backcover/D I G I F I Z Z Y.png" className={styles.text} />
    </div>
  );
};

export default Backcover;
