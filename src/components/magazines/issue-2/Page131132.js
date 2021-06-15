import React, { useState } from 'react';
import styles from './page131132.module.scss';
import Link from 'next/link';

const Page131132 = () => {
  
  return (
    <div className={styles.wrapper}>
      <video className={styles.image1} muted loop autoPlay>
        <source src="./magazine/2/images/131_132/video1.mp4" type="video/mp4" />
       </video>
       <img src="./magazine/2/images/131_132/image2.png" className={styles.image2} />
       <p className={styles.text1}>Like A Statue</p>
       <p className={styles.text2}>IMPSSBL</p>
       <p className={styles.text3}>Sourav Agarwala</p>
    </div>
  );
};

export default Page131132;
