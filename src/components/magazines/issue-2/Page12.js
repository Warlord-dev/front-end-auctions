import React from 'react';
import styles from './page12.module.scss';

const Page12 = () => {
  return (
    <div className={styles.wrapper}>
      <img src="./magazine/2/images/01_02.png" className={styles.background} />
      <div className={styles.text1}>
        Asterism | A Decentralised Autonomous Organisation coordinates across groups of people that
        are aligned to a certain set of values and long term purpose. It uses Smart Contracts to
        automate enforcement of minaturised agreements between members, offering them greater
        flexibility and more frequent tangible results from what they contribute.
      </div>
      <video autoPlay loop muted className={styles.video}>
        <source src="./magazine/2/images/01_02_movie.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default Page12;
