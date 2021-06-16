import React from 'react';
import styles from './page105106.module.scss';
import Link from 'next/link';

const Page105106 = () => {
  return (
    <div className={styles.wrapper}>
      <img src="./magazine/2/images/105_106/image2.png" className={styles.image2} />
       <img src="./magazine/2/images/105_106/image1.png" className={styles.image1} />
       <img src="./magazine/2/images/105_106/image4.png" className={styles.image4} />
       <img src="./magazine/2/images/105_106/image3.png" className={styles.image3} />
       <img src="./magazine/2/images/105_106/image5.png" className={styles.image5} />
       <img src="./magazine/2/images/105_106/image6.png" className={styles.image6} />
       <img src="./magazine/2/images/105_106/image7.png" className={styles.image7} />
       <img src="./magazine/2/images/105_106/image8.png" className={styles.image8} />
       <img src="./magazine/2/images/105_106/image9.png" className={styles.image9} />
       <img src="./magazine/2/images/105_106/image10.png" className={styles.image10} />
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

export default Page105106;
