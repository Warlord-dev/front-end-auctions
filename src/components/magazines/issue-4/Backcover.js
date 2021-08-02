import React from 'react';
import styles from './backcover.module.scss';

const Backcover = () => {
  return (
    <div className={styles.wrapper}>
      <img src="./magazine/3/images/cover/backcover.png" className={styles.background} />
      
    </div>
  );
};

export default Backcover;
