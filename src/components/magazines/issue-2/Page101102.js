import React from 'react';
import styles from './page101102.module.scss';
import Link from 'next/link';

const Page101102 = () => {
  return (
    <div className={styles.wrapper}>
       <img src="./magazine/1/101_102/image1.png" className={styles.image1} />
      <img src="./magazine/1/101_102/image2.png" className={styles.image2} />
      <img src="./magazine/1/101_102/image3.png" className={styles.image3} />
      <img src="./magazine/1/101_102/image4.png" className={styles.image4} />
      <Link href="https://shwangerika.cargo.site/"><a className={styles.text1}>
      Shiu Studio
      </a>
      </Link>
      <Link href="https://instagram.com/veletagram"><a className={styles.text2}>
      DOMINGO BETTE ENCOUR
      </a>
      </Link>
    </div>
  );
};

export default Page101102;
