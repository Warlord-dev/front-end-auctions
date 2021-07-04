import React from 'react';
import styles from './page7172.module.scss';
import Link from 'next/link';

const Page7172 = () => {
  return (
    <div className={styles.wrapper}>
      <img src="/magazine/3/images/71_72/image1.png" className={styles.image1}/>
      <img src="/magazine/3/images/71_72/image2.png" className={styles.image2}/>
      <Link href="https://www.instagram.com/lilium.labs/">
        <a target="_blank">
        <p className={styles.text1}>Lilium Labs</p> 
        </a>
      </Link>
    </div>
  );
};

export default Page7172;
