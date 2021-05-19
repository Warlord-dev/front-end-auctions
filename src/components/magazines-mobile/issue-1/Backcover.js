import React from 'react';
import styles from './backcover.module.scss';

const Backcover = () => {
  return (
    <div className={styles.wrapper}>
      <img src="./magazine/1/backcover/moshed-05-08-2-50-3 1.png" className={styles.background} />
      <img src="./magazine/1/backcover/image 408.png" className={styles.logo} />
      <h1 className={styles.digi1}>
        D<br />
        I<br />
        G<br />
        I<br />
        F<br />
        I<br />
        Z<br />
        Z<br />
        Y
      </h1>
      <h1 className={styles.digi2}>
        D<br />
        I<br />
        G<br />
        I<br />
        F<br />
        I<br />
        Z<br />
        Z<br />
        Y
      </h1>
      <h1 className={styles.digi3}>
        D<br />
        I<br />
        G<br />
        I<br />
        F<br />
        I<br />
        Z<br />
        Z<br />
        Y
      </h1>
    </div>
  );
};

export default Backcover;
