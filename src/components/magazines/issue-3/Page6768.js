import React from 'react';
import styles from './page6768.module.scss';
import Link from 'next/link';

const Page6768 = () => {
  return (
    <div className={styles.wrapper}>
      <img src="/magazine/3/images/67_68/image1.png" className={styles.image1}/>
      <img src="/magazine/3/images/67_68/image2.png" className={styles.image2}/>
      <Link href="https://www.instagram.com/lilium.labs/">
        <a target="_blank">
        <p className={styles.text1}>Lilium Labs</p> 
        </a>
      </Link>
    </div>
  );
};

export default Page6768;
