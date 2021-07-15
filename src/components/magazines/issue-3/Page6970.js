import React from 'react';
import styles from './page6970.module.scss';
import Link from 'next/link';

const Page6970 = () => {
  return (
    <div className={styles.wrapper}>
      <img src="/magazine/3/images/69_70/image1.png" className={styles.image1}/>
      <img src="/magazine/3/images/69_70/image2.png" className={styles.image2}/>
      <Link href="https://www.instagram.com/lilium.labs/">
        <a target="_blank">
        <p className={styles.text1}>Lilium Labs</p> 
        </a>
      </Link>
    </div>
  );
};

export default Page6970;
