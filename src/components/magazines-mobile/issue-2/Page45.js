import React from 'react';
import styles from './page45.module.scss';

const Page45 = () => {
  return (
    <div className={styles.wrapper}>
      <video autoPlay muted loop className={styles.video1}>
        <source src="./magazine/2/images/49_50_earth.mp4" type="video/mp4" />
      </video>
      <img src="./magazine/2/images/49_50_image2.png" className={styles.image1} />
      <img src="./magazine/2/images/49_50_image1.png" className={styles.image2} />
      <div className={styles.text1}>INTERNATIONAL PLAYERS</div>
      <div className={styles.text2}>P U E R T O</div>
      <div className={styles.text3}>RICO</div>
      <div className={styles.text4}> Illustration by Toothless.</div>
    </div>
  );
};

export default Page45;
