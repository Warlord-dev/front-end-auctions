import React from 'react';
import styles from './page119120.module.scss';
import Link from 'next/link';

const Page119120 = () => {
  return (
    <div className={styles.wrapper}>
       <img src="./magazine/1/119_120/image1.png" className={styles.image1} />
       
       <video className={styles.image3} muted loop autoPlay>
        <source src="./magazine/1/119_120/video4.mp4" type="video/mp4" />
       </video>
       <video className={styles.image4} muted loop autoPlay>
        <source src="./magazine/1/119_120/video3.mp4" type="video/mp4" />
       </video>
       <video className={styles.image5} muted loop autoPlay>
        <source src="./magazine/1/119_120/video1.mp4" type="video/mp4" />
       </video>
       <video className={styles.image2} muted loop autoPlay>
        <source src="./magazine/1/119_120/video2.mp4" type="video/mp4" />
       </video>
       <Link href="https://www.instagram.com/ava3ddesigners/"><a className={styles.text1}>
       AVA Designers
        </a>
       </Link>
       <Link href="http://joannahir.com/"><a className={styles.text2}>
       JOANNA HIR
        </a>
       </Link>
    </div>
  );
};

export default Page119120;
