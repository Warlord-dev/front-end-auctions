import React from 'react';
import styles from './page7980.module.scss';
import Link from 'next/link';

const Page7980 = () => {
  return (
    <div className={styles.wrapper}>
      <video className={styles.image1} muted loop autoPlay>
        <source src="./magazine/1/79_80/video1.mp4" type="video/mp4" />
       </video>
      <img src="./magazine/1/79_80/image2.png" className={styles.image2} />
      
      <div className={styles.image3}></div>
      <div className={styles.image4}></div>
      <p className={styles.text1}><Link href="https://www.instagram.com/aaaronkaufman/"><a className={styles.text2}>Aaron Kaufman</a></Link> is a multidisciplinary graphic artist currently living and working in Montreal, Canada. With a background in traditional arts, Aaron applies his artistic vision to contemporary mediums and creates visually striking work. His work has been part of award winning campaigns, gallery exhibits worldwide, and concerts for major acts. He enjoys exploring juxtapositions between forms, colors, patterns, environments and ideas to create dynamic and thought-provoking imagery.</p>
      <Link href="https://www.instagram.com/ditadivita/"><a>
          <p className={styles.text3}>DITA</p>
        </a>
      </Link>
      <p className={styles.text4}>DITA is a YouTube-taught 3D designer with a background in fashion and graphic design. What fascinates DITA the most about digital art is the endless creative possibilities without real life restrictions. DITA enjoys expanding their knowledge of general 3D techniques and combining this with apparel design.</p>
    </div>
  );
};

export default Page7980;
