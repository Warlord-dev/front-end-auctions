import React from 'react';
import styles from './page125126.module.scss';
import Link from 'next/link';

const Page125126 = () => {
  return (
    <div className={styles.wrapper}>
       <img src="./magazine/1/125_126/image1.png" className={styles.image1} />
       
       <video className={styles.image3} muted loop autoPlay>
        <source src="./magazine/1/125_126/video4.mp4" type="video/mp4" />
       </video>
       <video className={styles.image4} muted loop autoPlay>
        <source src="./magazine/1/125_126/video3.mp4" type="video/mp4" />
       </video>
       <video className={styles.image5} muted loop autoPlay>
        <source src="./magazine/1/125_126/video1.mp4" type="video/mp4" />
       </video>
       <video className={styles.image2} muted loop autoPlay>
        <source src="./magazine/1/125_126/video2.mp4" type="video/mp4" />
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

export default Page125126;
