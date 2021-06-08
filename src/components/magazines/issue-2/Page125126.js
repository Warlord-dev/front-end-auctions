import React from 'react';
import styles from './page125126.module.scss';
import Link from 'next/link';

const Page125126 = () => {
  return (
    <div className={styles.wrapper}>
       <video className={styles.image1} muted loop autoPlay>
        <source src="./magazine/1/125_126/video1.mp4" type="video/mp4" />
       </video>
       <img src="./magazine/1/125_126/image2.png" className={styles.image2} />
       <p className={styles.text1}>Like A Statue</p>
       <p className={styles.text2}>IMPSSBL</p>
       <p className={styles.text3}>Sourav Agarwala</p>
       {/* <img src="./magazine/1/97_98/image4.png" className={styles.image4} />
       <img src="./magazine/1/97_98/image4.png" className={styles.image5} />
       <img src="./magazine/1/97_98/image3.png" className={styles.image3} />
       <img src="./magazine/1/97_98/image5.png" className={styles.image6} />
       <video className={styles.image2} muted loop autoPlay>
        <source src="./magazine/1/97_98/espa_skin.mp4" type="video/mp4" />
       </video>
       <Link href="www.instagram.com/pr.esc/"><a className={styles.text1}>
        SJessica Schott
        </a>
       </Link>
       <p className={styles.text2}>BBLUNDERR</p>
       <p className={styles.text3}>minecraft</p> */}
    </div>
  );
};

export default Page125126;
