import React from 'react';
import styles from './page4950.module.scss';
import Link from 'next/link';

const Page4950 = () => {
  return (
    <div className={styles.wrapper}>
      <img src="/magazine/3/images/49_50/image1.png" className={styles.image1}/>  
      <div className={styles.image2}>
      <img src="/magazine/3/images/49_50/image2.gif" className={styles.image3}/>   
      </div>
      <p className={styles.text1}>Upgrading Optionality. </p> 
      <Link href="https://www.opyn.co/">
        <a target="_blank">
        <p className={styles.text2}>opyn</p> 
        </a>
      </Link>
      <div className={styles.image4}>
        <div className={[styles.animationFrame, styles.rightSideImageWrapper].join(' ')}>
          <img src="/magazine/3/images/49_50/image2.png" />
          <img src="/magazine/3/images/49_50/image2.png" />
          <img src="/magazine/3/images/49_50/image2.png" />
          <img src="/magazine/3/images/49_50/image2.png" />
        </div>
      </div>
      <p className={styles.text3}>Get With the Greeks</p> 
    </div>
  );
};

export default Page4950;
