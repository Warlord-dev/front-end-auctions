import React from 'react';
import styles from './page117118.module.scss';
import Link from 'next/link';

const Page117118 = () => {
  return (
    <div className={styles.wrapper}>
      <img src="./magazine/1/117_118/image1.png" className={styles.image1} />
       <video className={styles.image2} muted loop autoPlay>
        <source src="./magazine/1/117_118/video1.mp4" type="video/mp4" />
       </video>
       <Link href="http://instagram.com/mysecunha"><a className={styles.text1}>
       Myse Cunha
        </a>
       </Link>
       <p className={styles.text2}>Essentia Collection</p>
       <p className={styles.text3}>Lumps</p>
       <p className={styles.text4}>Antonio Lopez</p>
    </div>
  );
};

export default Page117118;
