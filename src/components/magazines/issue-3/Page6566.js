import React, { useRef, useState }  from 'react';
import styles from './page6566.module.scss';
import Link from 'next/link';

const Page6566 = () => {
 
  return (
    <div className={styles.wrapper}>
      <div className={styles.image1}>
        <video className={styles.image2} muted loop autoPlay>
          <source src="./magazine/3/images/65_66/video1.mp4" type="video/mp4" />
        </video>
      </div>
      <Link href="https://www.instagram.com/howiseedatworld/?hl=en">
        <a target="_blank">
          <p className={styles.text1}>Hellion</p>   
        </a>
      </Link>
      <p className={styles.text2}>howiseedatworld</p>  
      <img src="/magazine/3/images/65_66/image1.png" className={styles.image3}/>
      <Link href="https://www.instagram.com/lisa_gen_paris_/">
        <a target="_blank">
        <p className={styles.text3}>Tom Pastor</p> 
        </a>
      </Link>
      <p className={styles.text4}>Lisa Gen</p> 
    </div>
  );
};

export default Page6566;
