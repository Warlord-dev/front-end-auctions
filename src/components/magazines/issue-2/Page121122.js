import React from 'react';
import styles from './page121122.module.scss';
import Link from 'next/link';

const Page121122 = () => {
  return (
    <div className={styles.wrapper}>
       <img src="./magazine/1/121_122/image1.png" className={styles.image1} />
       <img src="./magazine/1/121_122/image1.png" className={styles.image2} />
       <img src="./magazine/1/121_122/image1.png" className={styles.image3} />
       <img src="./magazine/1/121_122/image1.png" className={styles.image4} />
       <img src="./magazine/1/121_122/image2.png" className={styles.image5} />
       <img src="./magazine/1/121_122/image3.png" className={styles.image6} />
       <img src="./magazine/1/121_122/image4.png" className={styles.image7} />
       <img src="./magazine/1/121_122/image5.png" className={styles.image8} />
       <Link href="https://the-dots.com/users/tania-viegas-918782"><a className={styles.text1}>
       Mask of Sanity
        </a>
       </Link>
       <p className={styles.text2}>Tania Viegas</p>
       <Link href="www.paolaguivel.com"><a className={styles.text3}>
       Paola Olaguivel
        </a>
       </Link>
    </div>
  );
};

export default Page121122;
