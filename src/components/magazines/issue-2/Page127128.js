import React from 'react';
import styles from './page127128.module.scss';
import Link from 'next/link';

const Page127128 = () => {
  return (
    <div className={styles.wrapper}>
       <video className={styles.image1} muted loop autoPlay>
        <source src="./magazine/2/images/127_128/video1.mp4" type="video/mp4" />
       </video>
       <img src="./magazine/2/images/127_128/image2.png" className={styles.image2} />
       <img src="./magazine/2/images/127_128/image3.png" className={styles.image3} />
       <img src="./magazine/2/images/127_128/image4.png" className={styles.image4} />
       <img src="./magazine/2/images/127_128/image5.png" className={styles.image5} />
       <Link href="www.luciidigital.com"><a className={styles.text1}>
       LUCII
        </a>
       </Link>
       <Link href="http://instagram.com/onandno.project"><a className={styles.text2}>
       Onando Project
        </a>
       </Link>
    </div>
  );
};

export default Page127128;
