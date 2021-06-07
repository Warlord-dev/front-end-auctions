import React from 'react';
import styles from './page9798.module.scss';
import Link from 'next/link';

const Page9798 = () => {
  return (
    <div className={styles.wrapper}>
       <img src="./magazine/1/97_98/image1.png" className={styles.image1} />
       <img src="./magazine/1/97_98/image2.png" className={styles.image2} />
       <img src="./magazine/1/97_98/image4.png" className={styles.image4} />
       <img src="./magazine/1/97_98/image4.png" className={styles.image5} />
       <img src="./magazine/1/97_98/image3.png" className={styles.image3} />
       <img src="./magazine/1/97_98/image5.png" className={styles.image6} />
       <Link href="www.instagram.com/pr.esc/"><a className={styles.text1}>
        SJessica Schott
        </a>
       </Link>
       <p className={styles.text2}>BBLUNDERR</p>
       <p className={styles.text3}>minecraft</p>
    </div>
  );
};

export default Page9798;
