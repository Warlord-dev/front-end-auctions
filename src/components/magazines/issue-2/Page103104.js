import React from 'react';
import styles from './page103104.module.scss';
import Link from 'next/link';

const Page103104 = () => {
  return (
    <div className={styles.wrapper}>
      <img src="./magazine/1/103_104/image2.png" className={styles.image2} />
       <img src="./magazine/1/103_104/image1.png" className={styles.image1} />
       <img src="./magazine/1/103_104/image4.png" className={styles.image4} />
       <img src="./magazine/1/103_104/image3.png" className={styles.image3} />
       <img src="./magazine/1/103_104/image5.png" className={styles.image5} />
       <img src="./magazine/1/103_104/image6.png" className={styles.image6} />
       <img src="./magazine/1/103_104/image7.png" className={styles.image7} />
       <img src="./magazine/1/103_104/image8.png" className={styles.image8} />
       <img src="./magazine/1/103_104/image9.png" className={styles.image9} />
       <img src="./magazine/1/103_104/image10.png" className={styles.image10} />
       <Link href="https://www.linkedin.com/in/maria-belen-barquin-669994129"><a className={styles.text1}>
       Belen Barquin
        </a>
       </Link>
       <p className={styles.text2}>Ahu Agu</p>
       <Link href="https://twitter.com/tonychizzyibe?lang=en"><a className={styles.text3}>
       Anthony Ibegbulem
        </a>
       </Link>
    </div>
  );
};

export default Page103104;
